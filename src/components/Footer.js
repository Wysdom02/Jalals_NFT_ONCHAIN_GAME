import React, { Component} from "react";
import twitter from "../images/twitter.svg";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>Copyrights Reserved @THEJALALS</p>
        <p>Twitter<a target="_blank" href="https://twitter.com/TheJalals"><img className ="footimg" src={twitter} height={40}></img></a></p>
      </div>
    );
  }
}

export default Footer;
