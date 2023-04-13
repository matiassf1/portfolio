import { Box, Flex, Heading, Img, ScaleFade, Text } from "@chakra-ui/react";
import { useRef, useEffect, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { motion, useAnimation } from "framer-motion";
import { SaitamaCard, MyStack } from ".";
import aboutImage from "../../ui/images/pexels-ryutaro-tsukata-6249734.jpg";

const quotes = [
  "Life is what happens when you're busy making other plans.",
  "Nothing in this world is certain except death and taxes.",
  "Believe you can and you're halfway there.",
  "Fortune favors the bold.",
  "Music is the divine way to tell beautiful, poetic things to the heart.",
  "If you want peace, prepare for war.",
  "Muere pe mierda.",
  "No me da el rango.",
  "Cualquier frase insultando tu integridad intelectual",
];

const authors = [
  "John Lennon",
  "William the Conqueror",
  "Theodore Roosevelt",
  "Erasmus",
  "St. August.",
  "Richard I (the Lionheart)",
  "Pablo Martin",
  "se se Sebastian",
  "El coach",
];

export const AboutMeHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef(null);
  const control = useAnimation();

  const { inViewport, enterCount } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  );

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
    <Box
      rounded={["sm", "xl", "2xl", "2xl"]}
      boxShadow={["dark-lg", "dark-lg", "dark-lg"]}
      marginTop={"20px"}
    >
      <Box w={[ "93%","90%","84%","84%"]} m={'auto'}>
        <ScaleFade initialScale={0.9} in={enterCount > 0}>
          <Heading paddingTop={14} textAlign={"center"} ref={ref}>
            About me
          </Heading>
          <Flex>
            <Text maxWidth={"90%"} fontSize={["sm", "md", "lg", "xl"]} margin={"30px 0px 30px 30px"} textAlign={"start"} p={[0,0,5,5]}>
              Hey, I'm Matias, a curious and enthusiastic guy from Tucuman,
              Argentina. I love learning new things, so I'm always digging into
              different topics that grab my attention. My logical thinking
              skills are pretty sharp, and I'm known for being a friendly and
              empathetic person.
              <Img
                src={aboutImage}
                w={{ md: "320px", base: "200px" }}
                h={{ md: "auto", base: "300px" }}
                float={"left"}
                rounded={"lg"}
                margin={"10px 10px 10px 0px"}
              />
              When I'm not coding, you can usually find me outdoors enjoying
              nature or playing football with my friends. I'm a big animal
              lover, too - I think they're fascinating creatures.
              <motion.div animate={control}>
                <Text
                  float={"right"}
                  margin={{ md: "40px" }}
                  marginTop={"50px"}
                  marginBottom={'50px'}
                  w={{base: '90%', md:'500px'}}
                >
                  {quotes[currentIndex]}
                  <span color="gray">- {authors[currentIndex]}</span>
                </Text>
              </motion.div>
            </Text>
          </Flex>
        </ScaleFade>
      </Box>

      <Box
        w="full"
        bgColor="white"
        display="flex"
        gap={["12", "23", "10", "20"]}
        alignItems={"center"}
        justifyContent="space-evenly"
        flexDirection={["column", "column", "row", "row"]}
      >
        <SaitamaCard />
        <MyStack />
      </Box>
    </Box>
  );
};
