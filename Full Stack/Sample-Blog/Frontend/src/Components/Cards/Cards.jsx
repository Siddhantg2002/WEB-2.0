import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3000/latest-blogs");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after data fetch is complete
      }
    };

    getData();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <div className="flex p-5 justify-center">
        <h1 className="text-2xl font-bold text-center">Latest Stories</h1>
      </div>
      <div className="flex justify-center mx-auto md:flex-nowrap p-12">
        {loading ? (
          <p>Loading...</p> // Display loading message while data is being fetched
        ) : (
          data.length > 0 && (
            <>
              <Link to={`/blogs/blog/${data[0].id}`}>
                <div className="flex w-full">
                  <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                    <img
                      className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                      src={data[0].image}
                      alt="blog"
                    />
                    <div className="px-6 py-8">
                      <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                        {data[0].title}
                      </h4>
                      <p className="mt-4 text-base font-normal text-gray-500 leading-relaxed">
                        {data[0].description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={`/blogs/blog/${data[1].id}`}>
                <div className="flex w-full">
                  <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                    <img
                      className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                      src={data[1].image}
                      alt="blog"
                    />
                    <div className="px-6 py-8">
                      <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                        {data[1].title}
                      </h4>
                      <p className="mt-4 text-base font-normal text-gray-500 leading-relaxed">
                        {data[1].description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={`/blogs/blog/${data[2].id}`}>
                <div className="flex w-full">
                  <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                    <img
                      className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                      src={data[2].image}
                      alt="blog"
                    />
                    <div className="px-6 py-8">
                      <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                        {data[2].title}
                      </h4>
                      <p className="mt-4 text-base font-normal text-gray-500 leading-relaxed">
                        {data[2].description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={`/blogs/blog/${data[3].id}`}>
                <div className="flex w-full">
                  <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                    <img
                      className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                      src={data[3].image}
                      alt="blog"
                    />
                    <div className="px-6 py-8">
                      <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                        {data[3].title}
                      </h4>
                      <p className="mt-4 text-base font-normal text-gray-500 leading-relaxed">
                        {data[3].description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          )
        )}
      </div>
    </>
  );
};

export default Cards;
