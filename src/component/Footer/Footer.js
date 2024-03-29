import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-con container-fluid " style={{ width: '100%' }}>
      <div className="ro1 row">
        <div className="col-lg-3">
          <div className="text mt-5">
            <h3 className="md text-center">About Tech Hut Academy</h3>
            <p className="md text-center">
            Whether you are a novice or an experienced practitioner, our commitment at Tech Hut<br /> Academy is to guide you along the way towards <br />becoming an accomplished full-stack developer.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="icon1" style={{width:'80%'}} >
            <div className="imgicon d-flex justify-content-center mt-5">
              <img className="mr-2" style={{ width: '30px', height: '30px' }} src="images/Footer_icon1.png" alt="" />
              <h4 style={{ marginLeft: '10px' }}>About US</h4>
            </div>
            <hr className="hrtag mb-0 mb-2 " />
            <div className="ptags">
              <p>Placement Stories</p>
              <p>Job Board</p>
              <p>FAQ</p>
              <p>Blogs</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="icon1" style={{width:'80%'}} >
            <div className="imgicon d-flex justify-content-center mt-5">
              <img className="mgtag mr-2" style={{ width: '30px', height: '30px' }} src="images/Footer_icon2.png" alt="" />
              <h4 style={{ marginLeft: '10px' }}>Quick Links</h4>
            </div>
            <hr className="hrtag mb-0 mb-2 " />
            <div className="ptags">
              <p>Term and Conditions</p>
              <p>Privacy Policy</p>
              <p>Site Map</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3" >
          <div className="icon1" style={{width:'80%'}} >
            <div className="imgicon d-flex justify-content-center mt-5">
              <img className="mr-2" style={{ width: '21px', height: '30px' }} src="images/Footer_icon3.png" alt="" />
              <h4 style={{ marginLeft: '10px' }}>Address</h4>
            </div>
            <hr className="hrtag mb-0 mb-2 " />
            <div className="ptags">
              <p style={{display: "flex", gap: "10px" }} className="pmg"><img style={{width:"15px", height:"15px"}} src="images/email_icon.png" alt="" /> info@techhutacademy.com</p>
              <p> <img src="images/phone.png" alt="" /> +91 886-097-8020</p>
              <p><img src="images/location_icon.png" alt="" /> D-77, Sector 63, Noida,UP, 201301</p>
            </div>
          </div>
        </div>


      </div>
      <hr />
      <div className="ro2 row">
        <div className="boot1 col-lg-3">
          <p>2024 © TechHut Academy</p>
        </div>
        <div className="boot1 col-lg-6">
          <p>(We are a subsidiary company of Webpristine Technologies PVT.Ltd)</p>
        </div>
        <div className="boot2 col-lg-3">
          <img src="images/facebook_icon.png" alt="" />
          <img src="images/youtube_icon.png" alt="" />
          <img src="images/instagram_icon.png" alt="" />
          <img src="images/linkedin_icon.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
