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
  // const [navShowing, setNavShowing] = useState('down')

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
        <Navbar expand="lg" className={activeClass + " navbar-container fixed-top "}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbar">
            <Nav className="justify-content-around w-100 align-self-center">
              <Nav.Item>
              <Nav.Link href="#projects">Projects</Nav.Link>

              </Nav.Item>
              <Nav.Item>
              <Nav.Link href="#about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link href="#blog">Blog</Nav.Link>

              </Nav.Item>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-title">
          <div>
            <h1 className="title">Brandon Lucas</h1>
            <h3 className="subtitle">Full-Stack Web/Mobile Apps, Blockchain, Machine Learning</h3>
          </div>
        </div>
      </div>
      <ProjectsPage bgColor='rgb(16, 196, 112)' />
      {/* <ExperiencePage bgColor='rgb(0, 89, 255)' /> */}
      <AboutPage />
      <BlogPage bgColor='rgb(255, 174, 0)' />
    </div >
  );
}

export default App;