import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

import AboutPage from 'components/AboutPage'
import ProjectsPage from 'components/ProjectsPage'

function App() {
  const [activeClass, setActiveClass] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navBackgroundClass = '';
      if (window.scrollY > 100) {
        navBackgroundClass = 'navbar-container-background';
      }
      setActiveClass(navBackgroundClass);
    });
  })

  return (
    <div id="bootstrap-overrides" className="App">
      {/* <header className="App-header"> */}

      <div className="homepage">
        <div className={activeClass + " navbar-container fixed-top"}>
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="navbar">
              <Nav className="mr-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-title">
          <div>
            <h1 className="title">Brandon Lucas</h1>
            <h3 className="subtitle">Full-Stack Web Development, Blockchain, Machine Learning</h3>
          </div>
        </div>
      </div>


      {/* <div className="min-vh-navbar"></div> */}
      <AboutPage bgColor='rgb(16, 196, 112)' />
      <ProjectsPage img='images/IMG_2204.JPG' />
      {/* </header> */}

    </div >
  );
}

export default App;