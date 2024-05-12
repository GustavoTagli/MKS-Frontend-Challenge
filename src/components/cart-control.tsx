import { useCart } from "@/hooks/useCart"
import { ShoppingCart } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { act, use, useEffect, useState } from "react"
import styled from "styled-components"

interface CartControlProps {
	toggleDrawer: (newOpen: boolean) => void
}

const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	height: 44px;
	padding: 8px 20px;

	border-radius: 8px;

	background-color: var(--primary-color);
	color: var(--dark-10);
	outline: none;
	border: none;
	cursor: pointer;

	> span {
		font-size: 18px;
		font-weight: 700;
	}

	@media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
		height: 32px;
		padding: 8px 12px;
		> svg {
			width: 16px;
			height: 16px;
		}
		> span {
			font-size: 14px;
		}
	}
`

const MotionIcon = motion(ShoppingCart)

const variants = {
	active: {
		scale: 1.1,
		rotate: [0, 110, -110, 0],
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 4
		}
	},
	inactive: {
		scale: 1
	}
}

export function CartControl({ toggleDrawer }: CartControlProps) {
	const { cartItems } = useCart()
	const [isCartItemsChanged, setIsCartItemsChanged] = useState(false)

	useEffect(() => {
		setIsCartItemsChanged(true)
		const timer = setTimeout(() => {
			setIsCartItemsChanged(false)
		}, 800)

		return () => clearTimeout(timer)
	}, [cartItems])

	return (
		<Container onClick={() => toggleDrawer(true)}>
			<MotionIcon
				animate={isCartItemsChanged ? "active" : "inactive"}
				variants={variants}
				weight="fill"
				size={20}
			/>
			<span>{cartItems.length}</span>
		</Container>
	)
}
