import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

function App() {
  return (
    <div id="bootstrap-overrides" className="App">
      <header className="App-header">
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-80">
          <div className="background-container background-container-content">
            <h1 className="title">Brandon Lucas</h1><br />
            <h3 className="subtitle">Full-stack Web Development, Blockchain, Machine Learning</h3>
          </div>
        </div>
        <div className="background-container sticky">
          <Navbar expand="lg">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Nav className="mr-auto">
              <Nav.Link href="#aboutme">About Me</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
            </Nav>
          </Navbar>
        </div>
      </header>
    </div >
  );
}

export default App;
