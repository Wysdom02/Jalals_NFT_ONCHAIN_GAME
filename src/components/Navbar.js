import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./cssfiles/navcss.css";
import metamask from "../images/metamask.svg"
import React, { Component } from "react";

class Collapsible extends Component {
  render() {

function Collapsible() {
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


      <link
        href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap"
        rel="stylesheet"
      ></link>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="trapeze"
      >
        <Container>
          <Navbar.Brand href="/">Jalals</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/mint">Mint</Nav.Link>
              {/* <img
              alt=""
              src="https://jalalstest.my.canva.site/videos/aced88fff16f7b9f612c332a878271e1.gif"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}

              <Nav.Link eventKey={2} href="/attack">
                Attack
              </Nav.Link>
              {/* <img
              alt=""
              src="https://jalalstest.my.canva.site/videos/37fff48731c5d92b578bb926cee42ee6.gif"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
              <Nav.Link eventKey={2} href="/stake">
                Stake
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Collapsible;
