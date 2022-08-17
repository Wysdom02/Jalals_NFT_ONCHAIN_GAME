import logo from "./logo.svg";
import "./App.css";
import Mint from "./components/Mint.js";
import Attack from "./components/Attack.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home />
      <Footer></Footer>
    </div>
  );
}

export default App;
