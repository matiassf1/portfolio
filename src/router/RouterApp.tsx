import { lazy, Suspense } from 'react';
import { ChakraProvider, Box, ColorModeScript } from "@chakra-ui/react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { extendTheme } from "@chakra-ui/react";
import { Layout } from "../layout/Layout";

const theme = extendTheme({
  config:{
    initialColorMode: "dark",
    useSystemColorMode: true
  },
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

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  enter: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: "100vw", transition: { duration: 0.5 } },
};

const Home = lazy(() => import('../pages/home/HomePage'));
const About = lazy(() => import('../pages/about/AboutPage'));
const Projects = lazy(() => import('../pages/projects/Projects'));

export const RouterApp = () => {
  const location = useLocation();
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box fontFamily={"monospace"}>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                key={location.pathname}
                variants={pageVariants}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/*" element={<Home />} />
                </Routes>
              </motion.div>
            </Suspense>
          </AnimatePresence>
        </Layout>
      </Box>
    </ChakraProvider>
  );
};
