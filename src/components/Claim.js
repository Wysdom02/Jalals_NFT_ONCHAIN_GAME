import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cssfiles/claim.css'




export default class Claim extends Component {
  render() {
    window.onload = function (event) {

      var myitem = document.querySelectorAll(".claimrow");
      for(var h=0; h<myitem.length; h++){
          myitem[h].onclick = function(e){
              var myitem = document.querySelectorAll(".claimrow");
  
              for(h=0; h<myitem.length; h++){
                  myitem[h].classList.remove("bordered");
              }
  
              this.classList.add("bordered");
  
          };
      }
  };
    const token= this.props.tokens3
   const tokens4= this.props.tokens4
    return (
      
        <div className='claimpage'>
          <br/>
          <h1 className='heading'>CLAIMS</h1>   
      <Row>
        <Col md={6}>
            <Row><btn onClick={(e)=> {
                  e.preventDefault() 
                  this.props.claimmissileset() 
                } }><h1 className="btn2 marg">CLAIM MISSILES</h1> 
            </btn>
            </Row>
            <Row className="options">
            <Row  >
                    <h2>Tokens for Claim</h2>
                    
                </Row>
                <Row  className='claimrow'>
                    <h3>{token}</h3>
                    <hr/>
                </Row>
           
            
            </Row>
        </Col>
        
        <Col md={6}>
            <Row>
            <btn onClick={(e)=> {
                  e.preventDefault() 
                  this.props.claimjalals({token}) 
                } }><h1 className="btn2 marg">CLAIM JALALS</h1> 
            </btn>
            </Row>
            <Row className="options">
            <Row  >
                <h2>Jalas for claim</h2> 
                </Row>
             { tokens4.map((token) => (
                <Row onClick={(e)=> {
                  e.preventDefault() 
                  this.props.claimjalalset({token}) 
                } } className='claimrow'>
                    <h3>{token}</h3>
                    
                </Row>
            ))}
            </Row>
        </Col>
      </Row>
    </div> )
  }
}
