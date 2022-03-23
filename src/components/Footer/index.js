import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons"

function Footer(){

    return(
        <footer>
            <div className="d-flex justify-content-center flex-wrap main-color p-4">
                <a href="https://www.linkedin.com/in/chance-crawford-4898a4222/" target="_blank" className="icons text-light">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/Chance-Crawford?tab=repositories" target="_blank" className="icons icon-space text-light">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://stackoverflow.com/users/14524050/chance" target="_blank" className="icons icon-space text-light">
                    <FontAwesomeIcon icon={faStackOverflow} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;