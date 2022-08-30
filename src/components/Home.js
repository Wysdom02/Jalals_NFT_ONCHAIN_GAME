import React, { Component, Fragment } from "react";

import jalals from "../images/Jalals.jpeg";
import '../App.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
class Home extends Component {
  render() {
    return (
      <Container className="Container">
        <h1>Hello, Welcome to JALALAND !</h1>
        <Image fluid={true} className = "image" src={jalals} alt="Jalas" />
      </Container>
    );
  }
}

export default Home;
