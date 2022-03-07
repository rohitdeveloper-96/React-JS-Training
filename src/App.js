import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Toolbar from "./Toolbar";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Shopping from "./Shopping";

function App() {
  return (
    <BrowserRouter>
      <Toolbar />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
