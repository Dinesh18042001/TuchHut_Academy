import React from "react";
import { useEffect } from "react";
import {  Outlet,  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import NavScrollExample from "./component/NavScrollExample";
import Home from "./component/Home/Home";
import Section2 from "./component/Section2/Section2";
import Slider from "./component/Slider/Slider";
import Dummy from "./component/Dummy/Dummy";
import Section5 from "./component/Section5/Section5";
import Section6 from "./component/Scetion6/Section6";
import Faq from "./component/Faq/Faq";
import Section8 from "./component/Section8/Section8";
import Footer from "./component/Footer/Footer";
import { BackToTop } from "./component/Back-to-top/BackToTop";
import Contact from "./component/Contact/Contact";
// routePages
// import ApplyNowPage from "./ApplyNowPage/ApplyNowPage";
// import Modal from "./component/modal/ContactModal";
import ContactModal from "./Modals/modal/ContactModal";
// import { BasenameProvider } from "./BasenameContext";

function App() {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    
     <>
        <NavScrollExample />
        <BackToTop />
        <ContactModal/>
        <Home />
        <Section2 />
        <Slider />
        <Dummy />
        <Section5 />
        <Section6 />
        <Faq />
        <Section8 />
        <Contact />
        <Footer />
        <Outlet/>
        
      </>
    
  );
}

export default App;
