import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { MenuItem } from "./MenuItem";
import { useLocation } from "react-router-dom";

interface IMenuLinks {
  isOpen: boolean;
}

export const MenuLinks: React.FunctionComponent<IMenuLinks> = ({ isOpen }) => {
  const location = useLocation();
  const projects =
    location?.pathname == "/about"
      ? "/projects"
      : location?.pathname == "/projects"
      ? ""
      : "#projects";
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[3, 3, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About Me</MenuItem>
        <MenuItem to={projects}>Projects</MenuItem>
      </Stack>
    </Box>
  );
};
