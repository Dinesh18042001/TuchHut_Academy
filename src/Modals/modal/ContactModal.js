import React, { useState, useEffect } from "react";
import "./ContactModal.css";
import $ from "jquery";

const ContactModal = ({ showModal, openModal }) => {
  const closeModal = () => {
    openModal(!showModal);
  };

  useEffect(() => {
    // Initialize form validation using jQuery
    $("#contactForm").validate({
      rules: {
        candidateFullName: "required",
        email: {
          required: true,
          email: true,
        },
        phoneNumber: {
          required: true,
          number: true,
        },
        collegeCompany: "required",
        graduationExperience: "required",
        dreamCompany: "required",
      },
      messages: {
        candidateFullName: "Please enter your full name",
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email address",
        },
        phoneNumber: {
          required: "Please enter your phone number",
          number: "Please enter a valid phone number",
        },
        collegeCompany: "Please enter your college or company name",
        graduationExperience: "Please enter your graduation year or experience",
        dreamCompany: "Please enter your dream company",
      },
      errorElement: "div",
      errorPlacement: function(error, element) {
        // Add Bootstrap error class to parent div
        error.addClass("invalid-feedback");
        element.closest(".form-floating").append(error);
      },
      highlight: function(element, errorClass, validClass) {
        $(element).addClass("is-invalid").removeClass("is-valid");
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).removeClass("is-invalid").addClass("is-valid");
      },
    });
  }, [showModal]); // Re-run effect when showModal changes

  const handleDownload = (event) => {
    event.preventDefault(); // Prevent default form submission
    
    // Check if form is valid
    if ($("#contactForm").valid()) {
      // Gather form data
      const formData = {
        candidateFullName: $("#candidateFullName").val(),
        email: $("#exampleInputEmail1").val(),
        phoneNumber: $("#phoneNumber").val(),
        collegeCompany: $("#collegeCompany").val(),
        graduationExperience: $("#graduationExperience").val(),
        dreamCompany: $("#dreamCompany").val(),
      };
  
      // Print form data to console
      console.log("Form Data:", formData);
  
      // Check if form data has been submitted previously
      const storedFormData = JSON.parse(localStorage.getItem("submittedFormData"));
      if (storedFormData && JSON.stringify(storedFormData) === JSON.stringify(formData)) {
        console.log("Data has already been submitted");
        return; // Exit the function if data has already been submitted
      }
  
      // Send form data to backend
      fetch("http://localhost:8000/contactmodal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response.ok) {
          console.log("User data sent successfully");
          // Store submitted form data in local storage
          localStorage.setItem("submittedFormData", JSON.stringify(formData));
          return response.json();
        } else {
          throw new Error("Failed to send user data to server");
        }
      })
      .then(data => console.log("Response from server:", data))
      .catch(error => console.error("Error:", error));
    }
  };
  

  return (
    <>
      {showModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">

                <div>
                  <h4 className="modal-title1" >Apply Now</h4>
                  {/* <p className="modal1-ptag" >Next Batch starts on February</p> */}
                </div>
                
                <button
                  type="button"
                  style={{ borderRadius: "5px" }}
                  className="close"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="radiobtn2">
                  <h4>
                    Are you a College Student, Working Professional or Graduated
                    but not working?
                  </h4>

                  <div className="form-check" style={{ marginTop: "20px" }}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="College Student"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      College Student
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="Working Professional"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      Working Professional
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios3"
                      value="Graduated but not working"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios3"
                    >
                      Graduated but not working
                    </label>
                  </div>
                </div>
              </div>
              <div className="modalsubmitform" style={{ padding: "35px" }}>
                <form id="contactForm">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="candidateFullName"
                          placeholder=" "
                          name="candidateFullName"
                        />
                        <label htmlFor="candidateFullName">
                          Candidate Full Name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder=" "
                          name="email"
                        />
                        <label htmlFor="exampleInputEmail1">Email ID</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="phoneNumber"
                          placeholder=" "
                          name="phoneNumber"
                        />
                        <label htmlFor="phoneNumber">Phone Number</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="collegeCompany"
                          placeholder=" "
                          name="collegeCompany"
                        />
                        <label htmlFor="collegeCompany">
                          College / Company Name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="graduationExperience"
                          placeholder=" "
                          name="graduationExperience"
                        />
                        <label htmlFor="graduationExperience">
                          Year of Graduation / Experience
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="dreamCompany"
                          placeholder=" "
                          name="dreamCompany"
                        />
                        <label htmlFor="dreamCompany">Dream Company</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  type="button"
                  className="btn col-md-6"
                  style={{background:"#854DCE", color: "#fff"}}
                  onClick={handleDownload}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
