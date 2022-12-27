import { ChakraProvider, Heading } from '@chakra-ui/react';
import { Route, Routes } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import { HomePage } from '../HomePage';

interface IRouterApp {}

export const theme = extendTheme({
  colors: {
    primary: {
      50: 'a8dadc',
      100: '457b9d',
      500: '1d3557'
    },
    alert: 'e63946'
  },
  fonts: {
    heading: 'Bungee Shade',
    body: 'Martian Mono'
  }

});

export const RouterApp: React.FunctionComponent<IRouterApp> = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </ChakraProvider>
  );
};
