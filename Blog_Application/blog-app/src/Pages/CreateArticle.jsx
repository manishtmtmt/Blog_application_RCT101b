import {
  Box,
  Container,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import ArticleUpdater from "../Components/ArticleUpdater";

const CreateArticle = () => {
  return (
    <Container>
      <Box textAlign="center" py={{ base: 2, md: 10 }}>
        <Heading>Create Article</Heading>
      </Box>
      <ArticleUpdater />
    </Container>
  );
};

export default CreateArticle;
