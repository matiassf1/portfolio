import { Link, Text, Button } from "@chakra-ui/react";

interface IMenuItem {
  children: string;
  to: string;
}

export const MenuItem: React.FunctionComponent<IMenuItem> = ({
  children,
  to = "/",
}) => {
  return (
    <Link href={to}>
      <Button
        display="block"
        fontSize="lg"
        borderTopStartRadius="full"
        borderBottomEndRadius="full"
        fontWeight="semibold"
        colorScheme={"gray"}
        variant="ghost"
      >
        {children}
      </Button>
    </Link>
  );
};
