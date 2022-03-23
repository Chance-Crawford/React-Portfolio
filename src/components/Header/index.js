import React from "react";
import Nav from "../Nav";

function Header({ currentTab, setCurrentTab }){


    return(
        <header className="p-4 main-color">
            <div className="d-flex justify-content-between align-items-center flex-wrap w-100 p-4 header-section">
                <div className="">
                    <a href="/" className="h1-a"><h1 className="m-0 text-light">Chance Crawford</h1></a>
                </div>
                <Nav
                currentTab = {currentTab}
                setCurrentTab = {setCurrentTab}></Nav>
            </div>
        </header>
    );
}

export default Header;