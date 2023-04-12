import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
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
    <Flex
      display="flex"
      flexDir="column"
      pl="10"
      pt="10"
      fontSize="15"
      w="30%"
      bgGradient="linear(to-b, orange.200, orange.500)"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDir="column"
        fontSize="25"
      >
        <CgProfile size="100" />
        <Text fontWeight="bold">Amy</Text>
      </Flex>
      <Flex display="flex" flexDir="column" my="1">
        <Text fontWeight="bold">Course</Text>
        <Text fontSize="15">Computer Science International</Text>
      </Flex>
      <Flex display="flex" flexDir="column" my="1">
        <Text fontWeight="bold">Work Experience:</Text>
        <Flex display="flex" flexWrap="wrap">
          <UnorderedList>
            {workExp.map(workExp => {
              return <ListItem fontSize="15"> {workExp}</ListItem>;
            })}
          </UnorderedList>
        </Flex>
      </Flex>
      <Flex display="flex" flexDir="column" my="1">
        <Text fontWeight="bold">Certifications:</Text>
        <Flex display="flex" flexWrap="wrap">
          <UnorderedList>
            {certification.map(certification => {
              return <ListItem fontSize="15">{certification}</ListItem>;
            })}
          </UnorderedList>
        </Flex>
      </Flex>
      <Flex display="flex" flexDir="column" my="3">
        <Text fontWeight="bold">Projects:</Text>
        <Flex display="flex" flexWrap="wrap">
          <UnorderedList>
            {projects.map(projects => {
              return <ListItem fontSize="15">{projects}</ListItem>;
            })}
          </UnorderedList>
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
