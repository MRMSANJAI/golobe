import React from 'react';
import './Navbar.css';
import { IoAirplane } from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/navlogo.png';


const Navbar = () => {

    const navigate = useNavigate();

    const SignupClick=()=>{
        navigate('/Signup');
    }
  return (
    <div className="navbar-container">
    <div className="find-container">
        <Link to="/Findflight">
            <IoAirplane /> Find Flight
        </Link>
        <Link to="/Findstays">
            <IoBed /> Find Stays
        </Link>
    </div>
    <div className="logo">
        <img src={logo} alt="logo" />
    </div>
    <div className="login-signup">
        <Link to="/Login">Login</Link>
        <button className="signup-btn" onClick={SignupClick}>Sign up</button>
    </div>

</div>
  );
}

export default Navbar;
