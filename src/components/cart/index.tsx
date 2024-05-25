import { useCart } from '@/hooks/useCart'
import { cartItemsVariants } from '@/lib/framer-motion/variants'
import { formatCurrency } from '@/utils/format-currency'
import { Drawer, Stack } from '@mui/material'
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { useEffect } from 'react'
import { CartItem } from '../cart-item'
import { CloseButton } from '../ui/closeButton'
import { When } from '../wrappers/when'
import { useSnackbar } from 'notistack'

import * as Styles from './styles'

export function Cart() {
  const { enqueueSnackbar } = useSnackbar()
  const { cartItems, totalAmount, isOpen, toggleCart, clearCart } = useCart()
  const count = useMotionValue(0)
  const amount = useTransform(count, (value) =>
    formatCurrency(Math.round(value))
  )

  useEffect(() => {
    const animation = animate(count, totalAmount, {
      duration: 1,
      ease: 'backInOut',
    })

    return animation.stop
  }, [cartItems])

  const handleFinishShopping = () => {
    if (cartItems.length === 0) {
      enqueueSnackbar('Adicione produtos ao carrinho', {
        autoHideDuration: 2500,
      })
      return
    }

    enqueueSnackbar('Compra finalizada com sucesso!', {
      variant: 'success',
      autoHideDuration: 2500,
    })
    clearCart()
    toggleCart()
  }

  return (
    <>
      <Drawer anchor='right' open={isOpen} onClose={toggleCart}>
        <Styles.CartContainer>
          <Styles.CartHeader>
            <h3>
              Carrinho <br /> de compras
            </h3>
            <CloseButton
              data-testid='close-cart'
              onClick={toggleCart}
              size={20}
            />
          </Styles.CartHeader>
          <Styles.CartItemsContainer
            initial='closed'
            variants={cartItemsVariants}
            animate={isOpen ? 'open' : 'closed'}
          >
            <When expr={cartItems.length > 0}>
              <AnimatePresence mode='sync'>
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </AnimatePresence>
            </When>

            <When expr={cartItems.length === 0}>
              <Stack
                alignItems={'center'}
                justifyContent={'center'}
                height={'100%'}
              >
                <p>Seu carrinho está vazio</p>
              </Stack>
            </When>
          </Styles.CartItemsContainer>
          <Styles.CartFooter>
            <div>
              <p>Total</p>
              <motion.span>
                R$
                <motion.span>{amount}</motion.span>
              </motion.span>
            </div>
            <button onClick={handleFinishShopping}>Finalizar Compra</button>
          </Styles.CartFooter>
        </Styles.CartContainer>
      </Drawer>
    </>
  )
}
