import React, { useState } from "react";
import "./ViewProgrampage7.css"
import Accordion3 from '../../../pages/Accordion3/Accordion3'
import { Button } from 'react-bootstrap'
import { FaArrowDown } from "react-icons/fa";
import SyllabusDownloadModal from "../../../Modals/SyllabusDownloadModal/SyllabusDownloadModal";

const ViewProgrampage7 = () => {

 const [showSyllabusDownloadModal, setSyllabusDownloadModal] = useState(false);

 const openSyllabusDownloadModal = () => {
  setSyllabusDownloadModal(!showSyllabusDownloadModal);
};

  return (
    <div className="sec7 section">

        <div className="container">
            <div className="row">
                <h1>Curriculum Deepdive</h1>
                <p>A comprehensive curriculum designed by industry experts working at companies like Google, Microsoft & Apple</p>
                <div className='Acc3'>
                    <Accordion3/>
                </div>
            </div>
            <div className='btnvp7'>
            <Button className='viewpagebtn' onClick={openSyllabusDownloadModal} ><FaArrowDown style={{ marginRight: '7px' }} />Download Syllabus</Button>
            </div>
        </div>
        <SyllabusDownloadModal showModal={showSyllabusDownloadModal} openModal={(dt)=>{setSyllabusDownloadModal(dt)}}/>
    </div>
  )
}

export default ViewProgrampage7