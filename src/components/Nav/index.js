import React from "react";

function Nav({ currentTab, setCurrentTab }){

    return(
        <div>
            <ul className="m-0 nav-ul text-light">
                {/* sets the state to the current tab
                that was clicked, and then decides whether the 
                tab link should change color based on whether
                it is active or not */}
                <li onClick={() => setCurrentTab('About')} className={currentTab === 'About' && 'active-tab' || currentTab === 'Start' && 'active-tab' || ''}>About</li>
                <li onClick={() => setCurrentTab('Projects')} className={currentTab === 'Projects' && 'active-tab' || ''}>Projects</li>
                <li onClick={() => setCurrentTab('Contact')} className={currentTab === 'Contact' && 'active-tab' || ''}>Contact</li>
                <a target="_blank" href="https://drive.google.com/file/d/16QI_8GviG14RGlr46SYZhyB01HEZDJE9/view?usp=sharing" className="resume-link text-light"><li>Resume</li></a>
            </ul>
        </div>
    );
}

export default Nav;