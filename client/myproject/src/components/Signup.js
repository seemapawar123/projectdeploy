import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Signup=()=>{
  const history = useHistory()
  const [user,setUser]=useState({
    username:"",
    lastname:"",
    email:"",
    password:"",
    
    dob:""
  });
  //hadle input
  const handleInput =(event)=>{
    let name =event.target.name;
    let value=event.target.value;
    setUser({...user,[name]:value})
  }
  const handleSubmit =async(event)=>{
    event.preventDefault();
    const {username,lastname,email,password,dob}=user;
    try{
      const res=await fetch('/signup',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,lastname,email,password,dob
        })
      })
      console.log(res.status)
      if(res.status===400 || !res){
        window.alert(
          "already used details"
        );
      }else{
        window.alert("registered successfully");
        history.push("/login")
      }
    }catch(error){
      console.log(error)
    }
  }
    return(
        <>
<form id="ff" onSubmit={handleSubmit} method="POST" >

  
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form3Example1" className="form-control"  name="username" value={user.username} onChange={handleInput} />
        <label className="form-label" for="form3Example1">First name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form3Example2" className="form-control"  name="lastname" value={user.lastname} onChange={handleInput} />
        <label className="form-label" for="form3Example2">Last name</label>
      </div>
    </div>
  </div>

  
  <div className="form-outline mb-4">
    <input type="email" id="form3Example3" className="form-control"  name="email" value={user.email} onChange={handleInput} />
    <label className="form-label" for="form3Example3">Email address</label>
  </div>

  
  
  <div className="form-outline mb-4">
    <input type="password" id="form3Example4" className="form-control"  name="password" value={user.password} onChange={handleInput} />
    <label className="form-label" for="form3Example4">Password</label>
  </div>


  <div className="form-outline mb-4">
    <input type="date" id="form3Example4" className="form-control" name="dob" value={user.dob} onChange={handleInput} />
    <label className="form-label" for="form3Example4">DOB</label>
  </div>

  
  <div className="form-check className-flex justify-content-center mb-4">
    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
    <label className="form-check-label" for="form2Example33">
      Subscribe to our newsletter
    </label>
  </div>

  
  <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
  


  <div className="text-center">
    <p>or sign up with:</p>
    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fa fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fa fa-google"></i>
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fa fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i class="fa fa-github"></i>
    </button>
  </div>
  <NavLink to="/signin">Already You Have An Account</NavLink>
</form>


        </>
    )
}

export default Signup;