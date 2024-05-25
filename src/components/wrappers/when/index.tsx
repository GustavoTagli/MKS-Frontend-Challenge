import { Fragment } from 'react'
import { WhenProps } from './types'

export function When(props: WhenProps) {
  const { expr, children } = props

  if (expr) return <Fragment>{children}</Fragment>

  return null
}
