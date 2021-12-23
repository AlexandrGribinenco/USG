import React from "react";
import classes from "./About.module.css"
import {useParams} from "react-router-dom";

function About() {

    return (
        <div className={classes.main}>
            <p className={classes.aboutName}>About.</p>
            <div className={classes.aboutInfo}>
                <div className={classes.aboutInfoItem}>Since our inception, <span> Ernst &
                    Goldschmidt</span> has been totally
                    focused on building a strategic,
                    quality search practice.
                </div>
                <div className={classes.aboutInfoDescription}>
                    <p className={classes.description1}>Iorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod.</p>
                    <p>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>

            </div>
            <div className={classes.footerBlock}>
                <img src="image/about/logo.png" alt=""/>
                <p className={classes.copyRight}>© 2023 USG SECURITY GROUP</p>
            </div>
        </div>
    );
}

export default About;
