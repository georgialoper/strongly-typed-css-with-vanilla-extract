import { createTheme } from "@vanilla-extract/css";

export const [baseThemeClass, vars] = createTheme({
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

export const secondaryThemeClass = createTheme(vars, {
  color: {
    primary: "indigo",
    secondary: "white",
  },
  space: {
    s: "1rem",
    m: "2rem",
    l: "3rem",
  },
});
