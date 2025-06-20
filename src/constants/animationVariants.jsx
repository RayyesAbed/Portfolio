export const imageAnimationVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
  transition: {
    delay: 0.5,
    type: "spring",
    stiffness: 100,
  },
};

export const textAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    delay: 1,
  },
};
