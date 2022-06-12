import React from 'react'
import { Box, Container, Heading } from "@chakra-ui/react"
import ArticleUpdater from '../Components/ArticleUpdater'
import { useSelector } from 'react-redux';

const UpdateArticle = () => {
    const currentBlog = useSelector((store) => store.blogReducer.currentBlog);
  return (
    <Container maxW={"3xl"} pb={'4rem'} >
        <Box textAlign={'center'} py={{base: 2, md: 10}}>
            <Heading>Update Article</Heading>
        </Box>
        <ArticleUpdater currentBlog= {currentBlog} />
    </Container>
  )
}

export default UpdateArticle