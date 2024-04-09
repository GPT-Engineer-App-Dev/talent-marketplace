import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" py={8} textAlign="center">
      <Heading as="h1" size="2xl" mb={4}>
        Claude Particles
      </Heading>
      <Text fontSize="xl">Discover and connect with top software talent specializing in web technologies</Text>
    </Box>
  );
};

export default Header;
