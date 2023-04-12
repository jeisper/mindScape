import React from 'react';
import { ChakraProvider, theme, Flex } from '@chakra-ui/react';
import Landing from './pages/Landing';
import Evaluate from './pages/Evaluate';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Evaluate />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
