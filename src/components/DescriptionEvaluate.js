import { Button, Flex, Text, Textarea } from '@chakra-ui/react';
import React from 'react';

function DescriptionEvaluate({ showReport, setShowReport }) {
  return (
    <Flex
      display="flex"
      flexDir="column"
      justify="center"
      ml="10"
      w="100%"
      h="100%"
      mt="10"
    >
      <Text fontWeight="bold" fontSize="20">
        Job Description:
      </Text>
      <Textarea h="80%" w="90%" my="5" border="1px solid black" />
      <Button
        display="flex"
        alignItems="center"
        bg="orange.300"
        w="fit-content"
        onClick={() => {
          console.log(showReport);
          setShowReport(!showReport);
        }}
      >
        Evaluate
      </Button>
    </Flex>
  );
}

export default DescriptionEvaluate;
