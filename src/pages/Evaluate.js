import { Flex, Heading, Input, Textarea } from '@chakra-ui/react';
import React from 'react';
import SideMenu from '../components/SideMenu';

function Evaluate() {
  return (
    <Flex minH="100vh" w="100%">
      <SideMenu />
      <Flex w="100%">
        <Flex w="50%" bg="gray.100"></Flex>
        <Flex w="50%" bg="gray.200">
          <Heading p="8" fontSize="md">
            Enter Job Description
          </Heading>
          <Textarea h="200px" cols="10" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Evaluate;
