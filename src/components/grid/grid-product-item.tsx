import { useCart } from "@/hooks/useCart"
import { Product } from "@/types/product"
import { formatCurrency } from "@/utils/format-currency"
import { Snackbar, Tooltip } from "@mui/material"
import { ShoppingBagOpen } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import styled from "styled-components"

interface GridProductItemProps {
	product: Product
}

const ContainerProduct = styled(motion.div)`
	user-select: none;
	height: 300px;
	width: 220px;
	padding: 14px;
	padding-bottom: 32px;

	position: relative;
	display: flex;
	flex-direction: column;
	gap: 14px;

	background-color: var(--primary-color);
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	overflow: hidden;
	cursor: default;

	> figure {
		height: 130px;
		margin: 0 auto;
		> img {
			width: auto;
			height: 100%;
		}
	}

	> button {
		cursor: pointer;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 12px;
		padding: 8px 0;

		background-color: var(--secondary-color);
		color: var(--primary-color);
		border: none;
		outline: none;

		> span {
			text-transform: uppercase;
			font-family: inherit;
			font-size: 14px;
			font-weight: 600;
		}
	}
`

const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;

	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 6px;

		> h3 {
			font-size: 16px;
			font-weight: 400;
			font-family: inherit;
			color: var(--text-color);

			display: -webkit-box;
			-webkit-line-clamp: 2;
			overflow: hidden;
			-webkit-box-orient: vertical;
		}

		> div {
			display: flex;
			align-items: center;
			gap: 4px;
			padding: 4px 8px;
			height: 24px;

			border-radius: 6px;
			background-color: var(--dark-20);

			> p {
				font-size: 15px;
				font-weight: 700;
				font-family: inherit;
				color: var(--primary-color);
			}
		}
	}
	> p {
		font-size: 10px;
		font-weight: 300;
		font-family: inherit;
		color: var(--text-color);

		display: -webkit-box;
		-webkit-line-clamp: 4;
		overflow: hidden;
		-webkit-box-orient: vertical;
	}
`

export function GridProductItem({ product }: GridProductItemProps) {
	const [openSnackbar, setOpenSnackbar] = useState(false)
	const { cartItems, updateCartItems } = useCart()

	const handleAddToCart = () => {
		if (cartItems.length > 0) {
			let cartItemsArray = cartItems.map((item) => ({ ...item }))

			let existingProductIndex = cartItemsArray.findIndex(
				(item: { id: string }) => item.id === product.id
			)

			if (existingProductIndex != -1) {
				cartItemsArray[existingProductIndex].quantity += 1
			} else {
				cartItemsArray.push({ ...product, quantity: 1 })
			}
			updateCartItems(cartItemsArray)
		} else {
			const newCart = [{ ...product, quantity: 1 }]
			updateCartItems(newCart)
		}
		setOpenSnackbar(true)
	}

	return (
		<>
			<ContainerProduct
				initial={{ opacity: 0 }}
				animate="visible"
				variants={{ visible: { opacity: 1 } }}
			>
				<figure>
					<Image
						src={product.photo}
						alt={`Imagem do produto: ${product.name}`}
						width={170}
						height={130}
					/>
				</figure>
				<ProductInfo>
					<Tooltip title={`${product.brand} ${product.name}`}>
						<div>
							<h3>{`${product.brand} ${product.name}`}</h3>
							<div>
								<p>
									R$
									{formatCurrency(product.price)}
								</p>
							</div>
						</div>
					</Tooltip>
					<p>{product.description}</p>
				</ProductInfo>
				<button onClick={handleAddToCart}>
					<ShoppingBagOpen size={16} />
					<span>Comprar</span>
				</button>
			</ContainerProduct>
			<Snackbar
				open={openSnackbar}
				onClose={() => setOpenSnackbar(false)}
				autoHideDuration={3000}
				message={"Produto adicionado ao carrinho com sucesso!"}
			/>
		</>
	)
}