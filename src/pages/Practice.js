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
      title: 'Create a calculator',
      description: 'Create a calculator: Build a simple calculator using HTML, CSS, and JavaScript. Allow users to perform basic arithmetic operations like addition, subtraction, multiplication, and division. You can add more advanced features like scientific calculations and history.',
      exerciseStarterCode: 'Exercise 1',
      solution: 'Solution 1',
    },
    {
      title: 'Create a slider ',
      description: 'Create a slider: Build an image slider using HTML, CSS, and JavaScript. Allow users to navigate between images using arrows or dots. You can also add features like automatic scrolling, captions, and transition effects.',
      exerciseStarterCode: 'Exercise 2',
      solution: 'Solution 2',
    },
    {
      title: 'Create a todo list',
      description: 'Build a todo list: Create a todo list using HTML, CSS, and JavaScript. Allow users to add, remove, and mark tasks as complete. You can also add features like due dates, priority, and categories.',
      exerciseStarterCode: 'Exercise 3',
      solution: 'Solution 3',
    },
    {
      title: 'create a weather app',
      description: 'Build a weather app: Create a weather app using HTML, CSS, and JavaScript. Allow users to enter a city name and display the current weather conditions. You can also add features like hourly and daily forecasts, weather alerts, and a search history.',
      exerciseStarterCode: 'Exercise 4',
      solution: 'Solution 4',
    },
  ];

  return (
    <Flex w="100%" h="100vh" flexDir="column" p="10" bg="orange.300">
      <Flex w="100%" pos="relative" py="3" mb="2">
        <Heading pos="absolute" mb="10">
          {"Web Dev"}
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
            h="300px"
            fontSize="md"
            as={CodeMirror}
            bg="red"
            value={`import React from 'react'
export default function test() {
return (
<div>test</div>
)
}
`}
            options={{
              mode: 'javascript',
              src:"test",
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
