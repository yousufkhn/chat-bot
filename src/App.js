import React from "react";
import Signup from "./components/Signup";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <Signup />
    </ChakraProvider>
  );
}
