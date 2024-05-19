import { Button } from "@cred/neopop-web/lib/components";
import { useNavigate ,Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AllBlogs = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({ results: [], next: null, previous: null });
  const [loading, setLoading] = useState(true);

  const handleNextClick = () => {
    if (data.next) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      navigate(`/blogs/${nextPage}`);
    }
  };

  const handlePreviousClick = () => {
    if (data.previous) {
      const previousPage = currentPage - 1;
      setCurrentPage(previousPage);
      navigate(`/blogs/${previousPage}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/all-blogs?page=${currentPage}&limit=6`
        );
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900">
        Our Stories
      </h2>
      <p className="mb-20 text-lg text-gray-500">
        Comes directly from the desk of bloggers, creators and writers at
        Blog.
      </p>
      {data.results && (
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {data.results.map((blog, index) => (
            <div key={index}>
                <Link to={`/blogs/${currentPage}/${blog.id}`}>
                <img
                  src={blog.image}
                  className="object-cover w-full h-56 mb-5 bg-center rounded"
                  alt={blog.title}
                  loading="lazy"
                />
              </Link>
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
              <Link to={`/blogs/${currentPage}/${blog.id}`} className="text-gray-900 hover:text-purple-700">
                  {blog.title}
                </Link>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                {blog.description}
              </p>
              <p className="mb-3 text-sm font-normal text-gray-500">
                <p href="#" className="font-medium text-gray-900 hover:text-purple-700">
                  {blog.author}
                </p>
                • {blog.date}
              </p>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
        {currentPage > 1 && (
          <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="dark"
            onClick={handlePreviousClick}
          >
            Previous Page
          </Button>
        )}
        {currentPage<5 &&(
           <Button
          variant="secondary"
          kind="elevated"
          size="big"
          colorMode="dark"
          onClick={handleNextClick}
        >
          Next Page
        </Button>
        )} 
      </div>
    </section>
  );
};

export default AllBlogs;
