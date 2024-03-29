import React from "react";
import "./Section2.css";

const Section2 = () => {
  return (
    <div className="container">
      <div className="section2-h1">
        <h1>Why TechHut ?</h1>
      </div>
      <div className="row py-4 justify-content-center">

        <div className="col-lg-3">
          <div className="main">
          <div className="img-wraper">
            <img src="images/vrctor.png" alt="" />
          </div>

          <div className="contant">
            <h6>Live Online Classes</h6>
          </div>
          <div className="contant_p">
            <p>
            For your Full Stack Development dreams, our Live Online program is flexible enough to suit your needs without compromising on quality.
            </p>
          </div>
        </div>
        </div>

        <div className="col-lg-3">
          <div className="main">
          <div className="img-wraper">
            <img src="images/vrctor.png" alt="" />
          </div>

          <div className="contant">
            <h6>Internship Certificate</h6>
          </div>
          <div className="contant_p">
            <p>
            Acquire the competitive advantage by using the certification of our Full Stack Development.
            </p>
          </div>
        </div>
        </div>

        <div className="col-lg-3">
          <div className="main">
          <div className="img-wraper">
            <img src="images/vrctor.png" alt="" />
          </div>

          <div className="contant">
            <h6>Professional Guidance</h6>
          </div>
          <div className="contant_p">
            <p>
            Our experienced instructors are dedicated to providing personalised support, ensuring your success throughout the program.
            </p>
          </div>
        </div>
        </div>

        <div className="col-lg-3">
          <div className="main">
          <div className="img-wraper">
            <img src="images/vrctor.png" alt="" />
          </div>

          <div className="contant">
            <h6>100% Job Assistance</h6>
          </div>
          <div className="contant_p">
            <p>
            Upon completing this course, you will be able to unlock a world of job possibilities at technology companies around the globe.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
