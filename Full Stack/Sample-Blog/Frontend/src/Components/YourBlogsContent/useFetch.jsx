// useFetchContent.js
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useFetchContent = (id) => {
  const [blogsContent, setBlogsContent] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserBlogsContent = async () => {
      try {
        const token = Cookies.get("jwt");
        const response = await fetch(
          `http://localhost:3000/user-blogs-content/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setBlogsContent(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserBlogsContent();
  }, [id]);

  return { blogsContent, error };
};

export default useFetchContent;
