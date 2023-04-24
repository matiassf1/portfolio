import {
  Box,
  ScaleFade,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { SaitamaCard, MyStack } from "./components";
import { FcCommandLine, FcLibrary, FcUnlock } from "react-icons/fc";
import { quotes, authors } from "../../const/quotes";
import { Flex } from "@chakra-ui/react";

export const AboutPage = () => {
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
        marginLeft="30px"
        marginBottom="60px"
        textAlign="start"
      >
        About Me
      </Heading>

      {/* Cartas a lo largo con caracteristicas mias - card: content / icon */}
      <Box w="80%" m="auto">
        <Card
          rounded="2xl"
          variant="elevated"
          boxShadow="6px 1px 25px 12px rgba(0,0,0,0.25)"
          m="30px"
        >
          <CardHeader paddingBottom={0}>
            <Heading fontFamily="cursive" size="md">
              Who I am and what my values are?
            </Heading>
          </CardHeader>
          <CardBody>
            <Flex gap={5} alignItems="center">
              <Text>
                Throughout my life, I have crossed paths with different people
                and shared unique and special moments with each of them, thanks
                to diversity and empathy. By putting myself in their shoes, I
                realized that I didn't really know my origins or reflect on
                them. Recently, I started a long journey to rediscover myself
                and understand what and why I do what I do. I have strong
                principles and fundamental ideas, but I don't see the full
                spectrum of my own being. One of the things that govern my
                actions is the desire to always help others and care for their
                physical and psychological well-being. I wish for the world to
                grow spiritually so that we can advance as a society.
              </Text>
              <Icon boxSize={7} as={FcLibrary} />
            </Flex>
          </CardBody>
        </Card>

        <Card
          rounded="2xl"
          variant="elevated"
          boxShadow="6px 1px 25px 12px rgba(0,0,0,0.25)"
          m="30px"
        >
          <CardHeader paddingBottom={0}>
            <Heading fontFamily="cursive" size="md">
              My vision for the future
            </Heading>
          </CardHeader>
          <CardBody>
            <Flex gap={5} alignItems="center">
              <Text>
                I believe that just like life itself, the future will be full of
                problems, and new needs will arise that must be met by different
                services. Humans are becoming increasingly intertwined with
                technology, to the point where we embrace it as part of our
                nature. With this in mind, I want to have knowledge in as many
                diverse areas as possible, ranging from front-end to back-end
                development, all the way to Cloud services and Data Management.
                I aim to achieve a broad range of skills that will allow me to
                contribute to possible solutions that may emerge in the near
                future.
              </Text>
              <Icon boxSize={7} as={FcCommandLine} />
            </Flex>
          </CardBody>
        </Card>

        <Card
          rounded="2xl"
          variant="elevated"
          boxShadow="6px 1px 25px 12px rgba(0,0,0,0.25)"
          m="30px"
        >
          <CardHeader paddingBottom={0}>
            <Heading fontFamily="cursive" size="md">
              My interests and hobbies
            </Heading>
          </CardHeader>
          <CardBody>
            <Flex gap={5} alignItems="center">
              <Text>
                I am a very active and extremely curious person, and these two
                qualities have shaped me throughout my life. I have acquired
                general knowledge about ancient and modern history, medicine,
                biology, and psychology. My studies have led me to become
                interested in physics and mainly in programming, which has
                become one of my greatest passions along with soccer and
                physical training. I am constantly learning something new or
                engaging in physical activity, and I also enjoy playing online
                with friends and having a good time. For the Horde!
              </Text>
              <Icon boxSize={7} as={FcUnlock} />
            </Flex>
          </CardBody>
        </Card>
      </Box>
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
      </ScaleFade>
    </>
  );
};
