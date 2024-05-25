import { HTMLAttributes } from 'react'

export interface CloseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size: number
  padding?: number
}

export interface ContainerProps {
  padding?: number
}
