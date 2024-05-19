import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AllBlogsContent = () => {
  const [blogs, setBlogs] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/all-blogs/${id}`);
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!blogs) {
    return <p>Loading...</p>;
  }
  const {title , body, image, date ,author} = blogs
  return (
    <article itemid="#" itemscope itemtype="http://schema.org/BlogPosting">
      <div class="grid items-center grid-cols-1 md:grid-cols-2">
        <div class="order-2 h-64 md:order-1 md:h-full">
          <img
            src={image}
            class="object-cover w-full h-full bg-center"
            alt="img"
          />
        </div>
        <div class="order-1 w-full px-4 py-12 mx-auto text-left md:w-3/4 md:py-48 md:order-2 md:px-0">
          <p class="mb-3 text-gray-500">
            <time
              itemprop="datePublished dateModified"
              datetime="2010-08-07 11:11:03-0400"
              pubdate
            >
              {date}
            </time>
          </p>
          <h1
            class="mb-5 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl"
            itemprop="headline"
          >
           {title}
          </h1>
          <a class="flex items-center text-gray-700" href="#">
            <div class="ml-2">
              <p class="text-sm font-semibold text-gray-800">{author}</p>
            </div>
          </a>
        </div>
      </div>

      <div class=" flex justify-center px-40 py-20 mx-auto prose">
        <p>
        {body}
        </p>
      </div>
    </article>
  );
};

export default AllBlogsContent;
