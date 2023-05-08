import { Button, theme, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

interface IToggleColorMode {
  isOpen: boolean;
}

export const ToggleColorMode: React.FunctionComponent<IToggleColorMode> = ({
  isOpen,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return isOpen ? null : (
    <Button
      onClick={() => toggleColorMode()}
      background={colorMode}
      rounded="2xl"
    >
      {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
