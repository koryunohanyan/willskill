import * as React from 'react'
import { MotionBox } from './MotionBox'

export const NavMenuWeb = React.forwardRef((props, ref) => (
  <MotionBox
    ref={ref}
    initial="init"
    variants={variants}
    outline="0"
    opacity="0"
    minW="675px"
    w={{base: '100%', lg: "675px"}}
    bg="green.200"
    maxW="100%"
    borderRadius="0 0 12px 12px"
    shadow="lg"
    top="100%"
    position="absolute"
    zIndex="1"
    pt="6"
    pb="12"
    {...props}
  />
))

export const NavMenu = React.forwardRef((props, ref) => (
  <MotionBox
    style={{right: 'auto', left: 'auto', height: 'calc(100vh - 80px)'}}
    ref={ref}
    initial="init"
    variants={variants}
    outline="0"
    opacity="0"
    w={{base: 'full', lg: "675px"}}
    bg="white"
    top="80px"
    shadow="lg"
    right="auto"
    left="auto"
    position="fixed"
    zIndex="1"
    pt="6"
    pb="12"
    {...props}
  />
))

NavMenu.displayName = 'NavMenu'
const variants = {
  init: {
    opacity: 0,
    y: -4,
    display: 'none',
    transition: {
      duration: 0,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    display: 'block',
    transition: {
      duration: 0.15,
    },
  },
  closed: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.1,
    },
    transitionEnd: {
      display: 'none',
    },
  },
}