import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./cssfiles/navcss.css";



function Collapsible() {

  return (
    
    <div>
     <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet"></link>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='trapeze'>
      <Container >
     
        <Navbar.Brand href="/">Jalals</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
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

import React, { Component, Fragment } from "react";

class Navbar extends Component {
  connectToWallet = async () => {
    try {
      await window.ethereum.enable().then((account) => {
        console.log("Connect button clicked !");
        this.setState({ account: account[0] });
        console.log(account[0]);
      });
      // this.loadWeb3();
    } catch (error) {}
  };

  constructor(props) {
    super(props);
    this.state = {
      account: "0x0",
    };
  }

  render() {
    return (
      <div>
        <h3>Navbar</h3>
        <button onClick={this.connectToWallet}>Connect Wallet </button>

        {this.state.account != "0x0" ? (
          <h4>{this.state.account}</h4>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Navbar;
