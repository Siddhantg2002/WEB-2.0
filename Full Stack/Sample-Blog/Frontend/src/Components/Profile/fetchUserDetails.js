import Cookies from 'js-cookie';

const fetchUserDetails = async (setUsers, setError,setLoading) => {
    try {
      const token = Cookies.get("jwt");
      const response = await fetch("http://localhost:3000/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setUsers(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  export default fetchUserDetails