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
            imgLink: "../../assets/images/techblogsoverload.jpg"
        },
        {
            title: "Ultimate Text Editor",
            demo: "https://chance-crawford.github.io/UltimateTextEditor/",
            repo: "https://github.com/Chance-Crawford/UltimateTextEditor",
            imgLink: "../../assets/images/ultimatetexteditor.jpg"
        },
        {
            title: "Penguin Planner - Group Project",
            demo: "https://penguin-planner.herokuapp.com/",
            repo: "https://github.com/stuart-rickard/gp-penguin",
            imgLink: "../../assets/images/penguin-planner.jpg"
        },
        {
            title: "WeatherTracker",
            demo: "https://chance-crawford.github.io/WeatherTracker/",
            repo: "https://github.com/Chance-Crawford/WeatherTracker",
            imgLink: "../../assets/images/weathertracker.jpg"
        },
        {
            title: "NameGame",
            demo: "https://chance-crawford.github.io/NameGame/",
            repo: "https://github.com/Chance-Crawford/NameGame",
            imgLink: "../../assets/images/namegame.jpg"
        },
        {
            title: "Note Taker Express",
            demo: "https://damp-dawn-91357.herokuapp.com/",
            repo: "https://github.com/Chance-Crawford/Note-Taker-Express",
            imgLink: "../../assets/images/notetaker.jpg"
        }
    ]);

    return(
        <section>
            <div className="p-5">
                <h2 className="sub-font ">Projects</h2>
                <div className="mt-5">
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