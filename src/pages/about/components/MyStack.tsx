import {
  Box,
  Flex,
  Img,
  ResponsiveValue,
  Stack,
  Text,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Property } from "csstype";
import * as image from "../../../assets/images";

interface IMyStack {}

interface BlockData {
  src: string;
  fit?: ResponsiveValue<Property.ObjectFit>;
  text?: string;
}

export const MyStack: React.FunctionComponent<IMyStack> = () => {
  const containerReactRef = useRef<HTMLDivElement>(null);
  const blockData: BlockData[] = [
    {
      src: image.default.css,
      fit: ["cover", "fill"],
    },
    {
      src: image.default.tailwind,
      fit: ["cover", "cover"],
    },
    {
      src: image.default.bootstrap,
      fit: ["cover", "fill"],
    },
    {
      src: image.default.javascript,
      fit: ["cover", "fill"],
    },
    {
      src: image.default.react,
      fit: ["cover", "cover"],
    },
    {
      src: image.default.typescript,
      fit: ["cover", "fill"],
    },
    {
      src: image.default.html,
      fit: ["cover", "fill"],
    },
    {
      src: image.default.apirest,
      fit: ["cover", "fill"],
    }
  ];

  const controls = useAnimation();

  useEffect(() => {
    const containerElement = containerReactRef.current!;
    const containerBounds = containerElement.getBoundingClientRect();

    const staggerDuration = 0.2; // Duration between each block animation
    const staggerDelay = 0.1; // Delay before starting the block animations

    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: staggerDelay + i * staggerDuration,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    }));
  }, []);

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Heading
        fontFamily="monospace"
        fontSize={"2xl"}
        textAlign={"start"}
        marginTop={"35px"}
      >
        My stack
      </Heading>
      <Flex color="white" placeContent="center" w="100%">
        <Box
          display={isMobile ? "none" : "flex"}
          flexDirection="column"
          mt={"5px"}
          p={4}
          justifyContent="center"
          alignItems="center"
          background="#152f44"
          rounded="xl"
        >
          <motion.div
            ref={containerReactRef}
            style={{
              opacity: "1",
              height: "100%",
              width: "100%",
            }}
          />
          <Stack direction={"row"} spacing={2} alignItems="center" mt={0}>
            {blockData.map(({ src, fit, text }, index) => (
              <motion.div
                key={index}
                style={{
                  position: "relative",
                  opacity: 0,
                  marginBottom: "10px",
                  flexBasis: "auto",
                }}
                initial={false}
                animate={controls}
                custom={index}
                whileHover={{ scale: 1.1 }}
              >
                <Img
                  style={{
                    position: "relative",
                    borderRadius: "20px",
                  }}
                  boxSize={["75px", "80px"]}
                  objectFit={fit}
                  draggable="false"
                  src={src}
                />
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Flex>
    </>
  );
};
