import { X } from '@phosphor-icons/react'
import { CloseButtonProps } from './types'

import * as Styles from './styles'

export function CloseButton({ size, padding, ...rest }: CloseButtonProps) {
  return (
    <Styles.Container {...rest} padding={padding}>
      <X size={size} weight='bold' />
    </Styles.Container>
  )
}
