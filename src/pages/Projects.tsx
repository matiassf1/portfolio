import { Box, } from "@chakra-ui/react";
import React, {  } from "react";

interface IProjects {}

export const Projects: React.FunctionComponent<IProjects> = () => {

  return (
      <Box color={'white'}>
        <h2>My Stack</h2>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Javascript</li>
          <li>Tailwindcss</li>
        </ul>
      </Box>
  );
};
