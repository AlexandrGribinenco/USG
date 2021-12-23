import React from "react";
import classes from "./Home.module.css"
import useTranslation from "../../customHooks/translations";
import {NavLink} from "react-router-dom";

function Home(props) {
    const translation = useTranslation();

    return (
        <div>
            <div className={classes.home}>
                {/*<p>{translation.homePara}</p>*/}
                {/*<p className={classes.text}>USG SECURITY GROUP</p>*/}
                <div className={classes.main}>
                    <div>
                        <p className={classes.text}>USG SECURITY GROUP</p>
                        <p className={classes.description}>Providing Specialist Support to Your Organisation</p>
                        <div className={classes.mainSevice}>
                            <img src="image/home/arrow.png" alt=""/>
                            <NavLink className={classes.service} to="/service"> Servicii noastre</NavLink>
                        </div>
                    </div>
                    <img src="image/home/logo.png" alt="" className={classes.homeLogo}/>
                </div>

            </div>
            <p className={classes.copyRight}>© 2023 USG SECURITY GROUP</p>

        </div>
    );
}

export default Home;
