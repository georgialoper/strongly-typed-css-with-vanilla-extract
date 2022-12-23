import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    primary: "navy",
    secondary: "plum",
  },
  space: {
    s: ".5rem",
    m: "1rem",
    l: "2rem",
  },
});
