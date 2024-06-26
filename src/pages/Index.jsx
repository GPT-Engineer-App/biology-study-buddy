import { Box, Container, Heading, VStack, Text, Link, List, ListItem } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Year 11 Preliminary Biology Study Resource
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Welcome to your study resource for Year 11 Biology. Use the navigation below to explore different topics.
        </Text>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Topics
          </Heading>
          <List spacing={3}>
            <ListItem>
              <Link as={RouterLink} to="/topic1" color="teal.500">
                Topic 1: Introduction to Biology
              </Link>
            </ListItem>
            <ListItem>
              <Link as={RouterLink} to="/topic2" color="teal.500">
                Topic 2: Cell Structure and Function
              </Link>
            </ListItem>
            <ListItem>
              <Link as={RouterLink} to="/topic3" color="teal.500">
                Topic 3: Genetics and Evolution
              </Link>
            </ListItem>
            <ListItem>
              <Link as={RouterLink} to="/topic4" color="teal.500">
                Topic 4: Ecology and Environment
              </Link>
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;