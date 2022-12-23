import { Heading } from "./components/Heading";
import { baseThemeClass, secondaryThemeClass } from "./styles/theme.css";

export const App = () => (
  <div className={secondaryThemeClass}>
    <Heading variant="primary">🧁 Hello, CodeMash!</Heading>
  </div>
);
