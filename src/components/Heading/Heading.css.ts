import { style, styleVariants } from "@vanilla-extract/css";

import { sprinklesFn } from "../../styles/sprinkles.css";

const space = style([
  sprinklesFn({
    paddingX: "s",
    paddingY: "m",
  }),
]);

export const variants = styleVariants({
  primary: [
    space,
    sprinklesFn({
      backgroundColor: "primary",
      color: "secondary",
    }),
  ],
  secondary: [
    space,
    sprinklesFn({
      backgroundColor: "secondary",
      color: "primary",
    }),
  ],
});
