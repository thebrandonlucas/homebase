import React, { useEffect, useState } from 'react';
import ProjectCard from 'components/ProjectCard';
import blucoinImg from '../images/projects/blucoin-mine.png';
import bestmeImg from '../images/projects/thebestme.jpeg';
import tesImg from '../images/projects/tes-puppy.png';
import covidAppImg from '../images/projects/covid-19_app/covid_cropped.jpg';
import combatDeepfakesImg from '../images/projects/combat-deepfakes.png';
import lcaImg from '../images/projects/BamaTheatre.jpg';
import cfaImg from '../images/projects/cfa_convo_dash.jpg';
import memlabImg from '../images/projects/scatterplot_mindcontrol.png';
import fieldedgeImg from '../images/projects/narsil-word-logo.png';

const data = {
  blucoin: {
    imgAltText: 'BLUCoin',
    link: 'https://github.com/thebrandonlucas/BLUCoin',
    title: 'BLUCoin',
    description:
      'A minimal blockchain that implements proof-of-work, digital signatures, wallets, and consensus between nodes. Based on Bitcoin!',
  },
  bestme: {
    imgAltText: 'TheBestMe',
    link: 'https://github.com/thebrandonlucas/thebestme',
    title: 'TheBestMe',
    description: 'A mental health app that visualizes your mood based on habit tracking and CBT journaling',
  },
  tes: {
    imgAltText: 'TES Verify',
    link: 'https://temporaryemergencyservices.github.io/index.html',
    title: 'TES Verify',
    description:
      'An app built to assist charity Temporary Emergency Services with tracking volunteer hours using simplified QR-code based clock-ins',
  },
  covid19: {
    imgAltText: 'COVID-19 Tracker App',
    link: 'https://github.com/thebrandonlucas/covid-19',
    title: 'COVID-19 Tracker Mobile App',
    description:
      'This app uses the official Johns Hopkins CSSE COVID-19 data to display active, recovered, and total confirmed cases on a world map and shows totals on a dashboard. Built with React Native.',
  },
  combatDeepfakes: {
    imgAltText: 'Combat Deepfakes',
    link: 'https://thebrandonlucas.github.io/combat-deepfakes/',
    title: 'Combat Deepfakes',
    description:
      'A web app that uses the Ethereum blockchain for timestamping videos to combat the spread of deepfake misinformation. Frontend built with React, smart contracts written in Solidity, and MetaMask used as the Ethereum wallet.',
  },
  lca: {
    imgAltText: 'Lights Camera Alabama',
    link: 'https://www.lightscameraalabama.com/',
    title: 'Lights Camera Alabama',
    description:
      'A website showcasing historical films about Tuscaloosa and Alabama and local heroes, with search functionality and a tagging system to filter through videos. Built with React.',
  },
  cfa: {
    imgAltText: 'Jarvis - Chick-fil-A Conversational Agent',
    link: 'https://drive.google.com/open?id=1iOkTGdY2ka7QnQ4_GZDNcc-yPCkSAqGK',
    title: 'Jarvis - Chick-fil-A Conversational Agent',
    description:
      'Prototyped a Conversational AI at Chick-fil-A to generate dynamic responses to user queries via text or speech, responding with realtime data about topics like sales, the weather forecast, or employee birthdays. Affectionately refered to as Jarvis.',
  },
  memlab: {
    imgAltText: 'Mindcontrol Scatterplot Feature Addition',
    link: 'https://github.com/thebrandonlucas/mindcontrol',
    title: 'Memory, Aging, and Cognitive Control Research Lab',
    description:
      'Built a scatterplot feature addition in d3.js to help identify outliers in MRI volume data. Worked in the Memory, Aging, and Cognitive Control Research Lab.',
  },
  fieldedge: {
    imgAltText: 'FieldEdge Schedule Backup',
    link: 'https://narsil-technologies.github.io/fieldedge_schedule_backup.html',
    title: 'FieldEdge Schedule Backup',
    description:
      "A web-scraper used to automatically create a backup of a company's daily schedule from the FieldEdge dispatching website. Built with Python Selenium.",
  },
};

function ProjectsPage(props: any) {
  return (
    <div id="projects" className="page-container fullscreen" style={{ backgroundColor: props.bgColor }}>
      <h1>Projects</h1>
      <div className="container">
        <div className="row justify-content-between">
          <ProjectCard
            imgSrc={blucoinImg}
            imgAltText={data.blucoin.imgAltText}
            link={data.blucoin.link}
            title={data.blucoin.title}
            description={data.blucoin.description}
          />
          <ProjectCard
            imgSrc={bestmeImg}
            imgAltText={data.bestme.imgAltText}
            link={data.bestme.link}
            title={data.bestme.title}
            description={data.bestme.description}
          />
          <ProjectCard
            imgSrc={tesImg}
            imgAltText={data.tes.imgAltText}
            link={data.tes.link}
            title={data.tes.title}
            description={data.tes.description}
          />
        </div>
        <div className="row justify-content-between">
          <ProjectCard
            imgSrc={covidAppImg}
            imgAltText={data.covid19.imgAltText}
            link={data.covid19.link}
            title={data.covid19.title}
            description={data.covid19.description}
          />
          <ProjectCard
            imgSrc={combatDeepfakesImg}
            imgAltText={data.combatDeepfakes.imgAltText}
            link={data.combatDeepfakes.link}
            title={data.combatDeepfakes.title}
            description={data.combatDeepfakes.description}
          />
          <ProjectCard
            imgSrc={lcaImg}
            imgAltText={data.lca.imgAltText}
            link={data.lca.link}
            title={data.lca.title}
            description={data.lca.description}
          />
        </div>
        <div className="row justify-content-between">
          <ProjectCard
            imgSrc={cfaImg}
            imgAltText={data.cfa.imgAltText}
            link={data.cfa.link}
            title={data.cfa.title}
            description={data.cfa.description}
          />
          <ProjectCard
            imgSrc={memlabImg}
            imgAltText={data.memlab.imgAltText}
            link={data.memlab.link}
            title={data.memlab.title}
            description={data.memlab.description}
          />
          <ProjectCard
            imgSrc={fieldedgeImg}
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
