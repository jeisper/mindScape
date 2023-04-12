import { Flex } from '@chakra-ui/react';
import React from 'react';
import DescriptionEvaluate from '../components/DescriptionEvaluate';
import SideMenu from '../components/SideMenu';
import SummaryEvaluate from '../components/SummaryEvaluate';

function Evaluate() {
  return (
    <Flex w="100%" display="flex" flexDir="row" h="900px">
      <SideMenu />
      <Flex w="100%" h="100%" display="flex" flexDir="column">
        <Flex w="100%" h="100%" bg="gray.100">
          <DescriptionEvaluate />
        </Flex>
        <Flex w="100%" h="100%" bg="gray.100">
          <SummaryEvaluate />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Evaluate;
