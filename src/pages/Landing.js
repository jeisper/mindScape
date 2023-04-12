import { Flex } from '@chakra-ui/react';
import React from 'react';
import SideMenu from '../components/SideMenu';

function Landing() {
  return (
    <Flex display="flex" flexDir="row" justify="space-between">
      <SideMenu />
      <Flex>Empty 1 </Flex>
      <Flex>Empty 2</Flex>
    </Flex>
  );
}

export default Landing;
