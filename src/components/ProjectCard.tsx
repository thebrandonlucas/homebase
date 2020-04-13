import React, { useEffect, useState } from 'react';


function ProjectCard(props: any) {
    return (
        <div className="card text-body" style={{ width: '20rem', marginBottom: 30 }}>
            <img className="card-img img-card-top w-100 img-responsive" src={props.imgSrc} alt={props.imgAltText} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text text-left">{props.description}</p>
                <a href={props.link} className="btn btn-primary">View</a>
            </div>
        </div>
    );
}

export default ProjectCard;