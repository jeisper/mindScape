import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { CgProfile } from 'react-icons/cg';

const courses = [
  'Course 1',
  'Course 2',
  'Course 3',
  'Course 4',
  'Course 5',
  'Course 6',
];
const skills = [
  'Skill 1',
  'Skill 2',
  'Skill 3',
  'Skill 4',
  'Skill 5',
  'Skill 6',
];
const workExp = [
  'Work Exp 1',
  'Work Exp 2',
  'Work Exp 3',
  'Work Exp 4',
  'Work Exp 5',
  'Work Exp 6',
];

function SideMenu() {
  return (
    <Flex display="flex" flexDir="column" ml="10" mt="10" fontSize="30" w="30%">
      <Flex ml="5" display="flex" flexDir="column" fontSize="25">
        <CgProfile size="100" />
        <Text fontWeight="bold"> Givago</Text>
      </Flex>
      <Flex display="flex" flexDir="column" my="3">
        <Text fontWeight="bold">Courses</Text>
        <Flex display="flex" flexWrap="wrap">
          {courses.map(course => {
            return (
              <Box
                m="1"
                px="2"
                borderRadius="10"
                shadow="md"
                fontSize="15"
                bg="gray.200"
                w="fit-content"
              >
                {course}
              </Box>
            );
          })}
        </Flex>
      </Flex>
      <Flex display="flex" flexDir="column" my="3">
        <Text fontWeight="bold">Skills</Text>
        <Flex display="flex" flexWrap="wrap">
          {skills.map(skill => {
            return (
              <Box
                m="1"
                px="2"
                borderRadius="10"
                shadow="md"
                fontSize="15"
                bg="gray.200"
                w="fit-content"
              >
                {skill}
              </Box>
            );
          })}
        </Flex>
      </Flex>
      <Flex display="flex" flexDir="column" my="3">
        <Text fontWeight="bold">Work Exp</Text>
        <Flex display="flex" flexWrap="wrap">
          {workExp.map(work => {
            return (
              <Box
                m="1"
                px="2"
                borderRadius="10"
                shadow="md"
                fontSize="15"
                bg="gray.200"
                w="fit-content"
              >
                {work}
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SideMenu;
