import { style, styleVariants } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";

const space = style({
  padding: vars.space.s,
});

export const variants = styleVariants({
  primary: [
    space,
    {
      backgroundColor: vars.color.primary,
      color: vars.color.secondary,
    },
  ],
  secondary: [
    space,
    {
      backgroundColor: vars.color.secondary,
      color: vars.color.primary,
    },
  ],
});
