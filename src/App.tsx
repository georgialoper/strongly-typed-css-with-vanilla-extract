import { Heading } from "./components/Heading";
import { baseThemeClass } from "./styles/theme.css";

export const App = () => (
  <div className={baseThemeClass}>
    <Heading backgroundColor="secondary" color="primary" padding="m">🧁 Hello, world!</Heading>
  </div>
);
