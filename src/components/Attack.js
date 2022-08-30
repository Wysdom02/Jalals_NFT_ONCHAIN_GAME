import React, { Component, Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cssfiles/attack.css';

class Attack extends Component {
   
 

  render() {
    
    return (
      <div className="page">
         <Form className="Form">
          <Row>
            <Col sm  ={6}>
      <Form.Group className="mb-3" controlId="PlayerNFT">
      <Card  className="holder">
      <Card.Img variant="top" src={this.props.nftmeta1}  className="cimage" />
      <Card.Body>
        <Card.Title>{this.props.nftname1}</Card.Title>
        <Card.Text>
        {this.props.nftdesc1}
        </Card.Text>
        <Button href = {this.props.nftlink1} target="_blank" variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        <Form.Label>Enter Your NFT ID</Form.Label>
        <Form.Control type="email" placeholder="NFT_ID/TokenNo." className="inputbox" onChange={ e => this.props.getNFT(e.target.value,1)}/>
      </Form.Group>
      </Col>

      <Col sm={6}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Card  className="holder">
      <Card.Img variant="top" src={this.props.nftmeta2}  className="cimage" />
      <Card.Body>
        <Card.Title>{this.props.nftname2}</Card.Title>
        <Card.Text>
          {this.props.nftdesc2}
        </Card.Text>
        <Button href = {this.props.nftlink2}  target="_blank" variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        <Form.Label>Enter NFT ID you Want to Attack</Form.Label>
        <Form.Control type="email" placeholder="NFT_ID/TokenNo."  className="inputbox"  onChange={ e => this.props.getNFT(e.target.value,2)} />
      </Form.Group>
      </Col>
      </Row>

      <button type= "submit" className="atkbtn">Attack </button>
      {/* <Button type="submit" className="atkbtn">
        Attack
      </Button> */}
    </Form>
      </div>
    );
  }
}

export default Attack;
