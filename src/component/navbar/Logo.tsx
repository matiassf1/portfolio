import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

interface ILogo {
      w: string,
      color: string
}

export const Logo: React.FunctionComponent<ILogo> = ({w, color}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/')
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <Box w={w} color={color}>
      <Text fontSize="2xl" fontWeight="bold" cursor='pointer' onClick={handleNavigate}>
        MySelf
      </Text>
    </Box>
  )
}
