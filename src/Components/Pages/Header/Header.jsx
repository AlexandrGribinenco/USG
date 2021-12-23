import React from "react";
import classes from "./Header.module.css"
import Navbar from "../Navbar/Navbar";


function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.logo}>USG SECURITY GROUP </div>
            <Navbar/>
        </div>
    );
}

export default Header;
