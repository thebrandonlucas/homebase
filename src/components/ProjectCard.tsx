import React, { useEffect, useState } from 'react';


function ProjectCard(props: any) {
    return (
        <a href={props.link} className="card text-body col-md-3 col-lg-3 flex-grow-1 mw-100 card-link">
            <div className="">
            <img className="card-img img-card-top w-100" src={props.imgSrc} alt={props.imgAltText} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text text-left">{props.description}</p>
            </div>
            </div>
        </a>
    );
}

export default ProjectCard;