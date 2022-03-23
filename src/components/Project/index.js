import React from "react";

// destructure the props obj to get the project
// object passed in from Portfolio.
function Project({ projectObj }){
    // destructure the properties from the object passed in
    const { title, demo, repo, imgLink } = projectObj

    return(
        <article className="w-40 project-contain">
            <div>
                <img className="w-100 project-img" src={imgLink} alt={title} />
            </div>
            <div>
                <h2 className="text-center mt-2">{title}</h2>
            </div>
            <div className="btn-container mb-3">
                <a href={demo} target="_blank"><button className="btn text project-btn m-0">Demo</button></a>
                <a href={repo} target="_blank"><button className="btn text project-btn">Code</button></a>
            </div>
        </article>
    );
}

export default Project;