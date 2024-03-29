import React, { useState } from "react";
import "./Section8.css";

const Section8 = () => {
  const [slider, setSlider] = useState("1");

  const handleMouseEnter = (index) => {
    setSlider(index);
  };

  return (
    <div className="section">
    <div className="main-container container">
      <div className="row">
        <div className="area1 col-lg-4">
          <h4>Meet the Team Driving Success at TechHut Academy</h4>
          <p>
            Discover the enthusiastic instructors and business experts who are
            the brains behind Tech Hut Academy. We commit ourselves to enabling
            budding programmers like you to realize their ambitions.
          </p>
        </div>
        <div className="col-lg-8 mt-4">
          <div className="row">
            <div
              className={`overflow-hidden ${
                slider === "1" ? "col-6" : "col-2"
              }`}
              onMouseEnter={() => handleMouseEnter("1")}
            >
              {slider === "1" && (
                <div className="glasscard">
                  <h5>Title 1</h5>
                  <p>Position</p>
                  <img
                    className="glassimg"
                    src="images/linkedin_icon.png"
                    alt=""
                  />
                </div>
              )}
              <img
                className="section8-img"
                src="images/student1.jpg"
                alt=""
              />
            </div>

            <div
              className={`overflow-hidden ${
                slider === "2" ? "col-6" : "col-2"
              }`}
              onMouseEnter={() => handleMouseEnter("2")}
            >
              {slider === "2" && (
                <div className="glasscard">
                  <h5>Title 2</h5>
                  <p>Position</p>
                  <img
                    className="glassimg"
                    src="images/linkedin_icon.png"
                    alt=""
                  />
                </div>
              )}
              <img
                className="section8-img"
                src="images/student2.jpg"
                alt=""
              />
            </div>

            <div
              className={`overflow-hidden ${
                slider === "3" ? "col-6" : "col-2"
              }`}
              onMouseEnter={() => handleMouseEnter("3")}
            >
              {slider === "3" && (
                <div className="glasscard">
                  <h5>Title 3</h5>
                  <p>Position</p>
                  <img
                    className="glassimg"
                    src="images/linkedin_icon.png"
                    alt=""
                  />
                </div>
              )}
              <img
                className="section8-img"
                src="images/student3.jpg"
                alt=""
              />
            </div>

            <div
              className={`overflow-hidden ${
                slider === "4" ? "col-6" : "col-2"
              }`}
              onMouseEnter={() => handleMouseEnter("4")}
            >
              {slider === "4" && (
                <div className="glasscard">
                  <h5>Title 4</h5>
                  <p>Position</p>
                  <img
                    className="glassimg"
                    src="images/linkedin_icon.png"
                    alt=""
                  />
                </div>
              )}
              <img
                className="section8-img"
                src="images/student4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Section8;
