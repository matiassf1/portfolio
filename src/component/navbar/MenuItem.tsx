import { Button, ColorMode, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IMenuItem {
  children: string;
  to: string;
  colorMode: ColorMode;
}

export const MenuItem: React.FunctionComponent<IMenuItem> = ({
  children,
  to = "/",
  colorMode
}) => {

  return (
    <Link to={to}>
      <Button
        display="block"
        fontSize="lg"
        borderTopStartRadius="full"
        borderBottomEndRadius="full"
        fontWeight="semibold"
        color={colorMode === 'dark' ? '#DEEFE7' : '#F26D6D'}
        colorScheme={"gray"}
        variant="ghost"
      >
        {children}
      </Button>
    </Link>
  );
};
