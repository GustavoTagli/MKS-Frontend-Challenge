export const cartItemsVariants = {
  open: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.25,
      staggerDirection: 1,
    },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const cardVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  exit: {
    scale: [1, 0.9, 1],
    opacity: [1, 0.9, 0.6, 0],
    transition: { duration: 0.35, damping: 5 },
  },
}
