import { Box, Button } from '@chakra-ui/react'

import * as React from 'react'

const DesktopNavLink = React.forwardRef((props, ref) => {
  const { active, to, ...rest } = props
  return (
    <Button
      variant="text"
      
      to={to}
      ref={ref}
      alignItems="center"
      justifyContent="center"
      fontSize="13px"
      lineHeight="1rem"
      fontFamily="Mardoto"
      textAlign="center"
      fontWeight="500"
      display="inline-block"
      aria-current={active ? 'page' : undefined}
      transition="all 0.2s"
      {...rest}
    />
  )
})
DesktopNavLink.displayName = 'DesktopNavLink'

export const MobileNavLink = (props) => {
  const { active, to, ...rest } = props
  return (
    <Box
    
      to={to}
      aria-current={active ? 'page' : undefined}
      w="full"
      display="flex"
      alignItems="center"
      height="14"
      fontFamily="Mardoto"
      fontSize="xl"
      borderBottomWidth="1px"
      borderColor="#dddddd"
      {...rest}
    />
  )
}
export const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
}