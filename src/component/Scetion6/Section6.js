import React from "react";
import "./Scetion6.css";

const Section6 = () => {
  return (
    <div className="container">
      <div className="sec6-text">
        <h2>
        Don't Just Take Our Word for It: Hear from <span>Our Student</span>
        </h2>
      </div>

      <div className="row">

        <div className="img-sec3 col-lg-3">
          <img src="images/Rectangle1.png" alt="" />

          <div className="sec6">
            <h2>Vivek Tevetia</h2>
            <p>I never thought I could become a full stack developer until I joined Tech Hut Academy. The support and guidance I received were invaluable.</p>
          </div>
        </div>

        <div className="img-sec3 col-lg-3">
          <img src="images/Rectangle2.png" alt="" />

          <div className="sec6">
            <h2>Lucky Sharma</h2>
            <p>The hands-on projects and practical approach to learning at Tech Hut Academy helped me land my dream job as a full stack developer.</p>
          </div>
        </div>
        <div className="img-sec3 col-lg-3">
          <img src="images/Rectangle3.png" alt="" />
          <div className="sec6">
            <h2>Namrata Gautam</h2>
            <p>I was amazed by the depth of knowledge and expertise of the instructors at Tech Hut Academy. The curriculum is well-structured, and the hands-on projects helped solidify my understanding of key concepts</p>
          </div>
        </div>

        <div className="img-sec3 col-lg-3">
          <img src="images/Rectangle4.png" alt="" />
          <div className="sec6">
            <h2>Aryan Gupta</h2>
            <p>TechHut Academy exceeded all my expectations. The community atmosphere fostered collaboration and learning, and I'm grateful for the connections I've made along the way</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
