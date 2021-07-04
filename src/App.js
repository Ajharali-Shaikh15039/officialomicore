import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import MainContent from "./components/MainContent";
import Simple from './components/Slider';
import SimpleAccordion from './components/sidefilter';
import Productreview from './components/Productreview';
import Aboutus from './components/Aboutus';
import { Link, Route, Router, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <ReactBootstrap.Navbar.Brand href="#home">
        <Link to ="/"><img
        src="./logo_omicore.png"
        width="150"
        height="150"
        className="d-inline-block align-top"
        alt="Omicore Art Gallery"
      /></Link></ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link eventKey={2} bg="dark"><Link className="nav-link" to ="/home">HOME</Link></ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2}><Link className="nav-link" to ="/product">PRODUCT</Link></ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2} fontFamily="Roboto"><Link className="nav-link" to ="/aboutus">ABOUT US</Link></ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2}><Link className="nav-link" to ="/contactus">CONTACT US</Link></ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
      
      {/* <MainContent />
      <Simple/>
      <SimpleAccordion/>
      <Productreview/>
      <Aboutus/> */}
      <Route exact path="/"><MainContent />
      <Simple/>
      <SimpleAccordion/>
      <Productreview/>
      <Aboutus/></Route>
      <Route exact path="/home"><MainContent />
      <Simple/>
      <SimpleAccordion/>
      <Productreview/>
      <Aboutus/></Route>
      <Route exact path="/aboutus">
      <Productreview/>
      <Aboutus/></Route>
      <Route exact path="/product">
      <Simple/>
      <SimpleAccordion/>
      <Productreview/>
      <Aboutus/></Route>
      <Route exact path="/contactus">
      <Aboutus/></Route>


    </div>
  );
}

export default App;