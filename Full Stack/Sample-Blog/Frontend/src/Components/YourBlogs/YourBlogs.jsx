import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { Button } from '@cred/neopop-web/lib/components';

const YourBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const token = Cookies.get("jwt");
        const response = await fetch("http://localhost:3000/user-blogs", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setBlogs(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserBlogs();
  }, []);

  const handleReverse = () => {
    setBlogs([...blogs].reverse()); // Create a copy of blogs and reverse it
    setIsReversed(!isReversed); // Toggle the state
  };

  if (loading)
    return (
      <div className="flex justify-center h-auto">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <section className="px-4 pt-3 pb-5 mb-36 mx-auto max-w-7xl">
      <div className="flex justify-between pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">
        <h1>All Blogs</h1>
        <Button
            variant="secondary"
            kind="flat"
            size="small"
            colorMode="dark"
            onClick={handleReverse}
          >
            {isReversed ? 'Oldest' : 'Newest'}
          </Button>
      </div>

      {blogs.length > 0 ? (
        <div className="w-full xl:w-4/6">
          <div className="flex flex-col space-y-16">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="grid grid-cols-1 gap-6 md:grid-cols-4"
              >
                <img
                  src = {`../../../images/user_uploads/${blog.image}`}
                  className="object-cover w-full h-40 col-span-1 bg-center"
                  alt={blog.title}
                  loading="lazy"
                />
                <div className="col-span-1 md:col-span-3">
                  <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">
                    {new Date(blog.date).toLocaleDateString()}
                  </p>
                  <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                    <p className="text-gray-900 hover:text-purple-700">
                      {blog.title}
                    </p>
                  </h2>
                  <p className="mb-3 text-sm font-normal text-gray-500 line-clamp-3">
                    {blog.content}
                  </p>
                  <Link to={`${blog._id}`} className="btn btn-light btn-sm">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-40">
          <p>No blogs found.</p>
        </div>
      )}
    </section>
  );
};

export default YourBlogs;
