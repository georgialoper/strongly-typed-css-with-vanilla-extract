import { Heading } from "./components/Heading";
import { baseThemeClass } from "./styles/theme.css";

export const App = () => (
  <div className={baseThemeClass}>
    <Heading backgroundColor="primary">🧁 Hello, CodeMash!</Heading>
  </div>
);
