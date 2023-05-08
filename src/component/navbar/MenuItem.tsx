import { Link, Text, Button, useColorMode } from "@chakra-ui/react";

interface IMenuItem {
  children: string;
  to: string;
}

export const MenuItem: React.FunctionComponent<IMenuItem> = ({
  children,
  to = "/",
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Link href={to} textDecorationColor={'white'}>
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
