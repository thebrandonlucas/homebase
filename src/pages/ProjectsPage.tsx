import React, { useEffect, useState } from 'react';
import ProjectCard from 'components/ProjectCard'
import covid_app_img from '../images/projects/covid-19_app/covid_cropped.jpg'
import combat_deepfakes_img from '../images/projects/combat-deepfakes.png'

const data = {
    covid19: {
        // imgSrc: covid_app_img, 
        imgAltText: "COVID-19 Tracker App", 
        link: "https://github.com/thebrandonlucas/covid-19", 
        title: "COVID-19 Tracker Mobile App", 
        description: "This app uses the official Johns Hopkins CSSE COVID-19 data to display active, recovered, and total confirmed cases on a world map and shows totals on a dashboard. Built with React Native.", 
    }, 
    combat_deepfakes: {
        // imgSrc: combat_deepfakes_img, 
        imgAltText: "Combat Deepfakes", 
        link: "https://thebrandonlucas.github.io/combat-deepfakes/", 
        title: "Combat Deepfakes",
        description: "A web app that uses the Ethereum blockchain for timestamping videos to combat the spread of deepfake misinformation. Frontend built with React, smart contracts written in Solidity, and MetaMask used as the Ethereum wallet.", 
    }
}

function ProjectsPage(props: any) {
    return (
        <div id="projects" className="page-container fullscreen" style={{ backgroundColor: props.bgColor }}>
            <h1>Projects</h1>
            <div className="container">
                <div className="row justify-content-between">
                    <ProjectCard 
                        imgSrc={covid_app_img} 
                        imgAltText={data.covid19.imgAltText} 
                        link={data.covid19.link} 
                        title={data.covid19.title}
                        description={data.covid19.description} 
                    />
                    <ProjectCard 
                        imgSrc={combat_deepfakes_img} 
                        imgAltText={data.combat_deepfakes.imgAltText} 
                        link={data.combat_deepfakes.link} 
                        title={data.combat_deepfakes.title}
                        description={data.combat_deepfakes.description} 
                    />
                    <ProjectCard 
                        imgSrc={covid_app_img} 
                        imgAltText={data.covid19.imgAltText} 
                        link={data.covid19.link} 
                        title={data.covid19.title}
                        description={data.covid19.description} 
                    />
                    {/* <ProjectCard imgSrc={combat_deepfakes_img} imgAltText="Combating Deepfakes" link="#" />
                    <ProjectCard imgSrc="" imgAltText="COVID-19 Tracker App" link="#" /> */}
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;