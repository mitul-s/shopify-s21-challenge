import React from "react";
import { ThemeProvider } from "theme-ui";
import { swiss as theme } from "@theme-ui/presets";

export default (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
