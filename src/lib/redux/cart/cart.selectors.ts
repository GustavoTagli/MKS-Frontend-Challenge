import { ProductInCart } from '@/types/product'

export function selectCartIsOpen(state: { cart: { isOpen: boolean } }) {
  return state.cart.isOpen
}

export function selectCartItems(state: {
  cart: { cartItems: ProductInCart[] }
}) {
  return state.cart.cartItems
}

export function selectCartTotal(state: {
  cart: { cartItems: ProductInCart[] }
}) {
  return state.cart.cartItems.reduce(
    (acc: number, item: ProductInCart) => acc + item.price * item.quantity,
    0
  )
}

export function selectCartItemsCount(state: {
  cart: { cartItems: ProductInCart[] }
}) {
  return state.cart.cartItems.length
}
