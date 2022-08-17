import React, { Component, Fragment } from "react";

class Navbar extends Component {
  connectToWallet = async () => {
    try {
      await window.ethereum.enable().then((account) => {
        console.log("Connect button clicked !");
        this.setState({ account: account[0] });
        console.log(account[0]);
      });
      // this.loadWeb3();
    } catch (error) {}
  };

  constructor(props) {
    super(props);
    this.state = {
      account: "0x0",
    };
  }

  render() {
    return (
      <div>
        <h3>Navbar</h3>
        <button onClick={this.connectToWallet}>Connect Wallet </button>

        {this.state.account != "0x0" ? (
          <h4>{this.state.account}</h4>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Navbar;
