import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import "./Form.css"
import emailjs from 'emailjs-com';
import $ from 'jquery';
import 'jquery-validation';

const Form = () => {
  const [status, setStatus] = useState(false);

  const initData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    questions: "",
  };

  const formRef = useRef(null);

  useEffect(() => {
    $(formRef.current).validate({
      rules: {
        name: {
          required: true,
          minlength: 3,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 10,
        },
        subject: {
          required: true,
        },
        questions: {
          required: true,
        },
      },
      messages: {
        name: {
          required: "Please enter your name",
          minlength: "Name should be at least 5 characters long",
        },
        email: {
          required: "Please enter your email",
          email: "Please enter a valid email address",
        },
        phone: {
          required: "Please enter your phone number",
          digits: "Please enter only digits",
          minlength: "Phone number should be 10 digits long",
          maxlength: "Phone number should be 10 digits long",
        },
        subject: {
          required: "Please enter a subject",
        },
        questions: {
          required: "Please enter your message",
        },
      },
      errorPlacement: function(error, element) {
        error.addClass('text-danger');
        error.insertAfter(element);
      },
      submitHandler: function(form) {
        handleSubmit();
      }
    });
  }, []);

  const handleSubmit = () => {
    const formData = new FormData(formRef.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    emailjs.send("service_9g9o3k8", "template_2lzywmu", data, "eDmw1Leki7QsrrDBv")
      .then(
        (result) => {
          console.log(result.text);
          setStatus(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className='m-5' ref={formRef}>
      <div className="row">
        <div className="p-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <input
            className="form-control p-3"
            type="text"
            name="name"
            placeholder='Enter name (min. 5 characters)'
          />
        </div>
        <div className="p-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <input
            className="form-control p-3"
            type="text"
            name="phone"
            placeholder='Enter Phone (10 digits)'
          />
        </div>
      </div>
      <div className="row">
        <div className="p-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <input
            className="form-control p-3"
            type="email"
            name="email"
            placeholder='Enter Email'
          />
        </div>
        <div className="p-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <input
            className="form-control p-3"
            type="text"
            name="subject"
            placeholder='Enter Subject'
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 p-3">
          <textarea
            className={`form-control resize-none p-3`}
            name="questions"
            placeholder='Enter Message'
          />
        </div>
      </div>
      <div className="formbtn-main row">
        <div className=" col-12">
          <Button type="submit" className="formbtn w-22 rounded-10px">Request call back</Button>
        </div>
      </div>
    </form>
  );
};

export default Form;





// import { complex } from 'framer-motion';
// import React, { useState } from 'react'
// import { Button } from 'react-bootstrap'
// import emailjs  from 'emailjs-com'

// const Form = () => {
//   const initData={
//     name:"",
//     email:"",
//     phone:"",
//     subject:"",
//     questions:"",
//   }
//   const [status,setStatus]=useState(false)
//   const [data,setdata]=useState(initData)
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setdata({ ...data, [name]: value });
//   };
//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     emailjs.send("service_9g9o3k8","template_2lzywmu",data,"eDmw1Leki7QsrrDBv")
//     .then((result)=>{
//       console.log(result.text)
//       setStatus(true)
//       setdata(initData)
//     },(error)=>{
//       console.log(error.text);
//     })
//     console.log(data)
//   }
//   return (
//     <form className='m-5' onSubmit={handleSubmit}>
//   <div className="row ">
//     <div className="p-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
//       <input
//         className="form-control p-3"
//         type="text"
//         name="name"
//         value={data?.name}
//         onChange={handleChange}
//         placeholder='Enter name'
//       />
//     </div>
//     <div className=" p-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
      
//       <input
//         className="form-control p-3 "
//         type="text"
//         name="phone"
//         value={data?.phone}
//         onChange={handleChange}
//         placeholder='Enter Phone'
//       />

//     </div>
//   </div>
//   <div className="row ">
//     <div className=" p-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
//       <input
//         className="form-control p-3"
//         type="text"
//         name="email"
//         value={data?.email}
//         onChange={handleChange}
//         placeholder='Enter Email'
//       />
//     </div>
//     <div className="p-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
//       <input
//         className="form-control p-3"
//         type="text"
//         name="subject"
//         value={data?.subject}
//         onChange={handleChange}
//         placeholder='Enter Password'/>
//     </div>
//   </div>
//   <div className="row ">
//     <div className="col-12 p-3">
//       <textarea
//         className="form-control resize-none p-3"
//         name="questions"
//         value={data?.questions}
//         onChange={handleChange}
//         placeholder='Enter Message'
//       />
//      {status&& <p style={{color: "green",fontSize: "15px"}}>Email sent sucessfully!!</p>}
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-12">
//     <Button type="submit" className="w-22 rounded-10px" style={{ color: '#fff', width: '163px', height: '46px', backgroundColor:"#854DCE" }} >Request call back</Button>
//     </div>
//   </div>
// </form>

//   )
// }

// export default Form









