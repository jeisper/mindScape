import React from 'react';
import { ChakraProvider, theme, Flex } from '@chakra-ui/react';
import Landing from './pages/Landing';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/evaluation" element={<Landing />} />
          <Route path="/practice" element={<Landing />} />
          <Route path="/practice/:id" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
