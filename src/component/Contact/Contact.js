import React from "react";
import "./Contact.css";
import Form from "../../pages/Form/Form";


const Contact = () => {
  return (
    <div className="con-main container mt-5">
      <div className="row ">
        <div className="contact1 col-12 col-lg-5 col-sm-12 col-xs-12">
          <div className="contact-del">
            <h1>
              Book an <span>Appointment</span>
            </h1>
            <div className="d-flex flex-column align-items-center  w-100">
              <div className="ar1 mt-2 ">
                <img src="images/ion_call.png" alt="" />
              </div>
              <p className="text-con mt-4">+91 88609 78020</p>
            </div>
            <div className="d-flex flex-column align-items-center  w-100">
              <div className="ar1 mt-2">
                <img src="images/email.png" alt="" />
              </div>
              <p className="text-con  mt-4">info@techhutacademy.com</p>
            </div>
            <div className="d-flex flex-column align-items-center  w-100">
              <div className="ar1 mt-2">
                <img src="images/location.png" alt="" />
              </div>
              <p className="text-con text-center mt-4 d-flex flex-column"><span>2nd Floor, D-77, Sector 63,</span> <span>Noida 201301</span></p>
            </div>
          </div>
        </div>

        <div className="  col-lg-7 col-12 col-sm-12 col-xs-12">
          
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
