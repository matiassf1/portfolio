import { Flex, Heading } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const phrasesOne: string[] = ["Welcome to", "", "Creative", "", "Chato manco"];

const phrasesTwo: string[] = ["", "My Portfolio", "", "Experience"];

export const CarrouselHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controlsOne = useAnimation();
  const controlsTwo = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex + 1 >= phrasesOne.length) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }

      controlsOne.start({
        y: [20, 0, -20],
        opacity: [0, 1, 0],
        transition: { duration: 1.7, times: [0, 0.5, 1] },
      });

    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex, controlsOne]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex + 1 >= phrasesTwo.length) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }

      controlsTwo.start({
        y: [-20, 0, 20],
        opacity: [0, 1, 0],
        transition: { duration: 1.7, times: [0, 0.5, 1] },
      });

    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex, controlsTwo]);

  const notEven = (value: any): boolean => {
    return value % 2  !== 0 ;
  }

  return (
    <Flex marginLeft={15}>
      <motion.div
        animate={controlsOne}
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <Heading fontSize={["17px", "22px", "34px", "40px"]} color={ notEven(currentIndex)? 'white': '' }>
          {phrasesOne[currentIndex]}
        </Heading>
      </motion.div>
      <motion.div
        animate={controlsTwo}
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <Heading fontSize={["17px", "22px", "34px", "40px"]}>
          {phrasesTwo[currentIndex]}
        </Heading>
      </motion.div>
    </Flex>
  );
};
