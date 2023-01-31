import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Contact=()=>{
    const [msg,setMsg]=useState({
        name:"",
        email:"",
        subject:"",
        message:""
    });
    //handle inputs
    const handleChange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        setMsg({...msg,[name]: value})
    }
    const handleSubmit=async (event)=>{
        event.preventDefault();
        const {name,email,subject,message}=msg;
        try{
            const res =await fetch('/message',{
                method:"POST",
                headers:{
                   "Content-Type":"application/json" 
                },
                body:JSON.stringify({
                   name,email,subject,message
                })
            })
            console.log(res.status)
            if(res.status===400 || !res){
                window.alert("message not sent try agrain")
;            }else{
    window.alert("message sent");
    setMsg({
        name:"",
        email:"",
        subject:"",
        message:""
    })
}
        }catch(error){
            console.log(error)
        }
    }
    return(
        <>
        
        <section id="contact">
            <div className="container my-5 py-5">
              <div className="row mb-5">
                <div className="col-12">
                  <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                  <h1 className="display-6 text-center mb-4">
                    Have Some <b>Question?</b>
                  </h1>
                  <hr className="w-25 mx-auto" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <img src="https://cdn.pixabay.com/photo/2016/12/15/12/24/contact-us-1908762__340.png" alt="Contact" className="w-75" />
                </div>
                <div className="col-md-6">
                  <form onSubmit={handleSubmit} method="POST">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="John Smith"
                        name="name"
                        value={msg.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        name="email"
                        value={msg.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        name="subject"
                        value={msg.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Your Message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        name="message"
                        value={msg.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-primary rounded-pill px-4">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
    )
};


        


        
export default Contact;