import React from "react";
import "./ViewProgramPage5.css";
import According2 from "../../../pages/Accordion2/According2";

const ViewProgramPage5 = () => {
  return (
    <section>
      <div className="container">
        <div className="vphtag">
          <h1>
            The <span>TechHut Recipe</span> to Get You Placed
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
          <img className="vpimg" src="images/Webinar.gif" alt="" />
          </div>
          <div className="col-lg-6">
            <According2 />
          </div>
        </div>
      </div>
    </section>

    // <din className="container">
    //   <div className="vphtag">
    //     <h1>
    //       The <span>Techhut Recipe</span> to Get You Placed
    //     </h1>
    //   </div>
    //   <div className="row">
    //     <div className="col-lg-6">
    //       <div>
    //         <img className="vpimg" src="images/Webinar.gif" alt="" />
    //       </div>
    //     </div>

    //     <div className="col-lg-6">
    //       <According2 />
    //     </div>
    //   </div>
    // </din>
  );
};

export default ViewProgramPage5;
