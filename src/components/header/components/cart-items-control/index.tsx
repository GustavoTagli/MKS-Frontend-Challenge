'use client'

import { useCart } from '@/hooks/useCart'
import { ShoppingCart } from '@phosphor-icons/react'

import * as Styles from './styles'

export function CartItemsControl() {
  const { totalItems, toggleCart } = useCart()

  return (
    <Styles.Container onClick={toggleCart}>
      <ShoppingCart weight='fill' size={20} />
      <span>{totalItems}</span>
    </Styles.Container>
  )
}
