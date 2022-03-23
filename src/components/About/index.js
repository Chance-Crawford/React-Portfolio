import React from "react";
import avatar from "../../assets/images/my_picture.jpg"

function About(){

    return(
        <article className="p-5 fill-section">
            <div className="profile-contain">
                <h2 className="sub-font text-center about-header">About Me</h2>
                <img src={avatar} alt="profile picture" className="w-100 profile-img mt-3"/>
            </div>
            <div className="mt-3">
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore blanditiis optio cum cumque quod suscipit neque quibusdam accusamus! Molestiae quae et sapiente voluptatem odio impedit repudiandae rerum aspernatur, asperiores doloremque.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quod laudantium laboriosam id praesentium voluptates ipsum perferendis corporis explicabo magni voluptatem consequuntur tempore beatae maiores qui recusandae, dolor architecto! Ipsum?
                </p>
            </div>
            
        </article>
    );
}

export default About;