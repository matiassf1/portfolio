import { Code, Stack, useColorMode } from '@chakra-ui/react';
import Swal from 'sweetalert2';

export const ConsoleLogs = () => {

  const {colorMode, toggleColorMode } = useColorMode();

  const handleWelcome = () => {
    Swal.fire({
      title: 'Welcome To My Portfolio!!',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/trees.png)',
    })
  }

  return (
    <Stack
      direction={["column", "row"]}
      justify="center"
      padding="20px"
      mt={["15px", "20px", "35px"]}
    >
      <Code
        colorScheme={colorMode == 'light' ? "tertiary" : "blue"}
        textColor={"white"}
        children="console.warn(welcome!!)"
        style={{ cursor:'pointer' }}
        onClick={handleWelcome}
      />
      <Code
        colorScheme={colorMode == 'light' ? "secondary" : "purple"}
        textColor={"white"}
        children="const myFullName = 'Sfer Matias Gabriel'"
      />
      <Code
        colorScheme={colorMode == 'light' ? "primary" : "blue"}
        textColor={"white"}
        children="yarn add good-vibes@latest"
      />
    </Stack>
  );
};
