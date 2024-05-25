'use client'

import { Cart } from '@/components/cart'
import { GridProducts } from '@/components/grid-products'

import * as Styles from './styles'

export default function Home() {
  return (
    <>
      <Styles.MainContainer>
        <GridProducts />
        <Cart />
      </Styles.MainContainer>
    </>
  )
}
