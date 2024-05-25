import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { stateProps } from './types'
import { Product, ProductInCart } from '@/types/product'

const initialState: stateProps = {
  cartItems: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<ProductInCart[]>) => {
      state.cartItems = action.payload
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === product.id
      )

      if (productIndex !== -1) {
        state.cartItems[productIndex].quantity += 1
      } else {
        state.cartItems.push({ ...product, quantity: 1 })
      }

      localStorage.setItem('cart-items-mks', JSON.stringify(state.cartItems))
    },
    increaseQuantityProduct: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const productIndex = state.cartItems.findIndex((item) => item.id === id)

      if (productIndex !== -1) {
        state.cartItems[productIndex].quantity += 1
      }

      localStorage.setItem('cart-items-mks', JSON.stringify(state.cartItems))
    },
    decreaseQuantityProduct: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const productIndex = state.cartItems.findIndex((item) => item.id === id)

      if (productIndex !== -1) {
        state.cartItems[productIndex].quantity -= 1
      }

      localStorage.setItem('cart-items-mks', JSON.stringify(state.cartItems))
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const productIndex = state.cartItems.findIndex((item) => item.id === id)

      if (productIndex !== -1) {
        state.cartItems.splice(productIndex, 1)
      }

      localStorage.setItem('cart-items-mks', JSON.stringify(state.cartItems))
    },
    clearCart: (state) => {
      state.cartItems.splice(0, state.cartItems.length)
      localStorage.removeItem('cart-items-mks')
    },
  },
})

export default cartSlice.reducer

export const {
  setCartItems,
  toggleCart,
  addProduct,
  removeProduct,
  clearCart,
  increaseQuantityProduct,
  decreaseQuantityProduct,
} = cartSlice.actions
