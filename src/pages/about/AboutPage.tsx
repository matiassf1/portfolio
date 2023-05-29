import { Box, ScaleFade, Heading, useColorMode, Text, Button } from "@chakra-ui/react";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { SaitamaCard, MyStack, AccordionHome, Cards } from "./components";

const AboutPage = () => {
  const ref = useRef(null);
  const { colorMode } = useColorMode();

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

      <Box marginTop={'50px'}>
        <Button>Checkout My Resume</Button>
      </Box>

      <ScaleFade initialScale={0.9} in={enterCount > 0}>
        <Box
          w="full"
          bgColor={colorMode === "dark" ? "#1A202C" : "white"}
          display="flex"
          ref={ref}
          gap={["12", "23", "10", "20"]}
          alignItems="center"
          justifyContent="space-evenly"
          flexDirection={["column", "column", "row", "row"]}
          marginBottom="50px"
        >
          <Box display={'flex'} alignItems={'center'}>
            <Box
              margin={"30px"}
              marginTop={0}
              display={"flex"}
              flexDirection={"column"}
              gap={"5"}
            >
              <SaitamaCard />
              <AccordionHome />
            </Box>
            <MyStack />
          </Box>
        </Box>
      </ScaleFade>
    </>
  );
};

export default AboutPage;
