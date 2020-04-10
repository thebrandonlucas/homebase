import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

function App() {
  return (
    <div id="bootstrap-overrides" className="App">
      <header className="App-header">
        <div className="nav-container">
          <Navbar expand="lg">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Nav className="mr-auto">
              <Nav.Link href="#aboutme">About Me</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="outline-success">hello</Button>
      </header>
    </div >
  );
}

export default App;
