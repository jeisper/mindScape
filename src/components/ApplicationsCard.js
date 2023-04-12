import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ApplicationsCard() {
  const navigate = useNavigate();
  return (
    <Flex
      h="250px"
      bgGradient="linear(to-b, orange.200, orange.500)"
      p="4"
      m="10"
      borderRadius="20"
      boxShadow="lg"
      display="flex"
      flexDir="column"
    >
      <Text fontWeight="bold" fontSize="40">
        Career
      </Text>
      <Flex display="flex" flexDir="row" ml="auto" mt="auto">
        <Button mx="2" onClick={() => navigate('/generator')}>
          CV Generator
        </Button>
        <Button mx="2" onClick={() => navigate('/eval')}>
          CV Evaluator
        </Button>
      </Flex>
    </Flex>
  );
}

export default ApplicationsCard;
