import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import ThemeProvider from "@newcon/ui/ThemeProvider";
import { createTheme } from "@newcon/ui/Styles";
import { CssBaseline } from "@newcon/ui";
import Loja from "./Pages/Loja";

const theme = createTheme();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Loja />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
