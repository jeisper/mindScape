import React from 'react';
import { ChakraProvider, theme, Flex } from '@chakra-ui/react';
import Landing from './pages/Landing';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Landing />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
