import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../login/LoginPage";
import { HomePage } from "../portfolio/HomePage";
import { extendTheme } from "@chakra-ui/react";

interface IRouterApp {}


// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    primary: {
      50: 'a8dadc',
      100: '457b9d',
      500: '1d3557'
    },
    alert: 'e63946'
  },
  fonts: {
    body: 'Martian Mono'
  }

});
export const RouterApp: React.FunctionComponent<IRouterApp> = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/auth" element={<LoginPage />} />
      </Routes>
    </ChakraProvider>
  );
};
