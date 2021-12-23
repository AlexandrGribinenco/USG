import React from "react";
import classes from "./Service.module.css";

function Service() {

    return (
        <div className={classes.main}>
            <p className={classes.serviciiNoastre}>Serviciile noastre</p>
            <div className={classes.pazaTech}>
                <div className={classes.categoryName}>Paza tehnica</div>
                <div className={classes.techDescription}>Iorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod.
                    <p>
                        Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in. amet, consectetur</p>
                </div>
            </div>
            <div className={classes.pazaCorp}>
                <div className={classes.categoryName}>Paza de corp</div>
                <div className={classes.corpDescription}>Iorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod.
                </div>
            </div>
            <div className={classes.incasare}>
                <div className={classes.categoryName}>Incasare (colectare)</div>
                <ul className={classes.incasareItems}>
                    <li>IT & Telecom</li>
                    <li>Communications & Entertainment</li>
                    <li>Marketing & Comunications</li>
                    <li>Financial & Professional Services</li>
                    <li>Architecture</li>
                    <li>Design & Engineering</li>
                    <li>Energy</li>
                    <li>Resources & Infrastructure</li>
                </ul>
            </div>
            <div className={classes.footerBlock}>
                <img src="image/service/logo.png" alt=""/>
                <p className={classes.copyRight}>© 2023 USG SECURITY GROUP</p>
            </div>
        </div>
    );
}

export default Service;
