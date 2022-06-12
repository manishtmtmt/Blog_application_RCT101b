import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Heading,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteBlogPost, fetchSingleBlog } from "../Redux/Blogs/action";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const Article = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const currentBlog = useSelector((store) => store.blogReducer.currentBlog);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleBlog(Number(id)));
    }
  }, [dispatch]);

  const handleDeletePost = () => {
    dispatch(deleteBlogPost(id));
    navigate("/articles");
  };

  return (
    <Container maxW={"3xl"} pb={"4rem"}>
      <Box textAlign="center" py={{ base: 5, md: 10 }}>
        <Avatar
          name={currentBlog?.author?.name}
          size="lg"
          src={`${currentBlog?.author?.profile_pic}`}
        />
        <Box>
          <Link to={`${location.pathname}/update`}>
            <EditIcon />
          </Link>
          <Popover
            returnFocusOnClose={false}
            isOpen={isOpen}
            onClose={onClose}
            placement='top'
            closeOnBlur={false}
          >
            <PopoverTrigger>
            <DeleteIcon onClick={onToggle} />
        </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                Are you sure you want to delete this blog?
              </PopoverBody>
              <PopoverFooter display="flex" justifyContent="flex-end">
                <ButtonGroup size="sm">
                  <Button variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={handleDeletePost}>Delete</Button>
                </ButtonGroup>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        </Box>
        <Text fontSize="lg">{currentBlog?.author?.name}</Text>
        <Text>{currentBlog?.author?.publish_date}</Text>
      </Box>
      <Center textAlign="center">
        <Stack>
          <Heading>{currentBlog?.title}</Heading>
          <Text fontSize="lg">{currentBlog?.sub_title}</Text>
          <Box>
            <Image
              rounded={"lg"}
              src={currentBlog?.thumbnail_pic}
              alt="Thumbnail Image"
            />
          </Box>
          <Box textAlign="left">{currentBlog?.description}</Box>
        </Stack>
      </Center>
    </Container>
  );
};

export default Article;
