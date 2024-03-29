import React from 'react'
import "./ViewProgrampage8.css"
import CardCarousel2 from '../../../pages/CardCarousel2/CardCarousel2'

const ViewProgrampage8 = () => {
  return (
    <div className="sec8 section">
        <div className='ViewProgrampageh1'>
            <h1>You are are in Safe Hands with our <span style={{color: "#1371ff"}}>Instructors & Mentors</span></h1>
            <p>Our Instructors & Mentors know the importance of DS & Algo, CS Fundamentals, System Design & Development not just in</p>
            <p> interviews but throughout their tech career</p>
        </div>
        <div className="container">
            <div className="row">
                <CardCarousel2/>
            </div>
        </div>
    </div>
  )
}

export default ViewProgrampage8