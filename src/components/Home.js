import React, { Component, Fragment } from "react";

import jalals from "../images/Jalals.jpeg";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello, Welcome to JALALAND !</h1>
        <img src={jalals} alt="Jalas" />
      </div>
    );
  }
}

export default Home;
