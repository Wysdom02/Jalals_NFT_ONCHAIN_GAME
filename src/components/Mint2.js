import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gif from '../images/jalal-gif.gif';
import './cssfiles/mint2.css'

export default class Mint2 extends Component {
  render() {
    return (
      <div className='mintpage2'>
        <Row>
        <Col md={6}>
         
        <img alt="gif" src={gif}  className ="jalalgif"/>
        <h3 className='heading2'>MINT YOUR JALAL!</h3>
        </Col>
        <Col>
        <h1 className="homehead">THE JALALS </h1> 
        <btn  onClick={(e)=> {
                  e.preventDefault() 
                  this.props.mintnft() 
        }}><h1 className="btn2">MINT</h1> 
            </btn>
            <h3 className='heading2'>{this.props.mintcount}/{this.props.totalsupply}</h3>
        </Col>

        </Row>
      </div>
    )
  }
}
