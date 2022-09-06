import React, { Component} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'
import blast from '../images/blast.gif'
import sun from '../images/sun.gif'
import waves from '../images/waves.gif'
import redsemi from '../images/redsemi.gif'
import greensemi from '../images/greenrotar.gif'
import bomb from '../images/bomb.gif'
import factory from '../images/factory.gif'

class Home extends Component {
  render() {
    return (
      <div>
      <div className="homepage">
             <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet"></link>
        <Row>
          <Col md={5} >
            <Row> <h1 className="homehead">THE <br/> JALALS <br/> </h1> <h1 className="homehead2">#MAXBOMBING</h1></Row>
          <Row className="homeimg"> <img 
              alt=" "
              src={blast }
            />{' '} </Row>
          </Col>
          <Col>
          <div class="row2"> 
  <div class="column">
    <img src={sun} alt=" " />
    <img  src={waves} alt=" "/>

  </div>
  <div class="column">
    <img  src={redsemi}alt=" "/>
    <img  src={greensemi} alt=" "/>
  </div>  
          </div>
          </Col>
        </Row>
      </div>

      <Row className="attackpage">
      <Col md={5} className="imgholder">
      <img src={bomb} alt=" "></img>
      <img src={factory} alt=" "></img>
      </Col>
      <Col>
      <h1 className="homehead">THE JALALS ARE BOMBING!</h1>
      <br/>
      <br/>
      <h4 className="homehead3">5,555 Jalals are coming your way to disrupt the bear market. We are gonna bomb your Ethereum Wallets with our CC0 Jalals.<br/>
          See, Jalals are not your average humans, we are build for having fun and ducking around!</h4>
      </Col>
      </Row>
      </div>
    );
  }
}

export default Home;
