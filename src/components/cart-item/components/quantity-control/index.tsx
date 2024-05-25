import { Minus, Plus } from '@phosphor-icons/react'
import { QuantityControlProps } from './types'
import { useCart } from '@/hooks/useCart'

import * as Styles from './styles'

export function QuantityControl({ productId, quantity }: QuantityControlProps) {
  const { decreaseQuantityProduct, increaseQuantityProduct } = useCart()

  return (
    <Styles.Container>
      <p>Qtd:</p>
      <div>
        <button
          onClick={() => decreaseQuantityProduct(productId)}
          disabled={quantity === 1 ? true : false}
          className={quantity === 1 ? 'disabled' : ''}
        >
          <Minus size={10} />
        </button>
        <span></span>
        <p>{quantity}</p>
        <span></span>
        <button onClick={() => increaseQuantityProduct(productId)}>
          <Plus size={10} />
        </button>
      </div>
    </Styles.Container>
  )
}
