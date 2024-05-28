import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const AccountHome = () => {
  const [user, setUser] = useState(null); // Change to store the user object
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const token = Cookies.get('jwt');
        const response = await fetch('http://localhost:3000/users', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setUser(result); // Set the user object
        console.log(result)
      } catch (error) {
        setError(error.message);
      } 
    };

    fetchUserBlogs();
  }, []);

  
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {user ? (
        <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content text-6xl font-black grid place-content-center">{`Hello ${user[0].username}`}</div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-6xl font-black grid place-content-center">{`Hello ${user[0].username}`}</div>
        </div>
        <div className="diff-resizer"></div>
      </div>
      ) : (
        <div className='flex justify-center h-screen'>
        <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </>
  );
};

export default AccountHome;
