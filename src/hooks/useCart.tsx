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
  toggleCart,
} from '@/lib/redux/cart/slice'
import { Product } from '@/types/product'
import { useDispatch, useSelector } from 'react-redux'

export function useCart() {
  const dispatch = useDispatch()

  return {
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
}
