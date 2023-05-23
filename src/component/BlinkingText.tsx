import { motion } from "framer-motion";
import { Text, useColorMode } from "@chakra-ui/react";

interface IBlinkingText {
    value: string;
}

const BlinkingText: React.FunctionComponent<IBlinkingText> = ({ value }) => {
  const { colorMode } = useColorMode()
  return (
    <motion.div
      animate={{ opacity: [1, 0.4, 1], transition: { duration: 2, repeat: Infinity } }}
    >
      <Text
        marginTop={["30px", 0, 0, 0]}
        marginBottom={'10px'}
        rounded={"xl"}
        p={2}
        px={6}
        w="100%"
        backgroundColor={colorMode == 'dark'? "#2073F7" : "#ec5555"}
        color={"white"}
        align={"center"}
      >
        {value}
      </Text>
    </motion.div>
  );
};

export default BlinkingText;
