import React, { useState } from 'react';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import loginlogo from'../assets/navlogo.png';
import {IoIosArrowBack ,IoIosArrowForward}from"react-icons/io";
import { auth } from '../firebase-config';
import { Link } from 'react-router-dom';

const Login = () => {

    const[loginEmail,setLoginEmail]=useState("");
    const[loginPassword,setLoginPassword]=useState("");
    const[currentSlide,setCurrentSlide]=useState("");
    const[startX,setStartX]=useState("");

    const images=[
      'https://images.unsplash.com/photo-1693934304978-22274e6a3276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJlc29ydCUyMHdpdGglMjBzd2ltbWluZyUyMHBvb2x8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1566722794360-e2e51b03d3ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGFlcm9wbGFuZSUyMGxhbmRpbmd8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1693934304978-22274e6a3276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJlc29ydCUyMHdpdGglMjBzd2ltbWluZyUyMHBvb2x8ZW58MHx8MHx8fDA%3D'

    ];
       const nextSlide =()=>{
        setCurrentSlide((preSlide)=>(preSlide + 1) % images.length)
       };
       const prevSlide =()=>{
        setCurrentSlide((prevSlide)=>(prevSlide -1 + images.length) %images.length)
       };
       const handleMouseDown=(event)=>{
        setStartX(event.clientX);
       };
       const handleMouseMove = (event)=>{
        if(startX){
          const deltaX = event.clientX - startX;

          if(deltaX > 10){
            setCurrentSlide((prevSlide)=>(prevSlide - 1 + images.length)%images.length);
            setStartX(0);
          } else if(deltaX < -10){
            setCurrentSlide((prevSlide)=>(prevSlide + 1)% images.length);
            setStartX(0);
          }
        }
       };
      
       const handleMouseUp =()=>{
        setStartX(0);
       }; 

    const login = async ()=>{
        try{
            const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
            console.log(user)
          } catch (error) {
            console.log(error.message);
          }
    };

  return (
    <div>
    <div className='login-page'>
      <div className='loginlogo'>
        <img src={loginlogo}alt='loginlogo' className='logoo'/>
      
      <div className='loginheading'><h1>Login</h1>
      <h5>Login to acess your Globe account</h5>
      </div>
      <div className='email'>
        <p className='log'><span >Email</span></p>
        <input type='text' onChange={(event) =>{
            setLoginEmail(event.target.value)}} className='email-content'
            />
         <p className='logd'><span >Password</span></p>
        <input type='text'onChange={(event) =>{
            setLoginPassword(event.target.value) }} className='password-content'
            />
            <p><input type='checkbox'/> Remember me</p>
            <Link><p className='forget'>Forget Password</p></Link>
            <button onClick={login} className='slogin'>Login</button>
           <p>Don't have an account?  <Link to='/Signup'>Sign up</Link></p>
         
      </div>
      </div>
         <div className='images-cont' onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          <IoIosArrowBack onClick={prevSlide} className="arrow"/>
          <img src={images[currentSlide]}alt={`slide ${currentSlide +1}`}className='img-slide'/>
          <IoIosArrowForward onClick={nextSlide}className='arrow'/>
         </div>
    </div>
    </div>
  );
}

export default Login;

