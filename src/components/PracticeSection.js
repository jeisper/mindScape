import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

function PracticeSection() {
  const courses = [
    {
      name: 'Course 1',
      category: 'Category 1',
    },
    {
      name: 'Course 2',
      category: 'Category 2',
    },
    {
      name: 'Course 3',
      category: 'Category 1',
    },
    {
      name: 'Course 4',
      category: 'Category 2',
    },
  ];

  return (
    <Flex px="10" pb="10" flexDir="column">
      <Heading>Practice</Heading>

      <Flex>
        {courses.map(course => (
          <Flex
            key={course.name}
            w="100%"
            h="100%"
            bg="blue.300"
            m="2"
            borderRadius="20"
            boxShadow="lg"
            flexDir="column"
            flexWrap="wrap"
          >
            <Heading>{course.name}</Heading>
            <Heading>{course.category}</Heading>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default PracticeSection;
