import { Flex, Text, Button, Heading, Box, useToast } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

function Practice() {
  const { id } = useParams();
  const [currentStep, setStep] = useState(0);
  const toast = useToast();

  const securityCourse = [
    {
      title: 'Task 1',
      description: 'Description 1',
      exerciseStarterCode: 'Exercise 1',
      solution: 'Solution 1',
    },
    {
      title: 'Task 2',
      description: 'Description 2',
      exerciseStarterCode: 'Exercise 2',
      solution: 'Solution 2',
    },
    {
      title: 'Task 3',
      description: 'Description 3',
      exerciseStarterCode: 'Exercise 3',
      solution: 'Solution 3',
    },
    {
      title: 'Task 4',
      description: 'Description 4',
      exerciseStarterCode: 'Exercise 4',
      solution: 'Solution 4',
    },
  ];

  return (
    <Flex w="100%" h="100vh" flexDir="column" p="10" bg="orange.300">
      <Flex w="100%" pos="relative" py="3" mb="2">
        <Heading pos="absolute" mb="10">
          {id}
        </Heading>
        <Flex w="100%" align="center" justify="center">
          <Button
            onClick={() => {
              if (currentStep > 0) {
                setStep(currentStep - 1);
                const content = document.getElementById('content');
                content.style.opacity = 0;
                content.style.transition = 'opacity 100ms ease-in-out';

                setTimeout(() => {
                  content.style.opacity = 1;
                  content.style.transition = 'opacity 100ms ease-in-out';
                }, 100);
              }
            }}
          >
            {'<'} prev{' '}
          </Button>
          <Text fontWeight="bold" mx="4">
            {currentStep + 1} / {securityCourse.length}
          </Text>
          <Button
            onClick={() => {
              if (currentStep < securityCourse.length - 1) {
                setStep(currentStep + 1);

                const content = document.getElementById('content');
                content.style.opacity = 0;
                setTimeout(() => {
                  content.style.opacity = 1;
                }, 200);
              }
            }}
          >
            next {'>'}
          </Button>
        </Flex>
      </Flex>

      <Flex id="content" w="100%" h="100%" shadow="lg" borderRadius="20">
        <Flex
          h="100%"
          w="50%"
          bg="gray.200"
          borderLeftRadius="20"
          p="5"
          flexDir="column"
        >
          <Heading fontSize="md">{securityCourse[currentStep].title}</Heading>
          <Text my="4">{securityCourse[currentStep].description}</Text>
        </Flex>
        <Flex
          h="100%"
          w="50%"
          bg="white"
          borderRightRadius="20"
          p="5"
          flexDir="column"
        >
          <Heading fontSize="md">Activity</Heading>
          <Box
            w="100%"
            mt="4"
            fontSize="md"
            as={CodeMirror}
            bg="red"
            options={{
              mode: 'javascript',
              theme: 'material',
              lineNumbers: true,
            }}
          ></Box>
          <Button
            alignSelf="flex-end"
            bg="orange.300"
            mt="10"
            mr="1"
            w="100px"
            onClick={() => {
              // well done toast
              toast({
                title: 'Well done!',
                status: 'success',
                duration: 2000,
                isClosable: true,
              });
            }}
          >
            Run
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Practice;
