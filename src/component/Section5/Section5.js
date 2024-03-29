import { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./Section5.css";
import SyllabusDownloadModal from "../../Modals/SyllabusDownloadModal/SyllabusDownloadModal";



const Section5 = () => {

  const [showSyllabusDownloadModal, setSyllabusDownloadModal] = useState(false);

  const openSyllabusDownloadModal = () => {
    setSyllabusDownloadModal(!showSyllabusDownloadModal);
  };

  return (
    <div className="container">
      <div className="main-sec row overflow-hidden">
        <div className="main2-sec col-lg-6 col-md-12">
          <div className='m-5 p-2 mdtext'>
          <h3>Unlock Your Potential: Assess, Improve, and Excel at TechHut Academy</h3>
          <p className='lh-base'>Utilise the assessment we provide to determine your areas of strength and to pinpoint areas in which you may improve. You will be equipped with the tools and resources necessary to consistently improve and advance when you enrol in TechHut Academy.</p>
          <Button variant="outline-primary" onClick={openSyllabusDownloadModal}   className="w-22 rounded-pill" style={{ borderColor: '#854DCE', color: '#854DCE', width: '163px', height: '46px',backgroundColor: 'white' }} >Download Syllabus</Button>
          </div>
        </div>
        <div className="main3-sec col-lg-6 col-md-12">
          <div className="img-sec1">
            <img src="images/section5.png" alt=""/>
          </div>
        </div>
        <SyllabusDownloadModal showModal={showSyllabusDownloadModal} openModal={(dt)=>{setSyllabusDownloadModal(dt)}}/>
      </div>
    </div>
  );
}

export default Section5;

