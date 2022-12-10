import * as React from "react";
import { NavContent } from "./NavContent";
import { Box, Flex } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      as="header"
      h={{ base: "80px", lg: "80px" }}
      position="relative"
      zIndex="10"
      bgColor="#111111"
    >
      <NavContent.Mobile
        display={{
          base: "flex",
          lg: "none",
        }}
      />
      <NavContent.Desktop
        display={{
          base: "none",
          lg: "flex",
        }}
      />
    </Flex>
  );
};

export default Navbar;
