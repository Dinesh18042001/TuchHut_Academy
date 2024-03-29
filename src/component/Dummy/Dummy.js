import React from "react";
import { Button } from "react-bootstrap";
import "./Dummy.css";
import { Link } from "react-router-dom";

const Dummy = () => {
  return (
    <div className="conta overflow-hidden">
      <div className="dummyp">
        <h1>Master Full Stack Development: Earn Your Certification Today</h1>
        <p>
          By enrolling in our all-encompassing certification programme, you will
          be able to empower your journey in Full Stack Development.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-6 ">
          <div className="img-sec">
            <img src="images/Dummy.png" alt="" style={{ width: "90%" }} />
          </div>
        </div>

        <div className="dummypart2 col-lg-6">
          <div className="D-text">
            <h3>
              Full Stack <span>Certification</span>
            </h3>

            <div className="btn-container">
              <div className="btn2">
                <Button 
                  style={{ backgroundColor: "#EFF6FE", color: "#854DCE" }}
                >
                  <img src="images/icon1.png" alt="" /> 40 Hours
                </Button>
              </div>
              <div className="btn2">
                <Button
                  style={{ backgroundColor: "#EFF6FE", color: "#854DCE" }}
                >
                  <img src="images/icon2.png" alt="" />
                  10 Modules
                </Button>
              </div>
            </div>

            <div className="text-part1">
              <h5>Interactive Online Training:</h5>
              <p>
                Experience interactive live sessions led by industry
                professionals,<br />allowing for real-time interaction and
                personalised feedback.
              </p>
            </div>

            <div className="text-part1">
              <h5>Hands-On Tech Exploration:</h5>
              <p>
                Dive deep into HTML, CSS, JavaScript, Node.js, React, and more <br />
                through hands-on projects and real-world applications.
              </p>
            </div>

            <div className="btn-part">
              <Button 
                variant="outline"
                className="button1  w-22 rounded-pill"
              >
                Join now
              </Button>

              <Link
                to="/viewpragrem" 
                className="routbtn w-22 rounded-pill d-flex align-items-center justify-content-center"
              >
                View Program
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dummy;
