import React from 'react';
import './Log.css';
import { NavLink } from 'react-router-dom'
function Log() {
  return (
    <div className='box'>
    <div className="App">
      <input type='text' placeholder='Username'></input><br/>
      <input type='text' placeholder='Password'></input>
    </div>
    <button className='log'>Log in</button>
    <div className='or'> -------OR-------</div>
    <div className="forget">Forget Password ?</div>
    <div className='acc'> Don't have an account? </div>
   
    <NavLink to="/Sign"><button className='sign'>Sign up</button></NavLink>
    </div>
  );
}

export default Log;