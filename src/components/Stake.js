import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cssfiles/stake.css';

export default class Stake extends Component {
  render() {
    return (
      <div className='stakepage'> 
      <Row>
      <Col md={6} className="col3s">
      <Row><div className="smalls"><h2>STAKE YOUR JALAL</h2></div></Row>
      <Row><div className="mids"> .</div></Row>
      <Row><div className="smallers"><h2>STAKE/UNSTAKE</h2></div></Row>
      </Col>
      
      <Col md={6}>
        <h1 className='heading'>STAKING STATISTICS</h1>
        <h1 className='heading'> STAKED 0/0</h1>
      </Col>
      </Row>
      </div>
    )
  }
}
