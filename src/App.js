import React  from "react";
import Header from "./Components/Header/header";
import './App.css'
import Slider from "./Components/Slider/slider";
import Footer from "./Components/Footer/footer";
import Content from "./Components/Content/content";
import SideContent from "./Components/SideContent/sidecontent";
import Contactus from "./Components/Contactus/contactus";
function App() {
  return (
    <>
    <Header/>
    <Slider/> 
    
    <div className="arrange">
    <Content/>
    <SideContent/>
    </div>
    
    <Contactus/>
    <Footer/>
    </>
  );
}

export default App;
