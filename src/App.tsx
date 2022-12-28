import { Heading } from "./components/Heading";
import { baseThemeClass, vars } from "./styles/theme.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export const App = () => (
  <div
    className={baseThemeClass}
    style={assignInlineVars(vars, {
      color: {
        primary: "teal",
        secondary: "aqua",
      },
      space: {
        ...vars.space,
      },
    })}
  >
    <Heading variant="primary">🧁 Hello, CodeMash!</Heading>
  </div>
);
