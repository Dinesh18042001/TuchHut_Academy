 import React from 'react'
 import "./Faq.css";
import Accordion1 from '../../pages/Accordion/Accordion';
 
 const Faq = () => {
   return (
    <div className="containerFaq overflow-hidden">
     <div className="row">

     <div className="Faqtext">          
       <h1>FAQ</h1>
        <p>Frequently Ask a Qustions</p>
        </div>
         
         <div className="faqimg col-lg-4">
            <h3>Have any <span>Questions?</span></h3>
          <img src="images/Faq.png" alt="" />
         </div>
         <div className="col-lg-8 ">
            <Accordion1/>
         </div>

     </div>
    </div>
   )
 }
 
 export default Faq







// import React from 'react'
// import "./Faq.css";
// import Accordion from '../../pages/Accordion/Accordion';

// const Faq = () => {
//   return (
//     <div className="containerFaq">
//         <div className="Faqtext">
//             <h1>FAQ</h1>
//             <p>Frequently Ask a Qustions</p>
//         </div>

//         <div className="rowFaq">
//             <div className="faqimg col-lg-6">
//             <h2>Have any <span>Questions?</span></h2>
//             <img src="images/Faq.png" alt=""/>
//             </div>
//             <div className="col-lg-6">
                
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Faq