import logo from "./logo.svg";
import "./App.css";
import Mint from "./components/Mint.js";
import Attack from "./components/Attack.js";
import Home from "./components/Home.js";
import Web3 from 'web3';
import { Component } from 'react';
import NavbarB from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "./components/Layout";
import ConnectButton from "./components/connectButton";
import Stake from "./components/Stake";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

class App extends Component {


  
  constructor(props) {
    super(props);
    this.state  = {
      account:'',
      connected: false,
      nftmeta1:"https://i.insider.com/61cc84b94710b10019c77960?width=700",
      nftdesc1:"All about your awesome NFT",
      nftname1:" ",
      nftlink1:"#",
      nftmeta2:"https://s.yimg.com/os/creatr-uploaded-images/2022-04/61254c10-c4e2-11ec-b6eb-8947bb0d6d4e",
      nftdesc2:"All about your awesome NFT#2",
      nftname2:" ",
      nftlink2:"#",
    }
    this.loadBlockchain = this.loadBlockchain.bind(this)
    this.getNFT = this.getNFT.bind(this)
  }

  async getNFT(val,n) {
    const nft = await fetch("https://api.opensea.io/api/v1/asset/" + val)
    if(nft.status!==404 && nft.status!==429 && nft.status!==500)
    {const data = await nft.json();
      console.log(data)
      if(n==1){ 
      this.setState( { 
        nftmeta1 : data.image_url , 
        
        nftname1: data.name,
      } )
      if(data.permalink!=null && data.description!=null)
      { this.setState( { nftlink1: data.permalink,
        nftdesc1 : data.description.slice(0,130)+"..",
      } ) }
      }
      else {this.setState( { 
        nftmeta2 : data.image_url , 
        nftname2: data.name,
      } )
      if(data.permalink!=null && data.description!=null){ this.setState( { 
        nftlink2: data.permalink,
        nftdesc2 : data.description.slice(0,130)+".." } ) }
    }
    }
    else 
    {console.log("no nft")}
  }


 async loadBlockchain()
{ 
  const web3 = new Web3(Web3.givenProvider)
  await window.ethereum.enable();
  const accounts = await web3.eth.getAccounts()
  this.setState( { account : accounts[0] } )
  this.setState( {connected : true})
  console.log("hello func")

}

  
  render(){
    
  return (
    <div className="App">
      { !this.state.connected
        ?<ConnectButton
         loadBlockchain={this.loadBlockchain} />
         :console.log("connected")
      }<NavbarB/>
       <Router>
<Routes>
<Route exact path="/" element={<Home/>}/>
  <Route  path="attack" element={<Attack 
  getNFT = {this.getNFT}
  nftmeta1= {this.state.nftmeta1}
  nftmeta2={this.state.nftmeta2}
  nftdesc1 ={this.state.nftdesc1}
  nftdesc2 ={this.state.nftdesc2}
  nftname1={this.state.nftname1}
  nftname2={this.state.nftname2}
  nftlink1={this.state.nftlink1}
  nftlink2={this.state.nftlink2}

/>}/>
  <Route  path="mint" element={<Mint/>}/>   
  <Route path="/stake" element={<Stake/>}/>     
</Routes>
</Router>
      
    </div>
  );
}
}
export default App;
