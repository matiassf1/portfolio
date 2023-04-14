import { Box, Img, Heading, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import * as image from "../images";
import { useRef } from "react";

interface IMyStack {}

export const MyStack: React.FunctionComponent<IMyStack> = () => {
  const containerReactRef = useRef(null);

  return (
    <Flex
      color={"white"}
      direction="column"
      alignItems="center"
      justify={"center"}
      placeContent={"center"}
      placeItems="center"
      w={["80%", "80%", "auto", "auto"]}
    >
      <Heading size={"md"}>My Stack</Heading>

      <Box
        position={"relative"}
        mt="30px"
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        h={{ base: "335px" }}
        w={{ base: "335px" }}
      >
        <motion.div
          style={{
            opacity: "1",
            background: "#303240",
            height: "100%",
            width: "100%",
            borderRadius: "20px",
            top: "calc(50% - 100px)",
            left: "calc(50% - 100px)",
          }}
          ref={containerReactRef}
        />
        <motion.div
          style={{
            position: "absolute",
            top: "auto",
            left: "0",
            right: "1",
            margin: "30px",
          }}
          children={[
            <Img
              style={{
                position: "relative",
                borderRadius: "20px",
              }}
              top={["calc(50% - 100px / 2)"]}
              left={["calc(50% - 70px / 2)"]}
              boxSize={"70px"}
              objectFit="fill"
              draggable="false"
              src={image.default.css}
            />,
            <Img
              style={{
                position: "relative",
                marginTop: "20px",
                borderRadius: "20px",
              }}
              top={["calc(50% - 100px / 2)"]}
              left={["calc(50% - 70px / 2)"]}
              boxSize={"70px"}
              objectFit="cover"
              draggable="false"
              src={image.default.tailwind}
            />,
            <Img
              style={{
                position: "relative",
                marginTop: "20px",
                borderRadius: "20px",
              }}
              top={["calc(50% - 100px / 2)"]}
              left={["calc(50% - 70px / 2)"]}
              boxSize={"70px"}
              objectFit="fill"
              draggable="false"
              src={image.default.bootstrap}
            />,
          ]}
          drag
          dragConstraints={containerReactRef}
        />

        <motion.div
          style={{ position: "absolute", top: "auto", margin: "30px" }}
          children={[
            <Img
              style={{
                position: "relative",
                borderRadius: "20px",
              }}
              top={["calc(50% - 100px / 2)"]}
              right={["calc(50% - 71px / 2)"]}
              boxSize={"70px"}
              objectFit="fill"
              draggable="false"
              src={image.default.javascript}
            />,
            <Img
              style={{
                position: "relative",
                marginTop: "20px",
                borderRadius: "20px",
              }}
              top={["calc(50% - 100px / 2)"]}
              right={["calc(50% - 71px / 2)"]}
              boxSize={"70px"}
              objectFit="cover"
              draggable="false"
              src={image.default.react}
            />,
            <Img
              style={{
                position: "relative",
                marginTop: "20px",
                borderRadius: "20px",
              }}
              top={["calc(50% - 100px / 2)"]}
              right={["calc(50% - 71px / 2)"]}
              boxSize={"70px"}
              objectFit="fill"
              draggable="false"
              src={image.default.typescript}
            />,
          ]}
          drag
          dragConstraints={containerReactRef}
        />

        <motion.div
          style={{
            position: "absolute",
            top: "auto",
            left: "1",
            right: "0",
            margin: "30px",
          }}
          children={[
            <Img
              style={{
                position: "relative",
                borderRadius: "20px",
              }}
              top={["calc(50% - 100px / 2)"]}
              right={["calc(50% - 70px / 2)"]}
              boxSize={"70px"}
              objectFit="fill"
              draggable="false"
              src={image.default.html}
            />,
            <Img
              style={{
                position: "relative",
                marginTop: "20px",
                borderRadius: "20px",
              }}
              top={["calc(50% - 100px / 2)"]}
              right={["calc(50% - 70px / 2)"]}
              boxSize={"70px"}
              objectFit="fill"
              draggable="false"
              src={image.default.apirest}
            />,
            <div>
              <Img
                style={{
                  position: "relative",
                  marginTop: "20px",
                  borderRadius: "20px",
                  opacity: "0.1",
                }}
                top={["calc(50% - 100px / 2)"]}
                right={["calc(50% - 70px / 2)"]}
                boxSize={"70px"}
                objectFit="cover"
                draggable="false"
                src={image.default.nodejs}
              />
              <Text
                position={"absolute"}
                bottom="7.2%"
                fontSize="3xs"
                align={"center"}
              >
                Node.js & Express.js in process..
              </Text>
            </div>,
          ]}
          drag
          dragConstraints={containerReactRef}
        />
      </Box>
    </Flex>
  );
};
