import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Search2Icon } from '@chakra-ui/icons';

function PracticeSection() {
  const courses = [
    {
      name: 'Mobile Development',
      category: 'Exercise',
    },
    {
      name: 'To Do App',
      category: 'Project',
    },
    {
      name: 'Security',
      category: 'Exercise',
    },
    {
      name: 'Law',
      category: 'Exercise',
    },
  ];

  return (
    <Flex px="10" pb="10" flexDir="column">
      <Heading fontSize="30">Practice</Heading>
      <InputGroup my="2">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="orange.500" />}
        />
        <Input type="tel" placeholder="Search courses" w="70%" ml="1" />
      </InputGroup>

      <Flex display="flex" flexWrap="wrap">
        {courses.map(course => (
          <Flex
            key={course.name}
            w="45%"
            h="100%"
            bg="orange.300"
            m="2"
            justifyContent="center"
            alignItems="center"
            borderRadius="20"
            boxShadow="lg"
            flexDir="column"
            flexWrap="wrap"
          >
            <Text fontWeight="bold" fontSize="20">
              {course.name}
            </Text>
            <Box
              m="2"
              px="3"
              borderRadius="10"
              shadow="md"
              fontSize="15"
              bg="white"
              w="fit-content"
            >
              {course.category}
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default PracticeSection;
