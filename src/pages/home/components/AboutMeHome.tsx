import { Box, Flex, Heading, Img, Text, Button } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import aboutImage from "../images/pexels-ryutaro-tsukata-6249734.jpg";
import { BigBangButton } from '../../../component/BigBangButton';



export const AboutMeHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const control = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex + 1 >= quotes.length) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
      control.start({
        y: [-20, 0, 20],
        opacity: [0, 1, 0],
        transition: { duration: 4, times: [0, 0.5, 1] },
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
      <Box w={"100%"} m={"auto"}>
        <Heading
          paddingTop={14}
          fontSize={"3xl"}
          textAlign={"center"}
          marginBottom={"30px"}
        >
          About me
        </Heading>
        <Flex margin={"auto"} w={{md: "70%", base:"90%"}}>
          <Text
            maxWidth={"100%"}
            fontSize={"sm"}
            margin={["0px","30px 0px 30px 30px","30px 0px 30px 30px","30px 0px 30px 30px"]}
            textAlign={"start"}
            p={[0, 0, 5, 5]}
          >
            <Img
              src={aboutImage}
              w={{ md: "260px", base: "200px" }}
              h={{ md: "340px", base: "300px" }}
              float={"left"}
              rounded={"lg"}
              marginTop={"-30px"}
              marginBottom={"10px"}
              marginRight={{base:"10px", md:"30px"}}
            />
            Hey, I'm Matias, a curious and enthusiastic guy from Tucuman,
            Argentina. I love learning new things, so I'm always digging into
            different topics that grab my attention. My logical thinking skills
            are pretty sharp, and I'm known for being a friendly and empathetic
            person. When I'm not coding, you can usually find me outdoors
            enjoying nature or playing football with my friends. I'm a big
            animal lover, too - I think they're fascinating creatures.
          </Text>
        </Flex>

        <BigBangButton content={'Learn More About Me.'} />

      </Box>
  );
};
      {/* <Text>Speaking
            of coding, I've been diving deep into the tech world lately. I've
            been honing my skills in React.js, Javascript, Css, Html,
            Tailwindcss, TypeScript, Redux, MySQL, firebase, axios, node.js, and
            express.js. I'm already pretty good at handling API services and
            their data, and I'm currently learning how to build them myself. I'm
            excited about the possibilities that the tech industry holds, and
            I'm ready to make a big impact. I'm always open to working with
            others and contributing to projects in any way I can. I'm a
            dedicated learner and problem-solver, and I know that these traits
            will serve me well in whatever I tackle next.</Text> */}