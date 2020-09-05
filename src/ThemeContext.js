import React from "react";
import { ThemeProvider } from "theme-ui";
// import { polaris as theme } from "@theme-ui/presets";
import theme from "./theme.js";

export default (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
