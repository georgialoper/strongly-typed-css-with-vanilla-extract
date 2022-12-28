import React from "react";

import { Sprinkles } from "../../styles/sprinkles.css";

import { Box } from "../Box";

interface HeadingProps extends React.ComponentProps<"h1"> {
  backgroundColor?: Sprinkles["color"];
}

export const Heading = ({ backgroundColor, children }: HeadingProps) => (
  <Box
    as="h1"
    sprinkles={{
      backgroundColor: backgroundColor,
      color: "secondary",
      padding: "s",
    }}
  >
    <h1>{children}</h1>
  </Box>
);
