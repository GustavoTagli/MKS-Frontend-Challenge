import { CartItem } from "@/types/cart-item"
import Image from "next/image"
import { QuantityControl } from "./quantity-control"
import { formatCurrency } from "@/utils/format-currency"
import styled from "styled-components"
import { CloseButton } from "./close-button"
import { useCart } from "@/hooks/useCart"
import { useState } from "react"
import { motion } from "framer-motion"

const Card = styled(motion.div)`
	display: grid;
	grid-template-columns: 1fr 4fr 1fr 3fr;
	gap: 10px;
	align-items: center;
	width: 100%;
	padding: 20px 16px;
	position: relative;

	border-radius: 8px;
	background-color: var(--primary-color);
	color: var(--text-dark);

	> figure {
		height: 60px;
		margin: 0 auto;
		> img {
			width: auto;
			height: 100%;
		}
	}

	> h4 {
		font-size: 14px;
		font-weight: 400;
		font-family: inherit;
		color: var(--dark-20);

		display: -webkit-box;
		-webkit-line-clamp: 3;
		overflow: hidden;
		-webkit-box-orient: vertical;
	}

	@media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
		grid-template-columns: 2fr;
		gap: 12px;
		grid-template-areas:
			"image image"
			"name name"
			"quantity price";

		> figure {
			grid-area: image;
			height: 90px;
		}

		> h4 {
			grid-area: name;
			font-size: 16px;
			text-align: center;
		}
	}
`

const PriceContainer = styled.div`
	> p {
		font-size: 14px;
		font-family: inherit;
		font-weight: 700;
		color: var(--dark-10);
		text-align: right;
	}

	@media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
		grid-area: price;
		background-color: var(--dark-20);
		padding: 8px 12px;
		border-radius: 6px;
		hegiht: 100%;

		> p {
			color: var(--primary-color);
		}
	}
`

const ContainerAbsolute = styled.div`
	position: absolute;
	top: -8px;
	right: -8px;

	@media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
		top: 8px;
		right: 12px;

		> button {
			padding: 0px;
			background-color: transparent;
			svg {
				color: var(--dark-10);
				width: 24px;
				height: 24px;
			}
		}
	}
`
const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 }
		}
	}
}

export function CardCartItem(props: CartItem) {
	const [quantity, setQuantity] = useState(props.quantity || 1)
	const { cartItems, updateCartItems } = useCart()

	const handleDeleteFromCart = () => {
		const newCartItems = cartItems.filter((item) => item.id !== props.id)
		updateCartItems(newCartItems)
	}

	const updateQuantity = (newQuantity: number) => {
		const newCartItems = cartItems.map((item) => {
			if (item.id === props.id) {
				return { ...item, quantity: newQuantity }
			}
			return item
		})
		updateCartItems(newCartItems)
		setQuantity(newQuantity)
	}

	return (
		<Card variants={variants}>
			<figure>
				<Image
					width={60}
					height={60}
					src={props.photo}
					alt={`Imagem do produto: ${props.name}`}
				/>
			</figure>
			<h4>{`${props.brand} ${props.name}`}</h4>
			<QuantityControl quantity={quantity} updateQuantity={updateQuantity} />
			<PriceContainer>
				<p>{`R$${formatCurrency(props.price * props.quantity)}`}</p>
			</PriceContainer>

			<ContainerAbsolute>
				<CloseButton size={16} onClick={handleDeleteFromCart} padding={2} />
			</ContainerAbsolute>
		</Card>
	)
}
