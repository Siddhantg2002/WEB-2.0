import React from "react";
import style from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@cred/neopop-web/lib/components";
import { useAuth } from "../../Global/Auth/AuthContext";
import { useAdmin } from "@/Global/Admin/User";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const { data, loading, error } = useAdmin();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <header className={style.Navbar}>
      <div className={style.div}>
        {isAuthenticated ? (
          <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="dark"
            showArrow
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="dark"
            showArrow
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        )}
      </div>
      <Link to={"/"}>
        <img src={"../../../images/home/Logo.png"} alt="Logo" />
      </Link>
      <div className={style.user}>
        {isAuthenticated && data &&
          data.map((user, index) => (
            <div key={index}>
              <Link to={'/account/profile'}>
              <Avatar
                alt="User Pic"
                src={`../../../images/profiles/${user.image}`}
              />
              </Link>
              <div className={style.name}>
                <h1>{`Hi, ${user.username}`}</h1>
              </div>
            </div>
          ))}
      </div>
    </header>
  );
};

export default Navbar;
