import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import AboutPage from 'pages/AboutPage';
import ProjectsPage from 'pages/ProjectsPage';
import ExperiencePage from 'pages/ExperiencePage';
import BlogPage from 'pages/BlogPage';

function App() {
  const [activeClass, setActiveClass] = useState('');
  // const [navShowing, setNavShowing] = useState('down')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navBackgroundClass = '';
      if (window.scrollY > 100) {
        navBackgroundClass = 'navbar-container-background';
      }
      setActiveClass(navBackgroundClass);
    });
  });

  return (
    <div id="bootstrap-overrides" className="App">
      <div className="homepage">
        <Navbar expand="lg" className={activeClass + ' navbar-container fixed-top justify-content-around'}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbar">
            <Nav className="justify-content-around w-100">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div id="home" className="d-flex flex-column align-items-center justify-content-center min-vh-title">
          <div>
            <h1 className="title">Brandon Lucas</h1>
            <h3 className="subtitle">Full-Stack Web/Mobile Apps, Bitcoin, Machine Learning</h3>
          </div>
        </div>
      </div>
      <ProjectsPage bgColor="rgb(16, 196, 112)" />
      <BlogPage bgColor="rgba(0, 0, 0, 0.3)" />
      <AboutPage bgColor="rgb(39, 182, 218)" />
    </div>
  );
}

export default App;
