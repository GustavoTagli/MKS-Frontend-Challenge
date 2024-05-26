import { useCart } from '@/hooks/useCart'
import { cardItemVariants } from '@/lib/framer-motion/variants'
import { ProductInCart } from '@/types/product'
import { formatCurrency } from '@/utils/format-currency'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import { CloseButton } from '../ui/closeButton'
import { QuantityControl } from './components/quantity-control'

import * as Styles from './styles'

export function CartItem(product: ProductInCart) {
  const { removeProduct } = useCart()
  const count = useMotionValue(0)
  const amount = useTransform(count, (value) =>
    formatCurrency(Math.round(value))
  )

  useEffect(() => {
    const itemTotalAmount = product.quantity * product.price

    const animation = animate(count, itemTotalAmount, {
      duration: 0.6,
      ease: 'backInOut',
    })

    return animation.stop
  }, [product.quantity, product.price, count])

  const handleDeleteFromCart = () => {
    removeProduct(product.id)
  }

  return (
    <Styles.Card
      variants={cardItemVariants}
      layout
      animate={{ scale: 1, opacity: 1 }}
      exit={cardItemVariants.exit}
      transition={{ type: 'spring', damping: 17, stiffness: 100 }}
    >
      <Styles.CardImage>
        <Image
          width={60}
          height={60}
          src={product.photo}
          alt={`Imagem do produto: ${product.name}`}
        />
      </Styles.CardImage>

      <Styles.CardTitle>{`${product.brand} ${product.name}`}</Styles.CardTitle>

      <QuantityControl productId={product.id} quantity={product.quantity} />

      <Styles.CardPriceContainer>
        R$<motion.span>{amount}</motion.span>
      </Styles.CardPriceContainer>

      <Styles.ContainerAbsolute>
        <CloseButton size={16} onClick={handleDeleteFromCart} padding={2} />
      </Styles.ContainerAbsolute>
    </Styles.Card>
  )
}
