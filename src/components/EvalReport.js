import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  CircularProgress,
  CircularProgressLabel,
  Badge,
} from "@chakra-ui/react";
import { CheckIcon, WarningIcon } from "@chakra-ui/icons";

const StudentReport = ({showReport}) => {
  const strengths = ["Projects", "Entrepreneurship", "Teamwork"];
  const weaknesses = ["AWS Certification", "Kubernetes", "Docker"];

  useEffect(() => {
    console.log("useReport has changed: ", showReport);
  }, [showReport]);

  if (!showReport) {
    return <></>;
  }

  return (
    <VStack spacing={6} alignItems="flex-start" w="full">
      <Heading size="lg">Student Report</Heading>

      <VStack alignItems="flex-start" w="full" spacing={4}>
        <Heading size="md">Strengths</Heading>
        <HStack spacing={3}>
          {strengths.map((strength, index) => (
            <Badge key={index} colorScheme="green" variant="solid">
              {strength}
            </Badge>
          ))}
        </HStack>
      </VStack>

      <VStack alignItems="flex-start" w="full" spacing={4}>
        <Heading size="md">Weaknesses</Heading>
        <HStack spacing={3}>
          {weaknesses.map((weakness, index) => (
            <Badge key={index} colorScheme="red" variant="solid">
              {weakness}
            </Badge>
          ))}
        </HStack>
      </VStack>

      <Box w="full">
        <Heading size="md">Progress</Heading>
        <HStack spacing={8}>
          <VStack>
            <CircularProgress
              value={75}
              color="green.400"
              size="100px"
              thickness="10px"
            >
              <CircularProgressLabel>75%</CircularProgressLabel>
            </CircularProgress>
            <Text textAlign="center">Key Word Matching</Text>
          </VStack>
          <VStack>
            <CircularProgress
              value={40}
              color="red.400"
              size="100px"
              thickness="10px"
            >
              <CircularProgressLabel>40%</CircularProgressLabel>
            </CircularProgress>
            <Text textAlign="center">Experience</Text>
          </VStack>
        </HStack>
      </Box>

      <Box w="full">
        <Heading size="md">Project Recomendations</Heading>
        <VStack alignItems="flex-start" spacing={2}>
          <HStack>
            <CheckIcon color="green.500" />
            <Text>Build a CI/CD pipeline for a simple web application: Create a pipeline to automate the build, test, and deployment process for a simple web app.</Text>
          </HStack>
          <HStack>
          <CheckIcon color="green.500" />
            <Text>
            Create a Docker Swarm cluster: Docker Swarm is a popular tool for managing a cluster of Docker nodes. Build a Swarm cluster and deploy containers across multiple nodes.
            </Text>
          </HStack>
          <HStack>
          <CheckIcon color="green.500" />
            <Text>
            Deploy a Simple Web Application to AWS: Start by deploying a simple web application to AWS using Elastic Beanstalk or the AWS Management Console. This will help you become familiar with the AWS infrastructure and tools.
            </Text>
          </HStack>
          <HStack>
          <CheckIcon color="green.500" />
            <Text>
            Build a Data Pipeline with AWS S3 and AWS Glue: AWS S3 is a storage service and AWS Glue is a data integration service. Build a simple data pipeline using these services to learn how to store and process data on AWS.
            </Text>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default StudentReport;
