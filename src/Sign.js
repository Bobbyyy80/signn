import './Sign.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
function Sign() {
  return (
    <div className='box'>
       <input type='text' placeholder='Username'></input><br/>
       <input type='text' placeholder='Email ID'></input>
       <input type='number' placeholder='mobile No.'></input><br/>
       <input type='text' placeholder='Password'></input>
       <div className='content'>People who use our service may have uploaded your 
        contact information to Instagram. Learn More</div>
     <div className='have'>Already Have an account?<NavLink to="/Log"><br/>  
     <button className='logg'> Log in</button></NavLink></div>

    </div>
  );
}

export default Sign;