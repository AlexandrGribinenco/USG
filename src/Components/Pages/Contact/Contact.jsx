import React from "react";
import classes from "./Contact.module.css"

function Contact() {
    return (
        <div className={classes.contactMain}>
            <p className={classes.contactName}>Contact.</p>
            <div className={classes.mainContent}>
                <div className={classes.logInfo}>
                    <img src="image/Contact/logo.png" alt=""/>
                    <div className={classes.contactInfo}>
                        500 Terry Francois Street
                        San Francisco, CA 94158
                        info@mysite.com
                        <div> Tel: 123-456-7890</div>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7924.120981977543!2d28.8540581915681!3d46.984403525925515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9794cc7917173%3A0x32e349a5492c31e8!2sMcDonald&#39;s!5e0!3m2!1sru!2s!4v1638556904243!5m2!1sru!2s"
                    width="829" height="631" allowFullScreen="" loading="lazy"></iframe>
            </div>

        </div>
    );
}

export default Contact;
