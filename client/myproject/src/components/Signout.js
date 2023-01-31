import React from 'react';
import {useHistory} from 'react-router';
import { useEffect } from 'react';

const Signout=()=>{
    const history=useHistory();
    const signout=async() =>{
        try{
            const res=await fetch("/logout",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:("include")
            });
            if (res.status===401||!res)
            {
                window.alert("Please logout Later")
            }else{
                history.push("/");
                window.location.reload()
            }
        }catch(error){
            console.log(error)
        }
    }
useEffect(()=>{
    signout();
},[]);
    return(
    <div>

    </div>

    )
}
export default Signout;