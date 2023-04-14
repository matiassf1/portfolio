import { Box, ScaleFade, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { SaitamaCard, MyStack } from "./components";
import { motion, useAnimation } from "framer-motion";

import { quotes, authors } from "../../const/quotes";

export const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  
  const { inViewport, enterCount } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  );

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
    <>
      <Heading marginTop={"30px"}>About Me</Heading>
      <motion.div animate={control}>
        <Text
          color={"black"}
          margin={{ md: "40px" }}
          w={{ base: "90%", md: "500px" }}
        >
          {quotes[currentIndex]}
          <span color="gray">- {authors[currentIndex]}</span>
        </Text>
      </motion.div>
      <ScaleFade initialScale={0.9} in={enterCount > 0}>
        <Box
          w="full"
          bgColor="white"
          display="flex"
          ref={ref}
          gap={["12", "23", "10", "20"]}
          alignItems={"center"}
          justifyContent="space-evenly"
          flexDirection={["column", "column", "row", "row"]}
        >
          <SaitamaCard />
          <MyStack />
        </Box>
      </ScaleFade>
    </>
  );
};
