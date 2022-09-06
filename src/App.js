import "./App.css";
import Danger from "./components/Danger";
import Attack from "./components/Attack.js";
import Home from "./components/Home.js";
import Web3 from "web3";
import { Component } from "react";
import NavbarB from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'
import Mint2 from "./components/Mint2";
import Footer from "./components/Footer.js";
import Claim from "./components/Claim";
import Statistics2 from "./components/Statistics2";
import {
  BrowserRouter as Router,
  Routes,
  Route,


} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import ConnectButton from "./components/connectButton";
import Stake from "./components/Stake";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



class App extends Component {


   tokens2 = [8792,8791,8790,8789,8788,8785];
  
  
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      connected: false,
      nftmeta1:"https://i.imgur.com/GiABTd8.png",
      nftdesc1:"All about your awesome NFT",
      nftname1:" ",
      nftlink1:"#",
      nftmeta2:"https://i.imgur.com/GiABTd8.png",
      nftdesc2:"All about your awesome NFT#2",
      nftname2:" ",
      nftlink2:"#",
      atknft1:"",
      atknft2:"",
      imgURLs: this.tokens2.map(e => "https://i.imgur.com/GiABTd8.png"),
      missile:0,
      mintcount:0,
      totalsupply:5555,
      bomb:0,
      claim:0,
      revive:0,
       claimtoken: "No tokens",
       jalals: ["knejfe","ofienfienf","ekfnenf","knejfe","ofienfienf","ekfnenf"],
       claimjalal:"",
       revivenft:""
    }
    this.loadBlockchain = this.loadBlockchain.bind(this)
    this.getNFT = this.getNFT.bind(this)
    this.getNFT2 = this.getNFT2.bind(this)
    this.claimjalalset = this.claimjalalset.bind(this)
    this.claimjalals = this.claimjalals.bind(this)
    this.claimmissileset = this.claimmissileset.bind(this)
    this.mintnft = this.mintnft.bind(this)
    this.revivefunc = this.revivefunc.bind(this)
    this.setrevive=this.setrevive.bind(this)
    this.attack=this.attack.bind(this)
  }

    componentDidMount(){
      this.tokens2.map( (val2) => {this.getNFT2(val2)});
      
    }

  async getNFT2(val2) {
    const nft = await fetch("https://api.opensea.io/api/v1/asset/0x740c178e10662bbb050bde257bfa318defe3cabc/" + val2)
    if(nft.status!==404 && nft.status!==429 && nft.status!==500) {
        let data;
        let ind = this.tokens2.indexOf(val2)
        data = await nft.json();
       const newimg = [...this.state.imgURLs]       
      newimg[ind] = data.image_url;
      this.setState(this.state.imgURLs = newimg)

    }

}

  async getNFT(val,n) {
    const nft = await fetch("https://api.opensea.io/api/v1/asset/0x740c178e10662bbb050bde257bfa318defe3cabc/" + val)
    if(nft.status!==404 && nft.status!==429 && nft.status!==500)
    {const data = await nft.json();
      console.log(data);
      if(n==1){ 
      this.setState( { 
        nftmeta1 : data.image_url , 
        atknft1: val,
        nftname1: data.name,
      } )
      if(data.permalink!=null && data.description!=null)
      { this.setState( { nftlink1: data.permalink,
        nftdesc1 : data.description.slice(0,130)+"..",
      } ) }
      }
      else {this.setState( { 
        nftmeta2 : data.image_url , 
        atknft2: val ,
        nftname2: data.name,
      } )
      if(data.permalink!=null && data.description!=null){ this.setState( { 
        nftlink2: data.permalink,
        nftdesc2 : data.description.slice(0,130)+".." } ) }
    }
    }
    else 
    { this.state.atknft2="";
      console.log("no nft")}

      nftmeta1: "https://i.insider.com/61cc84b94710b10019c77960?width=700",
      nftdesc1: "All about your awesome NFT",
      nftname1: " ",
      nftlink1: "#",
      nftmeta2:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-04/61254c10-c4e2-11ec-b6eb-8947bb0d6d4e",
      nftdesc2: "All about your awesome NFT#2",
      nftname2: " ",
      nftlink2: "#",
    };
    this.loadBlockchain = this.loadBlockchain.bind(this);
    this.getNFT = this.getNFT.bind(this);
  }

  async getNFT(val, n) {
    const nft = await fetch("https://api.opensea.io/api/v1/asset/" + val);
    if (nft.status !== 404 && nft.status !== 429 && nft.status !== 500) {
      const data = await nft.json();
      console.log(data);
      if (n == 1) {
        this.setState({
          nftmeta1: data.image_url,

          nftname1: data.name,
        });
        if (data.permalink != null && data.description != null) {
          this.setState({
            nftlink1: data.permalink,
            nftdesc1: data.description.slice(0, 130) + "..",
          });
        }
      } else {
        this.setState({
          nftmeta2: data.image_url,
          nftname2: data.name,
        });
        if (data.permalink != null && data.description != null) {
          this.setState({
            nftlink2: data.permalink,
            nftdesc2: data.description.slice(0, 130) + "..",
          });
        }
      }
    } else {
      console.log("no nft");
    }
  }

  async loadBlockchain() {
    const web3 = new Web3(Web3.givenProvider);
    await window.ethereum.enable();
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    this.setState({ connected: true });
    console.log("hello func");
  }

 async loadBlockchain()
{ 
  const web3 = new Web3(Web3.givenProvider)
  await window.ethereum.enable();
  if(window.ethereum){
  const accounts = await web3.eth.getAccounts()
  this.setState( { account : accounts[0] } )
  this.setState( {connected : true})
  }
 else {
  alert("install metamask extension!!");
}
  //loadblockchain data
}

claimjalalset(val)
{
 this.state.claimjalal=val;
 console.log( this.state.claimjalal )
}

setrevive(val)
{
 this.state.revivenft=val;
 console.log( this.state.revivenft )
}

attack()
{
  if(this.state.atknft1!="" && this.state.atknft2!="")
  { const st= "NFT "+this.state.atknft1+ " is attacking " + "NFT " +this.state.atknft2 + ". Please check the NFT you want to attack carefully"
    var answer = window.confirm(st)
  if(answer){
    console.log(this.state.atknft1, " is attacking " , this.state.atknft2)
    //Your attack function here
  }}
  else{
    alert("Choose valid nfts")
  }
}


revivefunc(){
  var answer = window.confirm("Reviving chosen NFT")
  if(answer){
  if(this.state.revivenft!="")
  {console.log("reviving" ,this.state.revivenft)
    //Your revive func here
  }
  else
  alert("Choose acceptable NFT to revive")
}}

claimjalals(){
  if(this.state.claimjalal!="")
  {console.log( "Claim Jalal no." , this.state.claimjalal )}
  else 
  {
    alert("pick a jalal")
  }
//Your claimJALAfunction here
}
claimmissileset(){
  console.log( "Claim Token no." , this.state.claimtoken )
//Your claimmissilesfunction here
}

mintnft(){
  console.log("Called mint")
}


  render(){
    
  return (
    <div className="App">
      
      <NavbarB loadBlockchain={this.loadBlockchain}/>
       <Router>
<Routes>
<Route exact path="/" element={<Home/>}/>
  <Route  path="attack" element={<Attack 
  getNFT = {this.getNFT}
  attack = {this.attack}
  nftmeta1= {this.state.nftmeta1}
  nftmeta2={this.state.nftmeta2}
  nftdesc1 ={this.state.nftdesc1}
  nftdesc2 ={this.state.nftdesc2}
  nftname1={this.state.nftname1}
  nftname2={this.state.nftname2}
  nftlink1={this.state.nftlink1}
  nftlink2={this.state.nftlink2}

/>}/>
  <Route  path="mint" element={<Mint2
  mintcount={this.state.mintcount}
  totalsupply={this.state.totalsupply} 
  mintnft={this.mintnft}/>}/>   

  <Route path="/claim" element={<Claim
  tokens3={this.state.claimtoken}
  tokens4={this.state.jalals}
  claimjalals={this.claimjalals}
  claimjalalset={this.claimjalalset}
  claimmissileset={this.claimmissileset}
  />}/> 
  <Route path="/stats" element={<Statistics2
  missile={this.state.missile}
  bomb={this.state.bomb}
  claim={this.state.claim}
  revive={this.state.revive}
  />}/> 

  <Route path="/danger" element={<Danger
  imgURLs={this.state.imgURLs} 
  tokens2={this.tokens2}
  setrevive={this.setrevive}
  revivefunc={this.revivefunc}
  />}/>     
</Routes>
</Router>

      <Footer></Footer>
    </div>
  );
}

  render() {
    return (
      <div className="App">
        {!this.state.connected ? (
          <ConnectButton loadBlockchain={this.loadBlockchain} />
        ) : (
          console.log("connected")
        )}
        <NavbarB />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="attack"
              element={
                <Attack
                  getNFT={this.getNFT}
                  nftmeta1={this.state.nftmeta1}
                  nftmeta2={this.state.nftmeta2}
                  nftdesc1={this.state.nftdesc1}
                  nftdesc2={this.state.nftdesc2}
                  nftname1={this.state.nftname1}
                  nftname2={this.state.nftname2}
                  nftlink1={this.state.nftlink1}
                  nftlink2={this.state.nftlink2}
                />
              }
            />
            <Route path="mint" element={<Mint />} />
            <Route path="/stake" element={<Stake />} />
          </Routes>
        </Router>

        <Footer></Footer>
      </div>
    );
  }
}
export default App;
