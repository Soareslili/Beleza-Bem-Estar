import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

import { About } from "./components/About"
import { Hero } from "./components/Hero"
import { Treatment } from "./components/Treatment"
import {Testimony} from "./components/Testimony"
import { Contact } from "./components/Contact"
import { Location } from "./components/Location"
import { Footer } from "./components/Footer"





function App() {

    useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,      
    });
  }, []);

  return (
    <>
     <Hero/>
    <About/>
    <Treatment/>
    <Testimony/>
    <Contact/>
    <Location/>
    <Footer/>
    </>
  )
}

export default App
