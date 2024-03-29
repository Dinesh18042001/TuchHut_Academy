import React, { useState, useEffect} from "react";
import "./ViewProgram.css";
import { Button } from "react-bootstrap";
import { HiArrowDown } from "react-icons/hi";
import ViewProgrampage2 from "./ViewProgrampage2/ViewProgrampage2";
import ViewProgrampage3 from "./ViewProgrampage3/ViewProgrampage3";
import NavScrollExample from "../NavScrollExample";
import ViewProgramPage4 from "./ViewProgramPage4/ViewProgramPage4";
import ViewProgramPage5 from "./ViewProgramPage5/ViewProgramPage5";
import ViewProgrampage6 from "./ViewProgrampage6/ViewProgrampage6";
import ViewProgrampage7 from "./ViewProgrampage7/ViewProgrampage7";
import Footer from "../Footer/Footer";
import ViewProgrampage8 from "./ViewProgrampage8/ViewProgrampage8";
import ViewProgrampage9 from "./ViewProgrampage9/ViewProgrampage9";
import ApplyModel from "../../Modals/ApplyModal/ApplyModel";
import SyllabusDownloadModal from "../../Modals/SyllabusDownloadModal/SyllabusDownloadModal";
import VideoComponent from "../../pages/VideoComponent/VideoComponent";
import { BackToTop } from "../Back-to-top/BackToTop";

export const ViewProgram = () => {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showApplyModel, setApplyModel] = useState(false);
  const [showSyllabusDownloadModal, setSyllabusDownloadModal] = useState(false);

  const openApplyModel = () => {
    setApplyModel(!showApplyModel);
  };

  const openSyllabusDownloadModal = () => {
    setSyllabusDownloadModal(!showSyllabusDownloadModal);
  };

  return (
    <>
    <NavScrollExample />
    <div className="def">
    <div className="container">
      <div className="rowpart row" style={{ marginTop: "30px"}} >
        <div className="viewProgram col-lg-6">
          <h4>Get Placed at</h4>
          <h1>Top Tech Companies</h1>
          <p>
            6-month comprehensive live program covering all the right skills you
            need to get placed at top tech companies.
          </p>
            <Button className="viewbtn" style={{background: '#854DCE', borderRadius: "30px"}} onClick={openApplyModel} >Apply Now</Button>
            <Button className="viewbtn" onClick={openSyllabusDownloadModal}  style={{ backgroundColor: 'transparent', color: '#fff', background:'#854DCE', borderRadius: "30px"}}><HiArrowDown style={{ fontSize: '1.2em',marginRight: '5px'}} />Download</Button>
          </div>

        <div className="viewprogram-img col-lg-6">
          <img src="images/Handcoding.gif" />
          {/* <VideoComponent/> */}
        </div>

        
      </div>
      
      <ApplyModel showModal={showApplyModel} openModal={(dt)=>{setApplyModel(dt)}}/>
      <SyllabusDownloadModal showModal={showSyllabusDownloadModal} openModal={(dt)=>{setSyllabusDownloadModal(dt)}}/>
    </div>
    <ViewProgrampage2/>
    <BackToTop/>
    <ViewProgrampage3/>
    <ViewProgramPage4/>
    <ViewProgramPage5/>
    <ViewProgrampage6/>
    <ViewProgrampage7/>
    <ViewProgrampage8/>
    <ViewProgrampage9/>
    </div>
    <Footer/>
    
    </>
  );
};

