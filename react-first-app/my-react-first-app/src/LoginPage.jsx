// //login page for full stack project
import React, { useState, useEffect } from 'react';
import './LoginPage.css';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Plane } from 'lucide-react';

function LoginPage()
{
  const [position,setPosition]=useState({x:0,y:0});

  const handleMouseMove=(event)=>{
    const {clientX, clientY}=event;
    setPosition({x:clientX,y:clientY});
  };

  useEffect(()=>{
    window.addEventListener('mousemove',handleMouseMove);
    return()=>{
      window.removeEventListener('mousemove',handleMouseMove);
    };
  },[]);
    return(
        <div className='wrap'>
          <div className='cursor-follow' style={{left:`${position.x - 15}px`,top:`${position.y - 15}px`}}>
            <Plane className='plane'></Plane>
          </div>
            <div className='form-box'>
                <form action="">
                    <h1>LOGIN</h1>
                    <div className='input-box'>
                        <FaUserAlt className='icon'/>
                        <input className='user-input' type="text" placeholder='USERNAME' required/>
                    </div>
                    <div className='input-box'>
                        <RiLockPasswordFill className='icon'/>
                        <input className='user-input' type="password" placeholder='PASSWORD' required/>
                    </div>
                    <div className='rem-for'>
                        <label>
                            <input type="checkbox" />Remember me
                        </label>
                        <a href="#">Forget Password</a>
                    </div>
                    <button type='submit'>SUBMIT</button>
                    <div>
                        <p>Don't have an account? 
                            <a href="#">Register</a>
                        </p>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default LoginPage;

