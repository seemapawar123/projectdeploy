import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar=()=>{
    return(
        <div>
          
          
            <nav className="navbar navbar-expand-lg navbar-light bg">
  <div className="container-fluid">
   <NavLink className="navbar-brand" to="#"><img id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaI-_XCCqrNImhYEFvcanPgrgQ7hcijnQzzQr3DFgOww&s"></img></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <NavLink className="nav-link active ab" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="nav-link" to="/signin">Signin</NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="nav-link "to="/signup ">Signup</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )

    
}
export default Navbar;