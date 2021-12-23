import React from "react";
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import LanguageHandler from "../../LanguageHandler";




function Navbar(props) {
    const setActive = ({isActive}) => (isActive ? classes.active : classes.inActive);
    return (
        <div className={classes.main}>
            <nav className={classes.Navbar}>
                <div className={classes.navItem}>
                    <NavLink to="/" className={setActive}> Acasă</NavLink>
                </div>
                <div className={`${classes.navItem} ${classes.active}`}>
                    <NavLink to="/service" className={setActive}> Servicii</NavLink>
                </div>
                <div className={classes.navItem}>
                    <NavLink to="/about" className={setActive}> Despre noi</NavLink>
                </div>
                <div className={classes.navItem}>
                    <NavLink to="/contact" className={setActive}> Contacte</NavLink>
                </div>
            </nav>
            {/*<div>
                <LanguageHandler />
            </div> */}
        </div>


    );
}

export default Navbar;
