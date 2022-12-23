import { style, styleVariants } from "@vanilla-extract/css";

const space = style({
  padding: "1rem",
});

export const variants = styleVariants({
  primary: [
    space,
    {
      backgroundColor: "navy",
      color: "plum",
    },
  ],
  secondary: [
    space,
    {
      backgroundColor: "plum",
      color: "navy",
    },
  ],
});
