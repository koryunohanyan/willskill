import {
  Box,
  Flex,
  HStack,
  useDisclosure,
  Link,
  Image,
} from "@chakra-ui/react";

import React from "react";
import Vector from "../../assets/Vector.svg";
import { NavLink } from "./NavLink";
import { NavMenu } from "./NavMenu";

import { ToggleButton } from "./ToggleButton";
import { links, mobileLinks } from "./_data";
import Basket from "../../assets/basket.png";

const MobileNavContext = (props) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex
        bg="black"
        position={isOpen ? "fixed" : "relative"}
        h="80px"
        w="full"
        zIndex="1001"
        top="0"
        left="0"
        px={{ base: "4", lg: "1.875rem" }}
        align="center"
        justify="space-between"
        className="nav-content__mobile"
        {...props}
      >
        <Box w="3rem" as={Link} to="/">
          <Image src={Vector} alt="logo" />
        </Box>

        <Box>
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? "open" : "closed"}>
        {mobileLinks.map((link, idx) => (
          <NavLink.Mobile px="1.875rem" key={idx} to={link.href}>
            {link.label}
          </NavLink.Mobile>
        ))}
      </NavMenu>
    </>
  );
};

const DesktopNavContent = (props) => {
  return (
    <Flex
      className="nav-content__desktop"
      justify="space-between"
      w="full"
      alignItems="center"
      px="4rem"
      {...props}
    >
      <Box as={Link} to="/" rel="home">
        <Image src={Vector} alt="logo" />
      </Box>

      <HStack spacing="6" id="nav__primary-menu" aria-label="Main Menu">
        {links.map((link, idx) => (
          <NavLink.Desktop key={idx} to={link.href} color="white">
            {link.label}
          </NavLink.Desktop>
        ))}
      </HStack>
      <Image w="16px" src={Basket} alt="basket" />
    </Flex>
  );
};

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
};
