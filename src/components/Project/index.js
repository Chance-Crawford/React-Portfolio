import React from "react";

// destructure the props obj to get the project
// object passed in from Portfolio.
function Project({ projectObj }){
    // destructure the properties from the object passed in
    const { title, demo, repo, imgLink } = projectObj

    return(
        <div>
            <img src={require(imgLink).default} alt={title} />
        </div>
    );
}

export default Project;