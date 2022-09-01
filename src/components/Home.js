import React, { Component, Fragment } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jalals from "../images/Jalals.jpeg";
import '../App.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';


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
          <Row > <img className="homeimg"
              alt=""
              height={330}
              src="https://jalalstest.my.canva.site/videos/37fff48731c5d92b578bb926cee42ee6.gif"
            />{' '} </Row>
          </Col>
          <Col>
          <div class="row"> 
  <div class="column">
    <img src="https://jalalstest.my.canva.site/videos/b93d988b666788de0f69691933eae5c6.gif"/>
    <img  src="https://jalalstest.my.canva.site/videos/badf028a46421c273ade4a2535a57ba0.gif" />

  </div>
  <div class="column">
    <img  src="https://jalalstest.my.canva.site/videos/4afabbf15679f4fdd2560f5c110b47c3.gif"/>
    <img  src="https://jalalstest.my.canva.site/videos/d6096444b95c961d80695ff66779f0e0.gif" />
  </div>  
          </div>
          </Col>
        </Row>
      </div>

      <div className="homepage2">

      </div>

      </div>
    );
  }
}

export default Home;
