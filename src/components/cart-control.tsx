import { useCart } from "@/hooks/use-cart"
import { ShoppingCart } from "@phosphor-icons/react"
import { useState } from "react"
import styled from "styled-components"

interface CartControlProps {
	toggleDrawer: (newOpen: boolean) => () => void
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
`

export function CartControl({ toggleDrawer }: CartControlProps) {
	const { cartItems } = useCart()

	return (
		<Container onClick={toggleDrawer(true)}>
			<ShoppingCart weight="fill" size={20} />
			<span>{cartItems.length}</span>
		</Container>
	)
}
