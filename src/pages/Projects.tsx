import { Box, ScaleFade } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { useNavigate } from "react-router-dom";

interface IProjects {}

export const Projects: React.FunctionComponent<IProjects> = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  const { inViewport, enterCount } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <ScaleFade initialScale={0.9} in={enterCount > 0}>
      <Box id="projects" h="100vh" w="full" ref={ref} bgColor="#141F26" style={{scrollSnapAlign: 'center'}}>
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
    </ScaleFade>
  );
};
