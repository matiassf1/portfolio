import {
  Box,
  ScaleFade,
  Heading,
  Text
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { SaitamaCard, MyStack } from "./components";
import { Cards } from "./components/Cards";

 const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <>
      <Heading
        marginTop={["100px", "120px"]}
        marginLeft="70px"
        marginBottom="60px"
        textAlign="start"
      >
        About Me
      </Heading>

      <Cards />

      <ScaleFade initialScale={0.9} in={enterCount > 0}>
        <Box
          w="full"
          bgColor="white"
          display="flex"
          ref={ref}
          gap={["12", "23", "10", "20"]}
          alignItems="center"
          justifyContent="space-evenly"
          flexDirection={["column", "column", "row", "row"]}
        >
          <SaitamaCard />
          <MyStack />
        </Box>
        <Text>Speaking
            of coding, I've been diving deep into the tech world lately. I've
            been honing my skills in React.js, Javascript, Css, Html,
            Tailwindcss, TypeScript, Redux, MySQL, firebase, axios, node.js, and
            express.js. I'm already pretty good at handling API services and
            their data, and I'm currently learning how to build them myself. I'm
            excited about the possibilities that the tech industry holds, and
            I'm ready to make a big impact. I'm always open to working with
            others and contributing to projects in any way I can. I'm a
            dedicated learner and problem-solver, and I know that these traits
            will serve me well in whatever I tackle next.</Text>
      </ScaleFade>
    </>
  );
};

export default AboutPage;