// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import routing
import Dashboard from "./pages/Dashboard/Dashboard"; // Import Dashboard page
import Sidenav from "./components/Sidenav"; // Import Sidenav component
import { Box } from "@chakra-ui/react"; // Box is a useful Chakra component for layout

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box display="flex">
      {/* Sidenav is always visible on the left */}
      <Sidenav />

      {/* Main content area */}
      <Box flex="1" p="4">
        {/* Define routes for the pages */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Other routes can be added here */}
        </Routes>
      </Box>
    </Box>
  );
}

export default App;

