
const handleNextClick = (data, setCurrentPage, currentPage, navigate) => {
    if (data) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      navigate(`/blogs/${nextPage}`);
    }
  };

  const handlePreviousClick = (data, setCurrentPage, currentPage, navigate) => {
    if (data) {
      const previousPage = currentPage - 1;
      setCurrentPage(previousPage);
      navigate(`/blogs/${previousPage}`);
    }
  };

export {handleNextClick , handlePreviousClick}