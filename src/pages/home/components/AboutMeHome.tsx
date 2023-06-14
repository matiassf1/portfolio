import { Box, Flex, Heading, Img, Text, Button } from "@chakra-ui/react";
import { BigBangButton } from "../../../component/BigBangButton";
import { MyStack } from "../../about/components";
import { SvgAboutMe } from "../../../component/SvgAboutMe";

export const AboutMeHome = () => {
  return (
    <Box w={"100%"} m={"auto"}>
      <Heading
        fontFamily="monospace"
        fontSize={"3xl"}
        textAlign={"center"}
        marginBottom={"15px"}
        marginTop={"35px"}
      >
        About me
      </Heading>
      <Flex
        margin={"auto"}
        w={{ md: "70%", base: "90%" }}
        justifyContent="center"
        direction={"column"}
      >
        <Flex
          direction={["column", "column", "column", "row"]}
          alignItems="center"
        >
          <Box>
            <SvgAboutMe />
          </Box>
          <Text
            maxWidth={"100%"}
            fontSize={"sm"}
            margin={[
              "20px",
              "30px 0px 0px 30px",
              "30px 0px 0px 30px",
              "30px 0px 0px 30px",
            ]}
            textAlign={"start"}
            p={[0, 0, 5, 5]}
          >
            Hey, I'm Matias, a curious and enthusiastic guy from Tucuman,
            Argentina. I love learning new things, so I'm always digging into
            different topics that grab my attention. My logical thinking skills
            are pretty sharp, and I'm known for being a friendly and empathetic
            person. I like to enjoy my time with friends in the nature or
            playing football. I'm a big animal lover too. I think they're
            fascinating creatures.
          </Text>
        </Flex>
        <MyStack />
      </Flex>

      <BigBangButton url="/about" content={"More About Me"} />
    </Box>
  );
};
