import { Code, Stack } from "@chakra-ui/react";
import React from "react";

export const ConsoleLogs = () => {
  return (
    <Stack
      direction={["column", "row"]}
      justify="center"
      padding="20px"
      mt={["15px", "20px", "35px"]}
    >
      <Code
        colorScheme="tertiary"
        textColor={"white"}
        children="console.log(welcome!!)"
      />
      <Code
        colorScheme="secondary"
        textColor={"white"}
        children="const myFullName = 'Sfer Matias Gabriel'"
      />
      <Code
        colorScheme="primary"
        textColor={"white"}
        children="yarn add good-vibes@latest"
      />
    </Stack>
  );
};
