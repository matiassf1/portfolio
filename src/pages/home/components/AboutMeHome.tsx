import { Box, Flex, Heading, Img, Text, Button } from "@chakra-ui/react";
import abouthome from "../../../assets/images/pexels-ryutaro-tsukata-6249734.jpg"
import { BigBangButton } from "../../../component/BigBangButton";

export const AboutMeHome = () => {
  return (
    <Box w={"100%"} m={"auto"}>
      <Heading
        fontSize={"3xl"}
        textAlign={"center"}
        marginBottom={"15px"}
        marginTop={"35px"}
      >
        About me
      </Heading>
      <Flex margin={"auto"} w={{ md: "70%", base: "90%" }} justifyContent='center'>
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
          <Img
            src={abouthome}
            w={{ md: "260px", base: "200px" }}
            h={{ md: "340px", base: "300px" }}
            float={"left"}
            rounded={"lg"}
            marginTop={"-30px"}
            marginBottom={"10px"}
            marginRight={{ base: "10px", md: "30px" }}
          />
          Hey, I'm Matias, a curious and enthusiastic guy from Tucuman,
          Argentina. I love learning new things, so I'm always digging into
          different topics that grab my attention. My logical thinking skills
          are pretty sharp, and I'm known for being a friendly and empathetic
          person. I like to enjoy my time with friends in the
          nature or playing football. I'm a big animal lover 
          too. I think they're fascinating creatures.
          
        </Text>
      </Flex>

      <BigBangButton url="/about" content={"More About Me"} />

    </Box>
  );
}
