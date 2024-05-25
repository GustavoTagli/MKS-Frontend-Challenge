'use client'

import { CartItemsControl } from './components/cart-items-control'

import * as Styles from './styles'

export function Header() {
  return (
    <Styles.Container data-testid='heading'>
      <Styles.Logo>
        MKS
        <span>Sistemas</span>
      </Styles.Logo>
      <CartItemsControl />
    </Styles.Container>
  )
}
