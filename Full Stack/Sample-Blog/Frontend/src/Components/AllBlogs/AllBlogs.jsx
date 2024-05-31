import React, { useState, useEffect } from "react";
import { Button } from "@cred/neopop-web/lib/components";
import { useNavigate, Link, useParams } from "react-router-dom";
import { SearchBar } from '@cred/neopop-web/lib/components';
import { colorGuide } from '@cred/neopop-web/lib/primitives';

const AllBlogs = () => {
  const navigate = useNavigate();
  const { page } = useParams(); // Get the current page from the URL params
  const [currentPage, setCurrentPage] = useState(parseInt(page) || 1); // Set default page to 1 if undefined
  const [data, setData] = useState({ results: [] });
  const [totalblogs, setTotalBlogs] = useState(null)
  const [loading, setLoading] = useState(true);
  const [isReversed, setIsReversed] = useState(false);
  const [limit, setLimit] = useState(6)

  const handleNextClick = () => {
    if (data) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      navigate(`/blogs/${nextPage}`);
    }
  };

  const handlePreviousClick = () => {
    if (data) {
      const previousPage = currentPage - 1;
      setCurrentPage(previousPage);
      navigate(`/blogs/${previousPage}`);
    }
  };

  const handleChange = (value) => {
    console.log('Search query: ', value);
  };

  const handleSubmit = () => {
    console.log('Search query submitted');
  };

  const handleReverse = () => {
    const reversedResults = [...data.results].reverse();
    setData({ ...data, results: reversedResults });
    setIsReversed(!isReversed);
  };
  const handlelimit =()=>{
    if(limit==6)
     setLimit(12)
    if(limit==12)
      setLimit(6)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:3000/all-blogs?page=${currentPage}&limit=${limit}`
        );
        const result = await res.json();
        setData(result);
        setTotalBlogs(result.total)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, limit]);
  console.log(totalblogs)

  if (loading) {
    return (
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto animate-pulse">
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            {[...Array(8)].map((_, index) => (
              <div className="w-full" key={index}>
                <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg"></p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900">
        Our Stories
      </h2>
      <div className="flex justify-between mb-4">
        <p className="mb-2 text-lg text-gray-500">
          Comes directly from the desk of bloggers, creators and writers at Blog.
        </p>
        <div className="flex gap-2">
        <Button
          variant="secondary"
          kind="flat"
          size="small"
          colorMode="dark"
          onClick={handlelimit}
          disabled = {limit==6 && page>5}
        >
          {limit==6 ? 'See All' : 'See Less'}
        </Button>
        <Button
          variant="secondary"
          kind="flat"
          size="small"
          colorMode="dark"
          onClick={handleReverse}
        >
          {isReversed ? 'Newest' : 'Oldest'}
        </Button>
        </div>
      </div>
      
      <div className="mb-8">
        <SearchBar
          iconUrl="https://cdn-icons-png.flaticon.com/512/482/482631.png"
          placeholder="search here"
          colorConfig={colorGuide.lightComponents.searchBar}
          inputColorConfig={colorGuide.lightComponents.inputFields}
          handleSearchInput={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
      
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
                <Link
                  to={`/blogs/${currentPage}/${blog.id}`}
                  className="text-gray-900 hover:text-purple-700"
                >
                  {blog.title}
                </Link>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                {blog.description}
              </p>
              <p className="mb-3 text-sm font-normal text-gray-500">
                <span className="font-medium text-gray-900 hover:text-purple-700">
                  {blog.author}
                </span>
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
            kind="flat"
            size="big"
            colorMode="dark"
            onClick={handlePreviousClick}
          >
            Previous Page
          </Button>
        )}
        {data.results.length === limit && totalblogs<60 && (
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
