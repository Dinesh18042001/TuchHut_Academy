import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./silder.css";

const Slider = () => {
  return (
    <div className="main1">
      <div className="col">
        <h1>
          Join a Community of Driven Professionals and Expand Your{" "}
          <span>Network</span>
        </h1>
        <p>Join our vibrant community and connect with people who think just like you. Share ideas, work together on projects,</p>
        <p>and speed up your learning path as you keep moving with your fellow learners from all over the world.</p>
      </div>

     <div style={{marginTop: "50px"}}>
     <OwlCarousel
        className="owl-theme1"
        loop
        margin={10}
        nav={false}
        dots={false}
        items={6} 
        responsive={{ 
          0: {
            items: 4 
          },
          768: {
            items: 6 
          }
        }}
        autoplay 
        autoplayTimeout={3000} 
        animateOut="fadeOut" 
        animateIn="fadeIn" 
      >
        <div className="item" style={{ textAlign: "center" }}>
          <img
            src="images/arcesium.png"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="images/adobe.png"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="images/swiggy.png"
          />
        </div>
        <div className="item">
          <img
            src="images/myntra.png"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="images/swiggy.png"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="images/pay.png"
            alt=""
          />
        </div>
      </OwlCarousel>
     </div>
      
    </div>
  );
};

export default Slider;




