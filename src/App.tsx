import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

import AboutPage from 'pages/AboutPage'
import ProjectsPage from 'pages/ProjectsPage'
import ExperiencePage from 'pages/ExperiencePage'
import BlogPage from 'pages/BlogPage'

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
      <div className="homepage">
        <div className={activeClass + " navbar-container fixed-top"}>
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="navbar">
              <Nav className="mr-auto">
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
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
      <ProjectsPage bgColor='rgb(16, 196, 112)' />
      <ExperiencePage bgColor='rgb(0, 89, 255)' />
      <BlogPage bgColor='rgb(255, 174, 0)' />
      <AboutPage />
    </div >
  );
}

export default App;