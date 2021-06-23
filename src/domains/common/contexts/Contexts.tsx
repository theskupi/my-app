import * as React from "react";
import { FunctionComponent } from "react";
import ThemeProvider from "./ThemeProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const Contexts: FunctionComponent = ({ children }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export default Contexts;
