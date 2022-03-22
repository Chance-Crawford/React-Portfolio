import React from "react";

function Header(){

    return(
        <header className="p-4 bg-danger">
            <div className="d-flex justify-content-between align-items-center w-100 p-4">
                <div className="">
                    <h1 className="m-0">Chance Crawford</h1>
                </div>
                <ul className="m-0 nav-ul">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Resume</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;