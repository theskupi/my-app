import * as React from "react";
import { FunctionComponent } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

interface ThemeProviderProps {}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={createMuiTheme()}>{children}</MuiThemeProvider>
  );
};

export default ThemeProvider;
