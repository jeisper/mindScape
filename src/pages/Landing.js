import { Flex } from '@chakra-ui/react';
import React from 'react';
import SideMenu from '../components/SideMenu';
import MainSection from '../components/MainSection';

function Landing() {
  return (
    <Flex
      display="flex"
      flexDir="row"
      justify="space-between"
      minH="100vh"
      w="100%"
    >
      <SideMenu />

      <MainSection />
    </Flex>
  );
}

export default Landing;
