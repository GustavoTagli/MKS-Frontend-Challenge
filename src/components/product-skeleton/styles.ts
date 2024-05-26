import { Skeleton, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const MotionStack = styled(motion(Stack))`
  background-color: var(--primary-color);
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  position: relative;
  width: 220px;
  height: 300px;
  padding: 14px;
`

export const SkeletonRectangular = styled(Skeleton)`
  margin: 0 auto !important;
`

export const SkeletonButton = styled(Skeleton)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 32px;
  width: 100%;
`
