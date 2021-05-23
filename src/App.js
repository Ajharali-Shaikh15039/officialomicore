import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import MainContent from "./components/MainContent";
import Simple from './components/Slider';
import SimpleAccordion from './components/sidefilter';
import Typography from "@material-ui/core/Typography";
import Body from './components/Body';

function App() {
  return (
    <div>
      <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <ReactBootstrap.Navbar.Brand href="#home"><img
        src="./logo_omicore.png"
        width="150"
        height="150"
        className="d-inline-block align-top"
        alt="Omicore Art Gallery"
      /></ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link href="#deets" bg="dark">HOME</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#deets"fontFamily="Roboto">ABOUT US</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#deets">PRODUCT</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2} href="#memes">CONTACT US</ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
      <MainContent />
      <Simple/>
      <SimpleAccordion/>
      {/* <Body/> */}
  
    </div>
  );
}

export default App;