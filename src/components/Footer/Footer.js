import React from "react";
import {
    Box,

} from "./FooterStyles";

import "./Footer.css";
import { faGithub, faLinkedin } from  "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



const Footer = () => {
    return (
        <Box>
            <h1 style={{
                color: "gray",
                textAlign: "center",
                marginTop: "-50px"
            }}>
                Designed by Nnamdi
            </h1>
            <div className="rounded-social-buttons">
                <a className="social-button github" href="https://github.com/shagariboy/" aria-label="Github">
                <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className="social-button linkedin" href="https://linkedin.com/in/nnamdi-ezeh-2658031ba"
                    aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                <a className="social-button mail" href="mailto:nnamdiezeh0@gmail.com" aria-label="Gmail">
                <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </Box>
    );
};
export default Footer;