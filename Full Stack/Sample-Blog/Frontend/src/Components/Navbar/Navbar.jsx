import React from "react";
import style from "./styles.module.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className={style.Navbar}>
        <Link to={"/S"}><img src="../../images/Logo.png" alt="Logo" /></Link>
      </header>
    </>
  );
};

export default Navbar;
