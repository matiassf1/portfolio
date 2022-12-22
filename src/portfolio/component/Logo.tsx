import React from "react"
import { Box, Text } from "@chakra-ui/react"

interface ILogo {
      w: string,
      color: string[]
}

export const Logo: React.FunctionComponent<ILogo> = ({w, color}) => {
  return (
    <Box w={w} color={color}>
      <Text fontSize="2xl" fontWeight="bold">
        MySelf
      </Text>
    </Box>
  )
}
