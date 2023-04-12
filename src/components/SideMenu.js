import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { CgProfile } from 'react-icons/cg';

const certification = [
  'AWS Certified Solutions Architect - Associate',
  'Certified Scrum Master (CSM)',
  'Google Analytics Individual Qualification (IQ)',
];
const projects = [
  'CV maker',
  'Pomodoro Timer',
  'Portfolio',
  'Tic Tac Toe',
  'Calculator',
];
const workExp = ['Amazon', 'Google', 'Workday', 'SAP', ' Accenture'];

const skills = ['JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'SQL'];

function SideMenu() {
  return (
    <Flex display="flex" flexDir="column" ml="10" mt="10" fontSize="30" w="30%">
      <Flex
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDir="column"
        fontSize="25"
      >
        <CgProfile size="100" />
        <Text fontWeight="bold">Sanat</Text>
      </Flex>
      <Flex display="flex" flexDir="column" my="3">
        <Text fontWeight="bold">Course</Text>
        <Text fontSize="15">Computer Science International</Text>
      </Flex>
      <Flex display="flex" flexDir="column" my="3">
        <Text fontWeight="bold">Work Experience:</Text>
        <Flex display="flex" flexWrap="wrap">
          {workExp.map(workExp => {
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
                {workExp}
              </Box>
            );
          })}
        </Flex>
      </Flex>
      <Flex display="flex" flexDir="column" my="3">
        <Text fontWeight="bold">Certifications:</Text>
        <Flex display="flex" flexWrap="wrap">
          {certification.map(certification => {
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
                {certification}
              </Box>
            );
          })}
        </Flex>
      </Flex>
      <Flex display="flex" flexDir="column" my="3">
        <Text fontWeight="bold">Projects:</Text>
        <Flex display="flex" flexWrap="wrap">
          {projects.map(projects => {
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
                {projects}
              </Box>
            );
          })}
        </Flex>
      </Flex>
      <Flex display="flex" flexDir="column" my="3">
        <Text fontWeight="bold">Skills:</Text>
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
    </Flex>
  );
}

export default SideMenu;
