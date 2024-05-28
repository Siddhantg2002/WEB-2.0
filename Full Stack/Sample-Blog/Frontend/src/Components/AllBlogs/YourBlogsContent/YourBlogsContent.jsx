import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Button } from "@cred/neopop-web/lib/components";

const YourBlogsContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogsContent, setBlogsContent] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserBlogs = async () => {
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

    fetchUserBlogs();
  }, [id]);

  if (error) return <p>{error}</p>;

  return (
    <>
      {blogsContent.length > 0 ? (
        blogsContent.map((blog) => (
          <article
            key={blog.id}
            itemScope
            itemType="http://schema.org/BlogPosting"
          >
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div className="order-2 h-64 md:order-1 md:h-full">
                <img
                  src={`../../../../images/user_uploads/${blog.image}`}
                  className="object-cover w-full h-full bg-center"
                  alt={blog.image}
                />
              </div>
              <div className="order-1 w-full px-4 py-12 mx-auto text-left md:w-3/4 md:py-48 md:order-2 md:px-0">
                <p className="mb-3 text-gray-500">
                  <time
                    itemProp="datePublished dateModified"
                    dateTime={blog.date}
                  >
                    {blog.date}
                  </time>
                </p>
                <h1
                  className="mb-5 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl"
                  itemProp="headline"
                >
                  {blog.title}
                </h1>
                <a className="flex items-center text-gray-700" href="#">
                  <div className="ml-2">
                    <p className="text-sm font-semibold text-gray-800">
                      {blog.author}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex justify-center px-80 py-20 mx-auto prose">
              <p>{blog.content}</p>
            </div>
            <div className="flex justify-center">
              <Button
                variant="secondary"
                kind="elevated"
                size="big"
                colorMode="dark"
                onClick={() => {
                  navigate(-1);
                }}
              >
                Go Back
              </Button>
            </div>
          </article>
        ))
      ) : (
        <div class=" h-screen w-full max-w-md mx-auto animate-pulse p-9">
          <h1 class="h-2 bg-gray-300 rounded-lg w-52"></h1>
          <p class="w-48 h-2 mt-6 bg-gray-200 rounded-lg "></p>
          <p class="w-full h-2 mt-4 bg-gray-200 rounded-lg "></p>
          <p class="w-64 h-2 mt-4 bg-gray-200 rounded-lg "></p>
          <p class="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg "></p>
        </div>
      )}
    </>
  );
};

export default YourBlogsContent;
