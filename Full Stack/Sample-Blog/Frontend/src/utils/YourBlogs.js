import Cookies from "js-cookie";

const handleReverse = (data, setData, setIsReversed, isReversed) => {
  setData([...data].reverse()); // Create a copy of blogs and reverse it
  setIsReversed(!isReversed); // Toggle the state
};
const onDelete = async (id, setData, data, setSnackbarOpen) => {
  if (window.confirm("Are you sure you want to delete this blog?")) {
    const token = Cookies.get("jwt");

    try {
      const response = await fetch(
        `http://localhost:3000/user-blogs-content/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        setData(data.filter((blog) => blog._id !== id));
        setSnackbarOpen(true); // Open the Snackbar on successful deletion
      } else {
        console.error("Failed to delete the blog");
      }
    } catch (err) {
      console.error("Failed to delete the blog", err);
    }
  }
};

export { handleReverse, onDelete };
