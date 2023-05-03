import React from "react";

import { Sprinkles } from "../../styles/sprinkles.css";

import { Box } from "../Box";

interface HeadingProps extends Omit<React.ComponentProps<"h1">, 'color'> {
  backgroundColor?: Sprinkles["color"];
  color?: Sprinkles["color"];
  padding?: Sprinkles["padding"]
}

export const Heading = ({ backgroundColor, color, padding, children }: HeadingProps) => (
  <Box
    as="h1"
    sprinkles={{
      backgroundColor,
      color,
      padding,
    }}
  >
    <h1>{children}</h1>
  </Box>
);
