import { Button, theme, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
export const ToggleColorMode = () => {

    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Button onClick={() => toggleColorMode()} background={colorMode} rounded='2xl'>
        {colorMode === "dark" ? <SunIcon /> : <MoonIcon /> }
    </Button>
  )
}
