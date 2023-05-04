import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import {
  AboutMeHome,
  CarrouselHeader,
  ConsoleLogs,
  Arrows,
} from "./components";

import "../../styles/ssvg.css";
import BlinkingText from "../../component/BlinkingText";

interface IHomePage {}

const HomePage: React.FunctionComponent<IHomePage> = () => {
  const scroll = () => {
    window?.scrollTo({
      top: 650,
      behavior: "smooth",
    });
  };
  return (
    <Box
      rounded={"lg"}
      display="flex"
      flexDirection="column"
      style={{ userSelect: "none" }}
      scrollSnapAlign={"center"}
      w="full"
    >
      <Flex
        minWidth="max-content"
        alignItems="center"
        justify="center"
        gap={["1", "2", "5"]}
        marginTop="25vh"
        direction={"row"}
        id="home"
      >
        <Image
          borderTopLeftRadius={"60%"}
          borderTopRightRadius={"none"}
          borderBottomRightRadius={`60%`}
          borderBottomLeftRadius={"none"}
          boxSize={["100px", "150px", "230px"]}
          src="https://imgs.search.brave.com/OxBAGMx5Fg9P5Ij3xFH2BI4DiwSoONbbOiWxZCwJeko/rs:fit:900:600:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy1tZWRpdW0t/bGFyZ2UtNS9icmlk/Z2Utb2YtYm9hdHMt/YXQtc2F3YS1ob2t1/c2FpLWthdGFzdXNo/aWthLmpwZw"
          alt="Image.jpg"
        />

        <Box w="24%">
          <CarrouselHeader />
        </Box>
      </Flex>

      <ConsoleLogs />

      <Flex
        marginTop={["120px", "120px", "60px", "60px"]}
        marginBottom={0}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        margin={"auto"}
        w={["80%", "60%", "40%", "30%"]}
        gap={[9, 5, 5, 5]}
      >
        <BlinkingText value="Explore my portfolio" />
        <Box onClick={scroll}>
          <Arrows />
        </Box>
      </Flex>

      <Box
        rounded={["xl", "2xl", "2xl"]}
        boxShadow={["dark-lg", "dark-lg", "dark-lg"]}
        margin={"auto"}
        w={{ base: "95%", md: "90%" }}
        marginTop={"20px"}
      >
        <Box>
          <AboutMeHome />
        </Box>

        <Box id="projects">
          <Heading textAlign={"center"}>Projects</Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
