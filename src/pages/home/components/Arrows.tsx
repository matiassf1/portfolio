import { Box, useColorMode } from "@chakra-ui/react";

export const Arrows = () => {
  const {colorMode } = useColorMode()

  return (
    <Box w={["62px", "30px", "62px"]}>
        <svg style={{ width: "100px", cursor: "pointer" }} stroke={colorMode == 'dark' ? "#0B48AB" : "#f08755"}>
          <path className="arrow-path a1" d="M0 0 L30 32 L60 0"></path>
          <path className="arrow-path a2" d="M0 20 L30 52 L60 20"></path>
          <path className="arrow-path a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
    </Box>
  );
};
