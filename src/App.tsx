import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

function App() {
  const [activeClass, setActiveClass] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navBackgroundClass = '';
      if (window.scrollY > 100) {
        navBackgroundClass = 'background-container';
      }
      setActiveClass(navBackgroundClass);
    });
  })

  return (
    <div id="bootstrap-overrides" className="App">
      <header className="App-header">
        <div className={activeClass + " sticky-top"}>
          <Navbar expand="lg">
            <Nav className="mr-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-title">
          <div className="background-container-content">
            <h1 className="title">Brandon Lucas</h1>
            <h3 className="subtitle">Full-Stack Web Development, Blockchain, Machine Learning</h3>
          </div>
        </div>

        <div className="min-vh-navbar"></div>

        <div id="about" className="page-container fullscreen">
          <h1>About me</h1>
          <h1>About me</h1>
          <h1>About me</h1>
          <h1>About me</h1>

          v<h1>About me</h1>
          <h1>About me</h1>
          <h1>About me</h1>
        </div>
        <div>
          <h1>About me</h1>
          <h1>About me</h1>
          <h1>About me</h1>
          <h1>About me</h1>

          v<h1>About me</h1>
          <h1>About me</h1>
          <h1>About me</h1>
        </div>
      </header>

    </div >
  );
}

export default App;