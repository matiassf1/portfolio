import { ChakraProvider, Heading } from '@chakra-ui/react';
import { Route, Routes } from "react-router-dom";
import { extendTheme, Box } from "@chakra-ui/react";
import { AboutPage } from '../pages/AboutPage';
import { HomePage } from '../pages/HomePage';
import { Projects } from '../pages/Projects';
import { NavBar } from '../ui/NavBar';

interface IRouterApp {}

export const theme = extendTheme({
  colors: {
    primary: {
      100: '#011C40',
    },
    secondary: {
      100: '#0477BF'
    },
    terciary: {
      100: '#A60321'
    },
    alert: 'e63946'
  },
  fonts: {
    heading: 'Bungee Shade',
    body: 'Martian Mono'
  },

});

export const RouterApp: React.FunctionComponent<IRouterApp> = () => {
  return (
    <ChakraProvider theme={theme}>

        <Box fontFamily={"monospace"}>
          <NavBar />
        </Box>
      <Routes>
        <Route path="/" element={<HomePage />} >
          {/* <Route path='projects' element={<Projects />}/> Nested Routes incoming
                                                          about specific project and info */}
        </Route>
        
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </ChakraProvider>
  );
};
