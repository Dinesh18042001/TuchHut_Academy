import React, { useState,} from "react";
import { Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import ContactModal from "../../Modals/modal/ContactModal";
import ContactModal2 from "../../Modals/Modal2/ContactModal2";
import "./Home.css";

const Home = () => {

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const openModal1 = () => {
    setShowModal1(!showModal1);
  };

  const openModal2 = () => {
    setShowModal2(!showModal2);
  };

  return (
    <div className="section1">
      <div className="container mt-5">
        <div className=" row1 row">
          <div className="home col-lg-6">
            <div className="part1">
              <h1>
                Empower Your&nbsp;
                <span>
                  <TypeAnimation
                    sequence={[
                      "FULL-STACK",
                      2000,
                      "",
                      2000,
                      "FULL-STACK",
                      2000,
                      "",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "1em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </span>
                <br />
                Journey
              </h1>
              <p>
                Unlock the world of Full Stack Development with Tech Hut
                Academy, your gateway to mastering the art of creating dynamic
                web applications from start to finish.
              </p>

              <div className="btn1" style={{ display: "flex", gap: "10px" }}>
                <Button
                  variant="outline"
                  className="common-btn rounded-pill"
                
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#854DCE";
                    e.target.style.color = "#fff"; 
                  }}
                  
                
                  onClick={openModal2}
                >
                  Download Syllabus
                </Button>

                <Link
                  // to="/applynow"
                  className="libtn w-22 rounded-pill"
                  style={{
                    borderColor: "#854DCE",
                    width: "100%",
                    maxWidth: "200px",
                    height: "46px",
                  }}
                   onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#854DCE")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                  onClick={openModal1}
                >
                  Apply Now
                </Link>

              </div>
            </div>
          </div>
          <ContactModal showModal={showModal1} openModal={(dt)=>{setShowModal1(dt)}}/>
          <ContactModal2 showModal={showModal2} openModal={(dt)=>{setShowModal2(dt)}}/>
          <div className="ani col-lg-5">
            <img src="images/ani.gif" alt="" />
          </div>
        </div>
      </div>

      <div className="surface">
        <img src="images/Group 105684.png" alt="" />
      </div>
    </div>
  );
};

export default Home;

