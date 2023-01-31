import React, { Component } from "react";
import {Redirect,Route} from "react-router";

const ProtectedRoute=({auth, component:Component, ...rest})=>{
    return(
        <div>
            <Route {...rest} render={(props)=>{
                if(auth) return <Component {...props}/>
                if(!auth) return <Redirect to={{path:'/',state:{form:props.location}}}/>
            }}/>
        </div>
    )
}

export default ProtectedRoute;