import { Code, Stack, useColorMode } from '@chakra-ui/react';
import React from "react";

export const ConsoleLogs = () => {

  const {colorMode, toggleColorMode } = useColorMode()

  return (
    <Stack
      direction={["column", "row"]}
      justify="center"
      padding="20px"
      mt={["15px", "20px", "35px"]}
    >
      <Code
        colorScheme={colorMode == 'light' ? "tertiary" : "blue"}
        textColor={"white"}
        children="console.warn(welcome!!)"
      />
      <Code
        colorScheme={colorMode == 'light' ? "secondary" : "purple"}
        textColor={"white"}
        children="const myFullName = 'Sfer Matias Gabriel'"
      />
      <Code
        colorScheme={colorMode == 'light' ? "primary" : "blue"}
        textColor={"white"}
        children="yarn add good-vibes@latest"
      />
    </Stack>
  );
};
