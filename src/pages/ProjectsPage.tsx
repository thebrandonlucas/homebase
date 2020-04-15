import React, { useEffect, useState } from 'react';
import ProjectCard from 'components/ProjectCard'
import covid_app_img from '../images/projects/covid-19_app/covid_cropped.jpg'
import combat_deepfakes_img from '../images/projects/combat-deepfakes.png'
import lca_img from '../images/projects/BamaTheatre.jpg'
import cfa_img from '../images/projects/cfa_convo_dash.jpg'
import memlab_img from '../images/projects/scatterplot_mindcontrol.png'
import fieldedge_img from '../images/projects/narsil-word-logo.png'

const data = {
    covid19: {
        imgAltText: "COVID-19 Tracker App", 
        link: "https://github.com/thebrandonlucas/covid-19", 
        title: "COVID-19 Tracker Mobile App", 
        description: "This app uses the official Johns Hopkins CSSE COVID-19 data to display active, recovered, and total confirmed cases on a world map and shows totals on a dashboard. Built with React Native.", 
    }, 
    combat_deepfakes: {
        imgAltText: "Combat Deepfakes", 
        link: "https://thebrandonlucas.github.io/combat-deepfakes/", 
        title: "Combat Deepfakes",
        description: "A web app that uses the Ethereum blockchain for timestamping videos to combat the spread of deepfake misinformation. Frontend built with React, smart contracts written in Solidity, and MetaMask used as the Ethereum wallet.", 
    }, 
    lca: {
        imgAltText: "Lights Camera Alabama", 
        link: "https://www.lightscameraalabama.com/", 
        title: "Lights Camera Alabama",
        description: "A website showcasing historical films about Tuscaloosa and Alabama and local heroes, with search functionality and a tagging system to filter through videos. Built with React.", 
    }, 
    cfa: {
        imgAltText: "Jarvis - Chick-fil-A Conversational Agent", 
        link: "https://drive.google.com/open?id=1iOkTGdY2ka7QnQ4_GZDNcc-yPCkSAqGK", 
        title: "Jarvis - Chick-fil-A Conversational Agent",
        description: "Prototyped a Conversational AI at Chick-fil-A to generate dynamic responses to user queries via text or speech, responding with realtime data about topics like sales, the weather forecast, or employee birthdays. Affectionately refered to as Jarvis.", 
    }, 
    memlab: {
        imgAltText: "Mindcontrol Scatterplot Feature Addition", 
        link: "https://github.com/thebrandonlucas/mindcontrol", 
        title: "Memory, Aging, and Cognitive Control Research Lab",
        description: "Built a scatterplot feature addition in d3.js to help identify outliers in MRI volume data. Worked in the Memory, Aging, and Cognitive Control Research Lab.", 
    }, 
    fieldedge: {
        imgAltText: "FieldEdge Schedule Backup", 
        link: "https://narsil-technologies.github.io/fieldedge_schedule_backup.html", 
        title: "FieldEdge Schedule Backup",
        description: "A web-scraper used to automatically create a backup of a company's daily schedule from the FieldEdge dispatching website. Built with Python Selenium.", 
    },
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
                        imgSrc={lca_img} 
                        imgAltText={data.lca.imgAltText} 
                        link={data.lca.link} 
                        title={data.lca.title}
                        description={data.lca.description} 
                    />
                </div>
                <div className="row justify-content-between">
                    <ProjectCard 
                        imgSrc={cfa_img} 
                        imgAltText={data.cfa.imgAltText} 
                        link={data.cfa.link} 
                        title={data.cfa.title}
                        description={data.cfa.description} 
                    />
                    <ProjectCard 
                        imgSrc={memlab_img} 
                        imgAltText={data.memlab.imgAltText} 
                        link={data.memlab.link} 
                        title={data.memlab.title}
                        description={data.memlab.description} 
                    />
                    <ProjectCard 
                        imgSrc={fieldedge_img} 
                        imgAltText={data.fieldedge.imgAltText} 
                        link={data.fieldedge.link} 
                        title={data.fieldedge.title}
                        description={data.fieldedge.description} 
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;