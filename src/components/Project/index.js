import React from "react";

// destructure the props obj to get the project
// object passed in from Portfolio.
function Project({ projectObj }){
    // destructure the properties from the object passed in
    const { title, demo, repo, imgLink } = projectObj

    return(
        <h2>{title}</h2>
    );
}

export default Project;