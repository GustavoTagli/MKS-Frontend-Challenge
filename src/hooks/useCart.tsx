import {
  selectCartIsOpen,
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from '@/lib/redux/cart/cart.selectors'
import {
  addProduct,
  clearCart,
  decreaseQuantityProduct,
  increaseQuantityProduct,
  removeProduct,
  setCartItems,
  toggleCart,
} from '@/lib/redux/cart/slice'
import { Product, ProductInCart } from '@/types/product'
import { useDispatch, useSelector } from 'react-redux'

export function useCart() {
  const dispatch = useDispatch()

  const cart = {
    cartItems: useSelector(selectCartItems),
    totalItems: useSelector(selectCartItemsCount),
    totalAmount: useSelector(selectCartTotal),
    isOpen: useSelector(selectCartIsOpen),
    toggleCart: () => dispatch(toggleCart()),
    clearCart: () => dispatch(clearCart()),
    addProduct: (product: Product) => dispatch(addProduct(product)),
    removeProduct: (productId: string) => dispatch(removeProduct(productId)),
    increaseQuantityProduct: (productId: string) =>
      dispatch(increaseQuantityProduct(productId)),
    decreaseQuantityProduct: (productId: string) =>
      dispatch(decreaseQuantityProduct(productId)),
  }

  return cart
}
