import React from 'react'
import "./ViewProgrampage3.css"
import CardCarousel from '../../../pages/CardCarousel/CardCarousel'

const ViewProgrampage3 = () => {
  return (
    <div className="bgcan2 container">
        <h1>Placements from <span style={{color: "#1371ff"}}>Diverse Colleges</span></h1>
        <div className="row">
         <CardCarousel/>
        </div>
    </div>
  )
}

export default ViewProgrampage3