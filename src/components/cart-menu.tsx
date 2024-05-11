import { Drawer, Stack } from "@mui/material"
import styled from "styled-components"
import { CloseButton } from "./close-button"
import { useCart } from "@/hooks/useCart"
import { CardCartItem } from "./card-cart-item"
import { formatCurrency } from "@/utils/format-currency"
import { useState } from "react"
import { motion } from "framer-motion"
import { ToastMessage } from "./toast-message"

interface CartMenuProps {
	open: boolean
	toggleDrawer: (newOpen: boolean) => void
}

const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 486px;
	height: 100vh;
	background-color: var(--secondary-color);
	color: var(--primary-color);
	padding: 32px;
	position: relative;

	> div:first-of-type {
		display: flex;
		justify-content: space-between;
		align-items: center;

		> h3 {
			font-size: 28px;
			font-family: inherit;
			font-weight: 700;
		}
	}

	@media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
		width: 90vw;
	}
`

const ItemsContainer = styled(motion.div)`
	flex: 0 1 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	margin: 40px 0 120px 0;
	padding: 10px;
	overflow-y: auto;
	height: 100%;

	@media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
		margin-top: 20px;
	}
`

const TotalContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	width: 100%;

	font-size: 24px;
	font-family: inherit;
	font-weight: 700;
	color: var(--primary-color);

	> button,
	> div {
		font-size: 24px;
		font-family: inherit;
		font-weight: 700;
		color: var(--primary-color);
	}

	> div {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 24px 32px;
	}

	> button {
		background-color: var(--dark-10);
		width: 100%;
		margin: 0 auto;
		padding: 24px;

		cursor: pointer;

		outline: none;
		border: none;
	}
`

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 }
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 }
	}
}

export function CartMenu({ open, toggleDrawer }: CartMenuProps) {
	const { cartItems, updateCartItems } = useCart()
	const [openSnackbar, setOpenSnackbar] = useState(false)
	const [openSnackbarEmptyCart, setOpenSnackbarEmptyCart] = useState(false)

	const handleFinishShopping = () => {
		if (cartItems.length === 0) {
			setOpenSnackbarEmptyCart(true)
			return
		}
		updateCartItems([])
		setOpenSnackbar(true)
		toggleDrawer(false)
	}

	return (
		<>
			<Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
				<CartContainer>
					<div>
						<h3>
							Carrinho <br /> de compras
						</h3>
						<CloseButton
							data-testid="close-cart"
							onClick={() => toggleDrawer(false)}
							size={20}
						/>
					</div>
					<ItemsContainer
						initial="closed"
						variants={variants}
						animate={open ? "open" : "closed"}
					>
						{cartItems.length === 0 && (
							<Stack
								alignItems={"center"}
								justifyContent={"center"}
								height={"100%"}
							>
								<p>Seu carrinho está vazio</p>
							</Stack>
						)}
						{cartItems.map((item) => (
							<CardCartItem key={item.id} {...item} />
						))}
					</ItemsContainer>
					<TotalContainer>
						<div>
							<p>Total</p>
							<span>
								R$
								{formatCurrency(
									cartItems.reduce(
										(accum, item) => accum + item.quantity * item.price,
										0
									)
								)}
							</span>
						</div>
						<button onClick={handleFinishShopping}>Finalizar Compra</button>
					</TotalContainer>
				</CartContainer>
			</Drawer>
			<ToastMessage
				open={openSnackbar}
				onClose={() => setOpenSnackbar(false)}
				message="Compra finalizada com sucesso!"
				severity="success"
			/>
			<ToastMessage
				open={openSnackbarEmptyCart}
				onClose={() => setOpenSnackbarEmptyCart(false)}
				message="Seu carrinho está vazio!"
				severity="info"
			/>
		</>
	)
}
