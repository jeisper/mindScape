import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { CgProfile } from 'react-icons/cg';

function SideMenu() {
  return (
    <Flex display="flex" flexDir="column" ml="10" mt="10" fontSize="30">
      <Flex>
        <CgProfile size="100" />
      </Flex>
      <Flex display="flex" flexDir="column">
        <Text fontWeight="bold">Courses</Text>
      </Flex>
      <Flex display="flex" flexDir="column">
        <Flex fontWeight="bold">Skills</Flex>
      </Flex>
      <Flex display="flex" flexDir="column">
        <Flex fontWeight="bold">Work Exp</Flex>
      </Flex>
    </Flex>
  );
}

export default SideMenu;
