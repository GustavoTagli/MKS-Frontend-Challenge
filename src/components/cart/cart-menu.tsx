import { Drawer, Stack } from "@mui/material"
import { CloseButton } from "../close-button"
import { useCart } from "@/hooks/useCart"
import { CardCartItem } from "./card-cart-item"
import { formatCurrency } from "@/utils/format-currency"
import { useEffect, useState } from "react"
import {
	AnimatePresence,
	animate,
	motion,
	useMotionValue,
	useTransform
} from "framer-motion"
import { ToastMessage } from "../toast-message"
import { When } from "../when"
import { CartContainer, ItemsContainer, TotalContainer } from "@/styles/Cart.style"

interface CartMenuProps {
	open: boolean
	toggleDrawer: (newOpen: boolean) => void
}

const variants = {
	open: {
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.25,
			staggerDirection: 1
		}
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 }
	}
}

export function CartMenu({ open, toggleDrawer }: CartMenuProps) {
	const { cartItems, updateCartItems } = useCart()
	const [openSnackbar, setOpenSnackbar] = useState(false)
	const [openSnackbarEmptyCart, setOpenSnackbarEmptyCart] = useState(false)
	const count = useMotionValue(0)
	const amount = useTransform(count, (value) => formatCurrency(Math.round(value)))

	useEffect(() => {
		const amountFinal = cartItems.reduce(
			(accum, item) => accum + item.quantity * item.price,
			0
		)
		const animation = animate(count, amountFinal, {
			duration: 1,
			ease: "backInOut"
		})

		return animation.stop
	}, [cartItems])

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
						<When expr={cartItems.length > 0}>
							<AnimatePresence mode="sync">
								{cartItems.map((item) => (
									<CardCartItem key={item.id} {...item} />
								))}
							</AnimatePresence>
						</When>
						<When expr={cartItems.length === 0}>
							<Stack alignItems={"center"} justifyContent={"center"} height={"100%"}>
								<p>Seu carrinho está vazio</p>
							</Stack>
						</When>
					</ItemsContainer>
					<TotalContainer>
						<div>
							<p>Total</p>
							<motion.span>
								R$
								<motion.span>{amount}</motion.span>
							</motion.span>
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
