import {
  Box,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import { CgProfile } from 'react-icons/cg';

const certification = ['AWS Certified Solutions Architect', 'Google Analytics'];
const projects = ['Portfolio', 'Tic Tac Toe', '+'];
const workExp = ['Workday', 'SAP', ' Accenture', '+'];

const skills = [
  'JavaScript',
  'React',
  'Node',
  'Express',
  'MongoDB',
  'SQL',
  '+',
];

function SideMenu() {
  return (
    <Flex
      display="flex"
      flexDir="column"
      pl="10"
      pr="6"
      pt="10"
      fontSize="15"
      w="30%"
      bg="gray.100"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDir="column"
        fontSize="25"
        p="3"
        py="5"
        my="2"
        borderRadius="10"
        color="white"
        bg=" linear-gradient(177deg, rgba(241,151,3,1) 9%, rgba(199,72,0,1) 94%)"
      >
        <Image
          w="100px"
          h="100px"
          borderRadius="50%"
          objectFit="cover"
          src="https://us.123rf.com/450wm/fizkes/fizkes2011/fizkes201102042/159430998-headshot-portrait-profile-picture-of-pretty-smiling-young-woman-posing-indoors-looking-at-camera.jpg?ver=6"
        />
        <Text fontWeight="bold">Amy</Text>
      </Flex>
      <Flex display="flex" flexDir="column" my="4">
        <Text fontWeight="bold">Course</Text>
        <Text fontSize="15">Computer Science International</Text>
      </Flex>

      <Flex display="flex" flexDir="column" my="4">
        <Text fontWeight="bold">Certifications:</Text>
        <Flex display="flex" flexWrap="wrap">
          <UnorderedList>
            {certification.map(certification => {
              return <ListItem>{certification}</ListItem>;
            })}
          </UnorderedList>
        </Flex>
      </Flex>
      <Flex display="flex" flexDir="column" my="2">
        <Text fontWeight="bold">Work Experience:</Text>
        <Flex display="flex" flexWrap="wrap">
          {workExp.map(workExp => {
            return (
              <Box
                m="2"
                px="3"
                borderRadius="10"
                shadow="md"
                fontSize="15"
                bg="white"
                w="fit-content"
              >
                {workExp}
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
                m="2"
                px="3"
                borderRadius="10"
                shadow="md"
                fontSize="15"
                bg="white"
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
                m="2"
                px="3"
                borderRadius="10"
                shadow="md"
                fontSize="15"
                bg="white"
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
