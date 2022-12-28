import React from "react";

import { sprinklesFn, Sprinkles } from "../../styles/sprinkles.css";

type BoxProps = {
  as: React.ElementType;
  children: React.ReactNode;
  sprinkles: Sprinkles;
};

export const Box = ({ as: As, sprinkles, children }: BoxProps) => (
  <As className={sprinklesFn(sprinkles)}>{children}</As>
);
