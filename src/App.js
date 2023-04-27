import React from "react";
import "./App.css";
import LunchViewer from "./components/LunchViewer";
import User from "./components/User";
import Dday from "./components/Dday";
import Today from "./components/Today";
import { ChakraProvider, HStack, VStack } from "@chakra-ui/react";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <User></User>
        <Today></Today>
        <br></br>
        <HStack>
          <Dday></Dday>
          <LunchViewer></LunchViewer>
        </HStack>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
