import { HStack, Text, Box } from '@chakra-ui/react'

import * as React from 'react'

export const SubmenuItem = (props) => {
  const { title, icon, children, to, ...rest } = props
  return (
    <Box
      className="group"
      to={to}
      m="-3"
      p="2"
      display="flex"
      fontSize="md"
      alignItems="flex-start"
      transition="all 0.2s"
      rounded="lg"
      _hover={{
        bg: 'rgba(0, 0, 0, 0.1)',
      }}
      _focus={{
        shadow: 'outline',
      }}
      {...rest}
    >
      <Box marginStart="3" as="dl">
        <HStack as="dt">
          <Text
            fontWeight="700"
            color="white"
          >
            {title}
          </Text>
        </HStack>
      </Box>
    </Box>
  )
}