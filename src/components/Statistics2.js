import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cssfiles/statistics.css'
import sunset from "../images/sunset.gif"
export default class Statistics2 extends Component {
  render() {
    return (
      <div className='claimpage'> 
      <br/>
      <Row>
        <Col md={8}>
            <Row><h1 className='heading'> STATISTICS</h1></Row>
            <br/>
        <Row className="stats1">
            <Col md={6} className='redc'><h2> Missiles Balance</h2>
            </Col>
            <Col className='redc' ><h2> {this.props.missile} </h2></Col>
        </Row>
        <Row className="stats1" >
            <Col md={6} className='greenc' ><h2>Bombed NFT</h2>
            </Col>
            <Col className='greenc'><h2> {this.props.bomb}</h2></Col>
        </Row>
        <Row className="stats1" >
            <Col md={6}className='redc'><h2> Revived NFT</h2>
            </Col>
            <Col className='redc'><h2> {this.props.revive}</h2></Col>
        </Row>
        <Row className="stats1"  >
            <Col md={6} className='greenc'><h2> Claimed NFT</h2>
            </Col>
            <Col className='greenc'><h2> {this.props.claim}</h2></Col>
        </Row>
        </Col>
        <Col className='statimg'  md={4}>
        
        <img 
              src={sunset}
            />{' .'} 
            <h2 className='heading'> Some Text</h2>
        </Col>
      </Row>
      </div>
    )
  }
}
