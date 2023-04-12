import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';

const tech = [
  'JavaScript',
  'React',
  'Node',
  'Express',
  'MongoDB',
  'SQL',
  'Python',
  'Java',
  'C++',
  'C#',
  'C',
];
const exp = [
  'Experience 1',
  'Experience 2',
  'Experience 3',
  'Experience 4',
  'Experience 5',
  'Experience 6',
  'Experience 7',
  'Experience 8',
];
const culture = [
  'Leadership',
  'Teamwork',
  'Communication',
  'Work-Life Balance',
  'Diversity',
  'Inclusion',
  'Career Development',
  'Compensation and Benefits',
  'Company Culture',
];

function SummaryEvaluate({showReport}) {
  useEffect(() => {
    console.log("useReport has changed: ", showReport);
  }, [showReport]);

  if (!showReport) {
    return <></>;
  }

  return (
    <Flex
      display="flex"
      flexDir="column"
      w="100%"
      h="100%"
      ml="10"
      mr="10"
      justify="center"
      justifyItems="center"
    >
     <Heading size="lg">Student Report</Heading>
      <Flex display="flex" flexDir="column">
        <Flex display="flex" flexDir="row">
          <Flex display="flex" flexDir="column" my="3" mr="10">
            <Text fontWeight="bold">Technologies:</Text>
            <Flex display="flex" flexWrap="wrap">
              {tech.map(tech => {
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
                    {tech}
                  </Box>
                );
              })}
            </Flex>
          </Flex>
          <Flex display="flex" flexDir="column" my="3">
            <Text fontWeight="bold">Culture:</Text>
            <Flex display="flex" flexWrap="wrap">
              {culture.map(cul => {
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
                    {cul}
                  </Box>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
        <Flex display="flex" flexDir="column" my="3">
          <Text fontWeight="bold">Experience Requirement:</Text>
          <Flex display="flex" flexWrap="wrap">
            {exp.map(exp => {
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
                  {exp}
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SummaryEvaluate;
