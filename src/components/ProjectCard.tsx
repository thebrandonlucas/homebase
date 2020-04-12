import React, { useEffect, useState } from 'react';


function ProjectCard(props: any) {
    return (
        <div className="card col-md-3" style={{ width: 300, marginBottom: 30 }}>
            <img className="img-card-top" src={props.imgSrc} alt={props.imgAltText} />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href={props.link} className="btn btn-primary">Go somewhere</a>
            </div>>
        </div>
    );
}

export default ProjectCard;