import { ChakraProvider, Heading } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { extendTheme, Box } from "@chakra-ui/react";
import { AboutPage } from "../pages/about/AboutPage";
import { HomePage } from "../pages/home/HomePage";
import { Projects } from "../pages/projects/Projects";
import { NavBar } from "../layout/NavBar";

interface IRouterApp {}

export const theme = extendTheme({
  colors: {
    primary: {
      100: "#011C40",
    },
    secondary: {
      100: "#0477BF",
    },
    tertiary: {
      100: "#A60321",
    },
    alert: "#e63946",
  },
  fonts: {
    heading: "Bungee Shade",
    body: "Martian Mono",
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0px",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "5000px",
    full: "9999px",
  },
});
extendTheme({
  colors: {
    primary: {
      100: "#011C40",
    },
    secondary: {
      100: "#0477BF",
    },
    tertiary: {
      100: "#A60321",
    },
    alert: "#e63946",
  },
  fonts: {
    heading: "Bungee Shade",
    body: "Martian Mono",
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "0px",
    full: "9999px",
  },
});

export const RouterApp: React.FunctionComponent<IRouterApp> = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box fontFamily={"monospace"}>
        <NavBar />
      </Box>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/projects" element={<Projects />}>
          {/*  Nested Routes incoming
              about specific project and info */}
        </Route>

        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </ChakraProvider>
  );
};
