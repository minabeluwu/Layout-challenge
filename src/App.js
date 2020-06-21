import React from 'react';
import Header from "./components/Header"
import Presentation from "./components/Presentation"
import Home from "./components/Home"
import Footer from "./components/Footer"
import "./styles/header.css"

function App() {
  return (
    <>
      <Header/>
      <Presentation/>
      <Home />
      <Footer/>        
    </>
  );
}

export default App;
