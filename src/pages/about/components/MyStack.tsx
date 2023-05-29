import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import * as image from "../../../assets/images";

interface IMyStack {}

export const MyStack: React.FunctionComponent<IMyStack> = () => {
  const containerReactRef = useRef<HTMLDivElement>(null);
  const blockData = [
    {
      src: image.default.css,
    },
    {
      src: image.default.tailwind,
    },
    {
      src: image.default.bootstrap,
    },
    {
      src: image.default.javascript,
    },
    {
      src: image.default.react,
    },
    {
      src: image.default.typescript,
    },
    {
      src: image.default.html,
    },
    {
      src: image.default.apirest,
    },
    {
      src: image.default.nodejs,
      text: 'Learning Node.js & Express'
    },
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

  return (
    <Flex
      color="white"
      direction="column"
      alignItems="flex-end"
      justify="center"
      placeContent="center"
      placeItems="center"
      margin={'10px'}
      marginTop={0}
      w={["80%", "80%", "auto", "auto"]}
    >
      <Box background="#303240" mt="60px" p={4} rounded="xl">
        <Box
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          h="100%"
          w={{ base: "80px", md: "100px" }}
        >
          <motion.div
            style={{
              opacity: "1",
              background: "#303240",
              height: "100%",
              width: "100%",
              borderRadius: "20px",
            }}
            ref={containerReactRef}
          />
          {blockData.map((block, index) => (
            <motion.div
              key={index}
              style={{
                position: "relative",
                opacity: 0,
                marginBottom:'10px'
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
                boxSize={["50px", "75px"]}
                objectFit="cover"
                draggable="false"
                src={block.src}
              />
              {block.text && (
                <Text
                  position="absolute"
                  bottom="13%"
                  fontSize="xs"
                  fontWeight='bold'
                  background={'black'}
                  rounded="3xl"
                  opacity='0.7'
                  align="center"
                  color='white'
                >
                  {block.text}
                </Text>
              )}
            </motion.div>
          ))}
        </Box>
      </Box>
    </Flex>
  );
};
