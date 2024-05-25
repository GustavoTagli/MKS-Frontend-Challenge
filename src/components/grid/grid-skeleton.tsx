import { Skeleton, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const MotionStack = motion(Stack);

export function GridSkeleton() {
  return (
    <MotionStack
      data-testid='grid-skeleton'
      initial={{ opacity: 0, y: 40 }}
      animate='visible'
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            y: { stiffness: 1000, velocity: -100 },
          },
        },
      }}
      spacing={1}
      padding={'14px'}
      style={{
        backgroundColor: 'var(--primary-color)',
        borderRadius: '8px',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        width: '220px',
        height: '300px',
      }}
    >
      <Skeleton
        animation='wave'
        variant='rectangular'
        height={130}
        width={150}
        style={{
          margin: '0 auto',
        }}
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
      <Skeleton
        animation='wave'
        variant='rounded'
        width={'100%'}
        height={32}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      />
    </MotionStack>
  );
}
