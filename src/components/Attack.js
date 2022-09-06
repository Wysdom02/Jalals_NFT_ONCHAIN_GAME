import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cssfiles/attack.css';


class Attack extends Component {


  tokens= ["Select Your Jalal" , 1289,1378,7689,7863];
 

  render() {
    
    return (
      <div className="attackpage">
         <Form className="Form">
          <Row>
            <Col md  ={6}>
      <Form.Group className="mb-3" controlId="PlayerNFT">
      <Card  className="holder">
      <Card.Img variant="top" src={this.props.nftmeta1}  className="cimage" />
      <Card.Body>
        <Card.Title>{this.props.nftname1}</Card.Title>
        {/* <Card.Text>
        {this.props.nftdesc1}
        </Card.Text> */}
        <Button href = {this.props.nftlink1} target="_blank" variant="primary">OpenSea</Button>
      </Card.Body>
    </Card>
        <Form.Label>Enter Your NFT ID</Form.Label>
        <Form.Select type="email" placeholder="NFT_TokenNo." className="inputbox" onChange={ e => this.props.getNFT(e.target.value,1)}>
        {this.tokens.map(token => (
      <option >{token}</option> 
    ))}</Form.Select>
      </Form.Group>
      </Col>

      <Col md={6}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Card  className="holder">
      <Card.Img variant="top" src={this.props.nftmeta2}  className="cimage" />
      <Card.Body>
        <Card.Title>{this.props.nftname2}</Card.Title>
        {/* <Card.Text>
          {this.props.nftdesc2}
        </Card.Text> */}
        <Button href = {this.props.nftlink2}  target="_blank" variant="primary">OpenSea</Button>
      </Card.Body>
    </Card>
        <Form.Label>Enter NFT Token you Want to Attack</Form.Label>
        <Form.Control type="email" placeholder="NFT_TokenNo."  className="inputbox"  onChange={ e => this.props.getNFT(e.target.value,2)} />
      </Form.Group>
      </Col>
      </Row>

      <btn type= "submit"className="btn3" onClick={(e)=> {
                    e.preventDefault() 
                    this.props.attack()}}>Attack  <img
              alt=""
              src="https://www.svgrepo.com/show/20923/target.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}</btn>

    </Form>
      </div>
    );
  }
}

export default Attack;
