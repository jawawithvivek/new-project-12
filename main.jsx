// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router
import App from "./App.jsx"; // Import App component
import "@fontsource/ubuntu"; // Import Ubuntu font
import { theme } from "./theme/index.js"; // Custom Chakra UI theme

// Render the app to the DOM
createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <Router>  {/* Wrap the app in BrowserRouter */}
      <App />
    </Router>
  </ChakraProvider>
);

