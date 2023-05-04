import { Box, Flex, Heading, Img, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import abouthome from "../../../assets/images/pexels-ryutaro-tsukata-6249734.jpg"
import { BigBangButton } from "../../../component/BigBangButton";

export const AboutMeHome = () => {
  return (
    <Box w={"100%"} m={"auto"}>
      <Heading
        p={12}
        fontSize={"3xl"}
        textAlign={"center"}
        marginBottom={"15px"}
        marginTop={"35px"}
      >
        About me
      </Heading>
      <Flex margin={"auto"} w={{ md: "70%", base: "90%" }}>
        <Text
          maxWidth={"100%"}
          fontSize={"sm"}
          margin={[
            "0px",
            "30px 0px 30px 30px",
            "30px 0px 30px 30px",
            "30px 0px 30px 30px",
          ]}
          textAlign={"start"}
          p={[0, 0, 5, 5]}
        >
          <Img
            src={abouthome}
            w={{ md: "260px", base: "200px" }}
            h={{ md: "340px", base: "300px" }}
            float={"left"}
            rounded={"lg"}
            marginTop={"-30px"}
            marginBottom={"10px"}
            marginRight={{ base: "10px", md: "30px" }}
          />
          Hey, I'm Matias, a curious and enthusiastic guy from Tucuman,
          Argentina. I love learning new things, so I'm always digging into
          different topics that grab my attention. My logical thinking skills
          are pretty sharp, and I'm known for being a friendly and empathetic
          person. I like to enjoy my time with friends in the
          nature or playing football. I'm a big animal lover 
          too. I think they're fascinating creatures.
        </Text>
      </Flex>

      <BigBangButton url="/about" content={"More About Me"} />
    </Box>
  );
};
{
  /* <Text>Speaking
            of coding, I've been diving deep into the tech world lately. I've
            been honing my skills in React.js, Javascript, Css, Html,
            Tailwindcss, TypeScript, Redux, MySQL, firebase, axios, node.js, and
            express.js. I'm already pretty good at handling API services and
            their data, and I'm currently learning how to build them myself. I'm
            excited about the possibilities that the tech industry holds, and
            I'm ready to make a big impact. I'm always open to working with
            others and contributing to projects in any way I can. I'm a
            dedicated learner and problem-solver, and I know that these traits
            will serve me well in whatever I tackle next.</Text> */
}
