import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Signup from './components/Signup';
import {Route,Switch} from 'react-router';
import Footer from './components/Footer';
import ProtectedRoute from './protectedRoute';
import { useState } from 'react';
import { useEffect } from 'react';
import Signout from './components/Signout';


function App() {

  
const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

 
  return (
    <>
      
      <Navbar></Navbar>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      < ProtectedRoute exact path="/signin" component={Signin}auth={auth1}></ProtectedRoute>
      <ProtectedRoute exact path="/signup" component={Signup}auth={auth1}></ProtectedRoute>
      <ProtectedRoute exact path="/logout" component={Signout}auth={auth}></ProtectedRoute>
      
      </Switch>

      <Footer></Footer>
    </>
  );
}

export default App;
