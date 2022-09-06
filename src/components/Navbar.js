import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./cssfiles/navcss.css";
import metamask from "../images/metamask.svg"
import React, { Component } from "react";

class Collapsible extends Component {
  render() {
  return (
    
    <div>
     <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet"></link>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='trapeze'>
      <Container >
     
        <Navbar.Brand href="/"><h2>Jalals</h2></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/mint">Mint</Nav.Link>
           
            
            <Nav.Link eventKey={2} href="/attack">
              Attack
            </Nav.Link>

            <Nav.Link eventKey={2} href="/claim">
              Claim
            </Nav.Link>
            <Nav.Link eventKey={2} href="/stats">
              Stats
            </Nav.Link>
            <Nav.Link eventKey={2} href="/danger">
              Defend
            </Nav.Link>
            
            <img className="navimg" onClick={(e)=> {
            e.preventDefault() 
            this.props.loadBlockchain() 
          } }
              src={metamask}
              width="40"
              height="40"
              alt="React Bootstrap logo"
            />
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    </div>
  );
}
}
export default Collapsible;

