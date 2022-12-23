import { styleVariants } from '@vanilla-extract/css'


export const variants = styleVariants({
  primary: {
    backgroundColor: "navy",
    color: "plum"
  },
  secondary: {
    backgroundColor: "plum",
    color: "navy"
  },
  tertiary: {
    backgroundColor: "indigo",
    color: "plum"
  }
})