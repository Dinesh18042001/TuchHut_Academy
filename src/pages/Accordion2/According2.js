import React from "react";
import "./According2.css";

const According2 = () => {
  return (
    <div className="accord2">
      <div
        className="acc2 accordion accordion-flush"
        id="accordionFlushExample"
      >
        <div className="accitem accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={{ backgroundColor: "#fee2f6",borderRadius: '10px' }} // Button background color
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{ backgroundColor: "#fee2f6",borderRadius: '10px' }}
            >
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the first item's accordion body.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={{ backgroundColor: "#fee2e2",borderRadius: '10px' }}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{ backgroundColor: "#fee2e2",borderRadius: '10px' }}
            >
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the second item's accordion body. Let's imagine this being filled
              with some actual content.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={{ backgroundColor: "#e2fefc" ,borderRadius: '10px' }}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{ backgroundColor: "#e2fefc" ,borderRadius: '10px' }}
            >
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the third item's accordion body. Nothing more exciting happening
              here in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
              style={{ backgroundColor: "#f2e2fe",borderRadius: '10px' }}
            >
              Accordion Item #4
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{ backgroundColor: "#f2e2fe" ,borderRadius: '10px' }}
            >
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the fourth item's accordion body.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapsefive"
              aria-expanded="false"
              aria-controls="flush-collapsefive"
              style={{ backgroundColor: "#e0e7ff" ,borderRadius: '10px' }}
            >
              Accordion Item #5
            </button>
          </h2>
          <div
            id="flush-collapsefive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingfive"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{ backgroundColor: "#e0e7ff" ,borderRadius: '10px' }}
            >
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the third item's accordion body. Nothing more exciting happening
              here in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
              style={{ backgroundColor: "#e2fefc",borderRadius: '10px'}}
            >
              Accordion Item #6
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingSix"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{ backgroundColor: "#e2fefc",borderRadius: '10px' }}
            >
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the third item's accordion body. Nothing more exciting happening
              here in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-heading">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseShiven"
              aria-expanded="false"
              aria-controls="flush-collapseShiven"
              style={{ backgroundColor: "#fee2e2", borderRadius: '10px'}}
            >
              Accordion Item #7
            </button>
          </h2>
          <div
            id="flush-collapseShiven"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingShiven"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{ backgroundColor: "#fee2e2", borderRadius: '10px'}}
            >
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the third item's accordion body. Nothing more exciting happening
              here in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default According2;
