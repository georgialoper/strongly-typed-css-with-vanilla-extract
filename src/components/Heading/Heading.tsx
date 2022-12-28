import React from "react";

import { sprinklesFn, Sprinkles } from "../../styles/sprinkles.css";

interface HeadingProps extends React.ComponentProps<"h1"> {
  backgroundColor?: Sprinkles["color"];
}

export const Heading = ({ backgroundColor, children }: HeadingProps) => (
  <div
    className={sprinklesFn({
      backgroundColor: backgroundColor,
      color: "secondary",
      padding: "s",
    })}
  >
    <h1>{children}</h1>
  </div>
);
