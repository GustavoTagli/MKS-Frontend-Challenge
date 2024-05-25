'use client'

import { ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCartItems } from '@/lib/redux/cart/slice'
import { ProductInCart } from '@/types/product'

const CartProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCartItems: ProductInCart[] = JSON.parse(
        localStorage.getItem('cart-items-mks') || '[]'
      )
      dispatch(setCartItems(savedCartItems))
    }
  }, [dispatch])

  return <>{children}</>
}

export default CartProvider
