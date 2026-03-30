import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stat from "./components/Stat";
import Start from "./components/Start";
import Pricing from "./components/Pricing";
import Transform from "./components/Transform";
import Footer from "./components/Footer";
const App = ()=>{

  return(
    <>
     <Navbar/>
     <Banner/>
     <Stat/>
     <Start/>
     <Pricing/>
     <Transform/>
     <Footer/>
    </>
  )
}

export default App;