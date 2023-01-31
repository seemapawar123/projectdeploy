import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Signin=()=>{
  const history = useHistory()
  const [user,setUser]=useState({
   
    email:"",
    password:"",
    
  
  });
  //hadle input
  const handleChange =(event)=>{
    let name =event.target.name;
    let value=event.target.value;
    setUser({...user,[name]:value})
  }
  const handleSubmit =async(event)=>{
    event.preventDefault();
    const {email,password}=user;
    try{
      const res=await fetch('/signin',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
         email,password
        })
      })
      console.log(res.status)
      if(res.status===400 || !res){
        window.alert(
         "invalid credentias"
        );
      }else{
        window.alert("rlogged insuccessfully");
        window.location.reload();
        history.push("/")
      }
    }catch(error){
      console.log(error)
    }
  }
    return(
        <>





<form id="ff"  onSubmit={handleSubmit} method="POST">
  
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1 pp" className="form-control"  name="email" value={user.email} onChange={handleChange} />
    <label  class="form-label" for="form2Example1">Email address</label>
  </div>

  
  <div class="form-outline mb-4">
    <input   type="password" id="form2Example2" className="form-control"  name="password" value={user.password} onChange={handleChange} />
    <label   class="form-label" for="form2Example2">Password</label>
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
        <label class="form-check-label" for="form2Example34"> Remember me </label>
      </div>
    </div>

    <div class="col">
      
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  
  <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

  
  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fa fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fa fa-google"></i>
    </button>

    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fa fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fa fa-github"></i>
      
    </button>
  </div>
  <NavLink className="cc" to="/signup">Create Your Account</NavLink>
</form>

</>
    )
}

export default Signin;
