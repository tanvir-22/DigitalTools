import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stat from "./components/Stat";
import Start from "./components/Start";
import Pricing from "./components/Pricing";
import Transform from "./components/Transform";
import Footer from "./components/Footer";
import Products from "./components/Products";
const App = ()=>{
  const product = fetch('/product.json').then(res=>res.json())
  return(
    <>
     <Navbar/>
     <Banner/>
     <Stat/>
     <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Products product = {product}/>
     </Suspense>
     <Start/>
     <Pricing/>
     <Transform/>
     <Footer/>
    </>
  )
}

export default App;