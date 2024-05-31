import React from "react";
import style from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from '@cred/neopop-web/lib/components';
import { useAuth } from '../../../Auth/AuthContext';  
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        )}
      </div>
      <Link to={"/"}>
        <img src="../../../images/home/Logo.png" alt="Logo" />
      </Link>
    </header>
  );
};

export default Navbar;
