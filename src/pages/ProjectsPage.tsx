import React, { useEffect, useState } from 'react';
import ProjectCard from 'components/ProjectCard'

function ProjectsPage(props: any) {
    return (
        <div id="projects" className="page-container fullscreen" style={{ backgroundColor: props.bgColor }}>
            <h1>Projects</h1>
            <p>What have I been up to?</p>
            <div className="container">
                <div className="row justify-content-around">
                    <ProjectCard imgSrc="../images/covid-19_app/IMG_4535.jpg" imgAltText="COVID-19 Tracker App" link="#" />
                    <ProjectCard imgSrc="" imgAltText="COVID-19 Tracker App" link="#" />
                    <ProjectCard imgSrc="" imgAltText="COVID-19 Tracker App" link="#" />
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;