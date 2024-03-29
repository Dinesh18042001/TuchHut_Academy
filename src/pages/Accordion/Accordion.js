import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "./Accordion.css";

const Accordion1 = () => {
    return (
      <div class="accord accordion my-3" id="accordionExample">

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What qualities and skills are essential for a successful software developer?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accbody accordion-body">
            <strong>Ans.</strong> Proficiency in front-end and back-end technologies, problem-solving skills, and the ability to adapt to new technologies.
          </div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             What is the typical duration for completion?
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accbody accordion-body">
            <strong>Ans.</strong> The duration varies based on individual dedication and prior experience, but typically ranges from 6 to 12 months.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Is your program suitable for individuals without any prior coding experience?
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accbody accordion-body">
            <strong>Ans.</strong> Yes, our program targets beginners with no programming background.
          </div>
        </div>
      </div>
    </div>
    );
}

export default Accordion1;
