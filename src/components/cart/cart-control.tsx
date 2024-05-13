import { useCart } from "@/hooks/useCart"
import { CartControlContainer } from "@/styles/Cart.style"
import { ShoppingCart } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface CartControlProps {
	toggleDrawer: (newOpen: boolean) => void
}

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
		<CartControlContainer onClick={() => toggleDrawer(true)}>
			<MotionIcon
				animate={isCartItemsChanged ? "active" : "inactive"}
				variants={variants}
				weight="fill"
				size={20}
			/>
			<span>{cartItems.length}</span>
		</CartControlContainer>
	)
}
