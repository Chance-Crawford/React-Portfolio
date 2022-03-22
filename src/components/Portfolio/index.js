import {React, useState} from "react";
import Project from "../Project";

// holds all the projects
function Portfolio(){

    // each project's info
    const [projects] = useState([
        {
            title: "TechBlogsOverload",
            demo: "https://immense-coast-31920.herokuapp.com/",
            repo: "https://github.com/Chance-Crawford/TechBlogsOverload",
            imgLink: "../../src/assets/images/techblogsoverload.PNG"
        },
        {
            title: "Ultimate Text Editor",
            demo: "https://chance-crawford.github.io/UltimateTextEditor/",
            repo: "https://github.com/Chance-Crawford/UltimateTextEditor",
            imgLink: "../../src/assets/images/ultimatetexteditor.PNG"
        },
        {
            title: "Penguin Planner - Group Project",
            demo: "https://penguin-planner.herokuapp.com/",
            repo: "https://github.com/stuart-rickard/gp-penguin",
            imgLink: "../../src/assets/images/penguin-planner.PNG"
        },
        {
            title: "WeatherTracker",
            demo: "https://chance-crawford.github.io/WeatherTracker/",
            repo: "https://github.com/Chance-Crawford/WeatherTracker",
            imgLink: "../../src/assets/images/weathertracker.PNG"
        },
        {
            title: "NameGame",
            demo: "https://chance-crawford.github.io/NameGame/",
            repo: "https://github.com/Chance-Crawford/NameGame",
            imgLink: "../../src/assets/images/namegame.PNG"
        },
        {
            title: "Note Taker Express",
            demo: "https://damp-dawn-91357.herokuapp.com/",
            repo: "https://github.com/Chance-Crawford/Note-Taker-Express",
            imgLink: "../../src/assets/images/notetaker.PNG"
        }
    ]);

    return(
        <section>
            <div className="p-5">
                <h2 className="sub-font">Projects</h2>
                <div>
                    {/* creating a project component from each
                    object in the array above. passing in each object as
                    props with projectObj. key is there as a unique
                    identifier for react, needed for every new element
                    created from a map function */}
                    {projects.map( (project) =>(
                        <Project projectObj={project} key={project.title}></Project>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;