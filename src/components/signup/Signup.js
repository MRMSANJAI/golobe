import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import {IoIosArrowBack ,IoIosArrowForward}from"react-icons/io";
import signuplogo from'../assets/navlogo.png';
import { Link } from 'react-router-dom';
import './signup.css';


const Signup = () => {
    
    const[registerEmail,setRegisterEmail]=useState("");
    const[registerPassword,setRegisterPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [phoneNumber ,setPhoneNumber]=useState("");
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


    const register = async()=>{
        try{
            const user =await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
            console.log(user)
        } catch(error){
            console.log(error.message);
        }
    };

  return (
    <div className='signuphead-container'>
     <div className='content-container'>
        <div className='register-content' onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          <IoIosArrowBack onClick={prevSlide} className="arrow"/>
          <img src={images[currentSlide]}alt={`slide ${currentSlide +1}`}className='img-slide'/>
          <IoIosArrowForward onClick={nextSlide}className='arrow'/>
        </div>
        <div className='signup-content'>
            <div className='signup-logo'>
                <Link to="/"><img src={signuplogo} alt='signuplogo'/></Link>
            </div>
            <div className='signuphead-con'>
                <h1>Signup</h1>
                <p>Let's get you all set up so you can access your personal account.</p>
            </div>
           <div className='signupform-con'>
            <p className='firstname'>First Name</p>
            <input type='text' className='first-cont' onChange={(event)=>{
                setFirstName(event.target.value); 
              }}/>
            <span>Last Name</span>
            <input type='text' onChange={(event)=>{
                setLastName(event.target.value);
              }}/>
              <p >Email</p>
            <input type='email' onChange={(event)=>{
                setRegisterEmail(event.target.value);
              }}/>
            <span >Phone Number</span>
            <input type='number' onChange={(event)=>{
            setPhoneNumber(event.target.value);
               }}/>
            <p>Create Password</p>
            <input type='password'onChange={(event)=>{
              setRegisterPassword(event.target.value);            
              }}/>
               <p>Confirm Password</p>
            <input type='password'onChange={(event)=>{
              setRegisterPassword(event.target.value);            
              }}/>
            <p><input type='checkbox'/>I agree to all the <Link to='/terms'>Terms</Link> and <Link to='/PrivacyPolicy'>Privacy Policy</Link></p>
           </div>
           <div >
            <button onClick={register}className='signup-button'>Create account</button>
            <p className='alacc'>Already have an Account?<Link to='/login'> Login</Link></p>
           </div>
           </div>
        
     </div>
    </div>
  );
}

export default Signup;
