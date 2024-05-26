import { skeletonVariants } from '@/lib/framer-motion/variants'
import { Skeleton, Stack } from '@mui/material'

import * as Styles from './styles'

export function ProductSkeleton() {
  return (
    <Styles.MotionStack
      data-testid='grid-skeleton'
      initial={skeletonVariants.initial}
      animate='visible'
      variants={skeletonVariants}
      spacing={1}
    >
      <Styles.SkeletonRectangular
        animation='wave'
        variant='rectangular'
        height={130}
        width={150}
      />

      <Stack spacing={2} direction={'row'} alignItems={'center'}>
        <Skeleton
          animation='wave'
          variant='text'
          sx={{ fontSize: '1.8rem' }}
          width={'60%'}
        />
        <Skeleton
          animation='wave'
          variant='rounded'
          width={'40%'}
          height={24}
        />
      </Stack>
      <Stack>
        <Skeleton animation='wave' variant='text' sx={{ fontSize: '.6rem' }} />
        <Skeleton animation='wave' variant='text' sx={{ fontSize: '.6rem' }} />
        <Skeleton animation='wave' variant='text' sx={{ fontSize: '.6rem' }} />
      </Stack>
      <Styles.SkeletonButton animation='wave' variant='rounded' />
    </Styles.MotionStack>
  )
}
