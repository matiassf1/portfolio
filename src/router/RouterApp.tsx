import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../login/LoginPage";
import { HomePage } from "../portfolio/HomePage";

interface IRouterApp {}

export const RouterApp: React.FunctionComponent<IRouterApp> = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/auth" element={<LoginPage />} />
      </Routes>
    </ChakraProvider>
  );
};
