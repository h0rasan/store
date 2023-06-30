import React, { useState, createContext } from 'react';

export const PostContext = createContext({
  posts: [],
  setPosts: () => [],
});

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const values = {
    posts,
    setPosts,
  };

  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};

export default PostContextProvider;
