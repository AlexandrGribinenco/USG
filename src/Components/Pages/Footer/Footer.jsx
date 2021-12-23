import React from "react";
import  "./Footer.css"
import {useLocation, useParams} from "react-router-dom";

function Footer() {
    const loc = useLocation();


    return (

        <div className={loc.pathname === "/service" ? "footerSercive" : loc.pathname === "/about" ? "footerAbout" : "footer"}>
                <a href="#" className="fb">
                    <img src="image/home/facebook.png" alt=""/>
                </a>
                <a href="#" className={loc.pathname === "/service" ? "emailService" : loc.pathname === "/about" ? "emailAbout" : "email"}>
                    <img src="image/home/email.png" alt=""/>
                </a>
        </div>
    );
}

export default Footer;
