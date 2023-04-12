import { Flex } from '@chakra-ui/react';
import React from 'react';
import ApplicationsCard from './ApplicationsCard';
import PracticeSection from './PracticeSection';

function MainSection() {
  return (
    <Flex w="100%" h="100vh" flexDir="column" p="10">
      <ApplicationsCard />
      <PracticeSection />
    </Flex>
  );
}

export default MainSection;
