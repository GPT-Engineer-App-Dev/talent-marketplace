import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" mt={8} py={4} borderTopWidth={1} textAlign="center">
      <Text>&copy; {new Date().getFullYear()} Claude Particles. All rights reserved.</Text>
      <Link href="/terms" ml={4}>
        Terms of Service
      </Link>
      <Link href="/privacy" ml={4}>
        Privacy Policy
      </Link>
    </Box>
  );
};

export default Footer;
