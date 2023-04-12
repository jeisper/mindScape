import { Box, Button, Flex, Heading, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import SideMenu from './SideMenu';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

function Generator() {
  const cvs = ['Workday', 'Google', 'Amazon', 'Facebook', 'Apple'];
  const [showCV, setShowCV] = useState(false);

  return (
    <Flex h="100vh" w="100%" flexDir="row">
      <SideMenu />
      <Flex w="100%" p="10" flexDir="column" overflow="scroll">
        <Heading>CV Generator</Heading>
        <Text my="4">Generate custom CVs tailored to each job!</Text>
        <Heading fontSize="md">Saved</Heading>
        <Flex>
          {cvs.map(cvs => {
            return (
              <Flex
                m="2"
                px="3"
                w="200px"
                h="200px"
                borderRadius="10"
                shadow="md"
                fontSize="15"
                bg="orange.300"
                cursor
                justifyContent="center"
                alignItems="center"
                _hover={{ opacity: '0.8' }}
              >
                {cvs}
              </Flex>
            );
          })}
        </Flex>

        <Heading fontSize="md" my="10">
          Create New
        </Heading>
        <Textarea
          w="100%"
          borderColor="black"
          h="200px"
          placeholder="Paste job description here"
        ></Textarea>

        <Button mt="4" w="150px" p="2" bg="orange.300" onClick={() => {}}>
          Generate
        </Button>
      </Flex>
    </Flex>
  );
}

export default Generator;
