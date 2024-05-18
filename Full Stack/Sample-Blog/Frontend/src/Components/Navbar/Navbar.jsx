import React from "react";
import style from "./styles.module.css"
import { Link } from "react-router-dom";
import { Button } from '@cred/neopop-web/lib/components';

const Navbar = () => {
  return (
    <>
      <header className={style.Navbar}>
      <div className={style.div}>
        <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="dark"
            showArrow
            onClick={() => {
              navigate('/blogs')
            }}
        >
            Login
        </Button>
        </div>
        <Link to={"/"}><img src="../../public/Logo.png" alt="Logo" /></Link>
      </header>
    </>
  );
};

export default Navbar;
