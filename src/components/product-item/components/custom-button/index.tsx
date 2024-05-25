import { ShoppingBagOpen } from '@phosphor-icons/react'
import { HTMLAttributes } from 'react'

import * as Styles from './styles'

export function CustomButton({ ...rest }: HTMLAttributes<HTMLButtonElement>) {
  return (
    <Styles.ButtonContainer {...rest}>
      <ShoppingBagOpen size={16} />
      <span>Comprar</span>
    </Styles.ButtonContainer>
  )
}
