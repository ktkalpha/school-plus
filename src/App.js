import React from "react";
import "./App.css";
import LunchViewer from "./components/LunchViewer";
import User from "./components/User";
import Dday from "./components/Dday";
import { ChakraProvider, HStack, VStack } from "@chakra-ui/react";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <User></User>
        <Dday></Dday>
        <LunchViewer></LunchViewer>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
