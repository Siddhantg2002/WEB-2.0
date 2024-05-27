import { createContext, useState, useContext } from 'react';

const UserBlogContext = createContext();

export const UserBlogProvider = ({ children }) => {
  const [userBlogs, setUserBlogs] = useState([]);

  return (
    <UserBlogContext.Provider value={{ userBlogs, setUserBlogs }}>
      {children}
    </UserBlogContext.Provider>
  );
};

export const useUserBlog = () => useContext(UserBlogContext);
