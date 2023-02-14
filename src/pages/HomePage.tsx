import { Box, Flex, Heading, Image, Code, Stack } from "@chakra-ui/react";
import { NavBar } from "../ui/NavBar";
import { Projects } from './Projects';

interface IHomePage {}

export const HomePage: React.FunctionComponent<IHomePage> = () => {  
  
  return (
    <>
      <Box
      display="flex"
      flexDirection="column"
      style={{ userSelect: "none"}}
      h="100vh"
      w="full"
    >
      <Box fontFamily={"monospace"}>
        <NavBar />
      </Box>

      <Flex
        minWidth="max-content"
        alignItems="center"
        justify="center"
        gap="5"
        marginTop="25vh"
        direction={["column", "column", "row"]}
      >
        <Image
          borderTopLeftRadius={["full", "full", "full", "full"]}
          borderTopRightRadius={["full", "full", "none", "none"]}
          borderBottomRightRadius={["full", "full", "full", "full"]}
          borderBottomLeftRadius={["full", "full", "none", "none"]}
          boxSize={["150px", "200px", "230px"]}
          objectFit="cover"
          src="https://imgs.search.brave.com/OxBAGMx5Fg9P5Ij3xFH2BI4DiwSoONbbOiWxZCwJeko/rs:fit:900:600:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy1tZWRpdW0t/bGFyZ2UtNS9icmlk/Z2Utb2YtYm9hdHMt/YXQtc2F3YS1ob2t1/c2FpLWthdGFzdXNo/aWthLmpwZw"
          alt="Image.jpg"
        />
        <Heading fontSize={["19px", "32px", "34px", "40px"]}>
          Front-End Developer
        </Heading>
      </Flex>

      <Stack direction={["column", "row"]} justify="center" padding="20px">
        <Code
          colorScheme="terciary"
          textColor={"white"}
          children="console.log(welcome!!)"
        />
        <Code
          colorScheme="secondary"
          textColor={"white"}
          children="const myFullName = 'Sfer Matias Gabriel'"
        />
        <Code
          colorScheme="primary"
          textColor={"white"}
          children="yarn add good-vibes@latest"
        />
      </Stack>
    </Box>


    <Box>
      <Projects />
    </Box>

    </>

    

  );
};
