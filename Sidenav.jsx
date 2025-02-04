// src/components/Sidenav.jsx
import React from "react";
import { Stack, HStack, Icon, Text } from "@chakra-ui/react"; // Chakra UI components
import { RxDashboard } from "react-icons/rx"; // Importing icons

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard, // Icon for Dashboard
      text: "Dashboard", // Text for the link
      link: "/dashboard", // Route to the Dashboard page
    },
    // You can add more links here as needed
  ];

  return (
    <Box width="250px" height="100vh" bg="gray.700" p="4">
      <Stack spacing="4">
        {navLinks.map((nav) => (
          <HStack key={nav.text} spacing="4" align="center">
            <Icon as={nav.icon} color="white" />
            <Text color="white">{nav.text}</Text>
          </HStack>
        ))}
      </Stack>
    </Box>
  );
};

export default Sidenav;
