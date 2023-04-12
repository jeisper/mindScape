import React from 'react';
import { ChakraProvider, theme, Flex } from '@chakra-ui/react';
import Landing from './pages/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Evaluate from './pages/Evaluate';
import Practice from './pages/Practice';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/eval" element={<Evaluate />} />
          <Route path="/generator" element={<Landing />} />
          <Route path="/practice/:id" element={<Practice />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
