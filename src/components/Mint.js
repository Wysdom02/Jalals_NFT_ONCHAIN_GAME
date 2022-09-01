import React, { Component } from "react";

import './cssfiles/mint.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Mint extends Component {


  render() {
    return (
      <div className="mintpage">
        <Row>
        <Col md={3} className="col3">
        <Row><div className="smallt">TOKENS</div></Row>
        <Row><div className="midt"> .</div></Row>
        <Row><div className="smallert">CLAIM TOKENS &nbsp; 
            <img
              alt=""
              src="https://www.svgrepo.com/show/20923/target.svg"
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{' '}</div></Row>
        </Col>
        <Col md={3} className="col3">
        <Row><div className="smallt">BOMBED NFT</div></Row>
        <Row><div className="midt"> .</div></Row>
        <Row><div className="smallert">CLAIM NFTS &nbsp; 
            <img
              alt=""
              src="https://www.svgrepo.com/show/20923/target.svg"
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{' '}</div></Row>
        </Col>
        <Col md={3} className="col3"> 
        <Row ><div className="smallt">TOKEN BALANCE 
        </div></Row>
        <Row ><div className="bigger">TOKEN <br/> NFT</div></Row>
        </Col>
        </Row>
      </div>
    );
  }
}

export default Mint;
