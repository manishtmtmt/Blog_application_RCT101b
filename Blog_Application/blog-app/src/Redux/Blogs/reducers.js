import * as types from "./actionTypes";

const initialState = {
  blogs: [],
  currentBlog: {},
  loading: false,
  error: "",
};

export const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_BLOG_POST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }

    case types.FETCH_BLOG_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: "",
        blogs: payload,
      };
    }

    case types.FETCH_BLOG_POST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }

    case types.FETCH_SINGLE_BLOG_REQUEST: {
        return {
          ...state,
          loading: true,
          error: "",
        };
      }
  
      case types.FETCH_SINGLE_BLOG_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: "",
          currentBlog: payload,
        };
      }
  
      case types.FETCH_SINGLE_BLOG_FAILURE: {
        return {
          ...state,
          loading: false,
          error: payload,
        };
      }

    default:
      return state;
  }
};
