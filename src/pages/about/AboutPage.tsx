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
import {FcCommandLine, FcLibrary, FcUnlock} from "react-icons/fc"
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
      <Box w='80%' m='auto'>
        
      <Card
          rounded="2xl"
          variant="elevated"
          boxShadow="6px 1px 25px 12px rgba(0,0,0,0.25)"
          m="30px"
        >
          <CardHeader paddingBottom={0}>
            <Heading fontFamily="cursive" size="md">
              My Values
            </Heading>
          </CardHeader>
          <CardBody>
            <Flex gap={5}>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum expedita maiores assumenda id voluptatibus distinctio
                fugit doloremque facilis iste? Aliquid velit voluptas mollitia
                dolore, ipsa magni doloribus nesciunt obcaecati illo!
              </Text>
              <Icon boxSize={5} as={FcLibrary} />
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
              My Values
            </Heading>
          </CardHeader>
          <CardBody>
            <Flex gap={5}>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum expedita maiores assumenda id voluptatibus distinctio
                fugit doloremque facilis iste? Aliquid velit voluptas mollitia
                dolore, ipsa magni doloribus nesciunt obcaecati illo!
              </Text>
              <Icon boxSize={5} as={FcCommandLine} />
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
              My Values
            </Heading>
          </CardHeader>
          <CardBody>
            <Flex gap={5}>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum expedita maiores assumenda id voluptatibus distinctio
                fugit doloremque facilis iste? Aliquid velit voluptas mollitia
                dolore, ipsa magni doloribus nesciunt obcaecati illo!
              </Text>
              <Icon boxSize={5} as={FcUnlock} />
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
