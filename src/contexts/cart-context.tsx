import { CartItem } from "@/types/cart-item"
import { ReactNode, createContext, useEffect, useState } from "react"

export const CartContext = createContext({
	cartItems: [] as CartItem[],
	updateCartItems: (newProducts: CartItem[]) => {}
})

interface ProviderProps {
	children: ReactNode
}

export function CartContextProvider({ children }: ProviderProps) {
	const [cartItems, setCartItems] = useState<CartItem[]>([])

	useEffect(() => {
		const savedCartItems = JSON.parse(
			localStorage.getItem("cart-items-mks") || "[]"
		)
		setCartItems(savedCartItems)
	}, [])

	const updateCartItems = (newProducts: CartItem[]) => {
		console.log(newProducts)
		setCartItems(newProducts)
		localStorage.setItem("cart-items-mks", JSON.stringify(newProducts))
	}

	return (
		<CartContext.Provider
			value={{
				cartItems,
				updateCartItems
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
