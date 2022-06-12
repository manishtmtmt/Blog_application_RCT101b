import * as types from "./actionTypes";
import axios from "axios";

const fetchBlogPostRequest = (payload) => {
  return {
    type: types.FETCH_BLOG_POST_REQUEST,
    payload,
  };
};

const fetchBlogPostSuccess = (payload) => {
  return {
    type: types.FETCH_BLOG_POST_SUCCESS,
    payload,
  };
};

const fetchBlogPostFailure = (payload) => {
  return {
    type: types.FETCH_BLOG_POST_FAILURE,
    payload,
  };
};

const fetchBlogPost = (payload) => (dispatch) => {
  dispatch(fetchBlogPostRequest());
  axios
    .get("/blogs")
    .then((r) => dispatch(fetchBlogPostSuccess(r.data)))
    .catch((e) => dispatch(fetchBlogPostFailure(e.data)));
};

const fetchSingleBlogRequest = (payload) => {
  return {
    type: types.FETCH_SINGLE_BLOG_REQUEST,
    payload,
  };
};

const fetchSingleBlogSuccess = (payload) => {
  return {
    type: types.FETCH_SINGLE_BLOG_SUCCESS,
    payload,
  };
};

const fetchSingleBlogFailure = (payload) => {
  return {
    type: types.FETCH_SINGLE_BLOG_FAILURE,
    payload,
  };
};

const fetchSingleBlog = (payload) => (dispatch) => {
  dispatch(fetchSingleBlogRequest());
  axios
    .get(`/blogs/${payload}`)
    .then((r) => dispatch(fetchSingleBlogSuccess(r.data)))
    .catch((e) => dispatch(fetchSingleBlogFailure(e.data)));
};

const createBlogPostRequest = (payload) => {
  return {
    type: types.CREATE_BLOG_POST_REQUEST,
    payload,
  };
};

const createBlogPostSuccess = (payload) => {
  return {
    type: types.CREATE_BLOG_POST_SUCCESS,
    payload,
  };
};

const createBlogPostFailure = (payload) => {
  return {
    type: types.CREATE_BLOG_POST_FAILURE,
    payload,
  };
};

const createBlogPost = (payload) => (dispatch) => {
  dispatch(createBlogPostRequest());
  axios
    .post(`/blogs`,payload)
    .then((r) => dispatch(createBlogPostSuccess(r.data)))
    .catch((e) => dispatch(createBlogPostFailure(e.data)));
};

const updateBlogPostRequest = (payload) => {
  return {
    type: types.UPDATE_BLOG_POST_REQUEST,
    payload,
  };
};

const updateBlogPostSuccess = (payload) => {
  return {
    type: types.UPDATE_BLOG_POST_SUCCESS,
    payload,
  };
};

const updateBlogPostFailure = (payload) => {
  return {
    type: types.UPDATE_BLOG_POST_FAILURE,
    payload,
  };
};

const updateBlogPost = (payload) => (dispatch) => {
  dispatch(updateBlogPostRequest());
  axios
    .patch(`/blogs/${payload.id}`, payload)
    .then((r) => dispatch(updateBlogPostSuccess(r.data)))
    .catch((e) => dispatch(updateBlogPostFailure(e.data)));
};

const deleteBlogPostRequest = (payload) => {
  return {
    type: types.DELETE_BLOG_POST_REQUEST,
    payload,
  };
};

const deleteBlogPostSuccess = (payload) => {
  return {
    type: types.DELETE_BLOG_POST_SUCCESS,
    payload,
  };
};

const deleteBlogPostFailure = (payload) => {
  return {
    type: types.DELETE_BLOG_POST_FAILURE,
    payload,
  };
};

const deleteBlogPost = (payload) => (dispatch) => {
  dispatch(deleteBlogPostRequest());
  axios
    .delete(`/blogs/${payload.id}`, payload)
    .then((r) => dispatch(deleteBlogPostSuccess(r.data)))
    .catch((e) => dispatch(deleteBlogPostFailure(e.data)));
};

export { fetchBlogPost, fetchSingleBlog, createBlogPost, updateBlogPost };
