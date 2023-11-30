import React from 'react';
import './FindFlight.css';
import Navbar from '../Navbar/Navbar';
import{LuArrowRightLeft} from "react-icons/lu";
import {IoPaperPlane} from"react-icons/io5";
import Place from '../Places/place';
import data from '../places.json';
import image1 from'../assets/Rectangle 7.png';
import image2 from'../assets/Rectangle 8.png';
import image3 from'../assets/Rectangle 9.png';
import image4 from'../assets/Rectangle 10.png';
import Footer from '../Footer/Footer';




const FindFlight = () => {
  console.log(data);
  return (
    
    <div className='page'>
      <Navbar/>
    <div className="flight-container">
      <div className='img-container'>
        <h1>Make your travel wishlist, we'll do the rest</h1>
        <h5>special offers to suit your plan</h5>
       </div>
      </div>
      <div className='borderbox '>
        <h3>where are you flying ?</h3>
        <div className='input-section'>
          <div className='form-input'>
            <p className='ptage'><span className='span'>From - To</span></p>
            <input type='text'placeholder='los Angles - Taipei 'className='inputcls'/>
            <LuArrowRightLeft className='arrow'/>
          </div>
          <div className='form-input2'>
            <p className='ptage1'><span className='span1'>Trip</span></p>
            <input type='text'placeholder='Return' className='inputcls1'/>
          </div>
          <div className='form-input'>
            <p className='ptage'><span className='span'>Depart - Return</span></p>
            <input type='text'placeholder='Date'className='inputcls'/>
          </div>
          <div className='form-input'>
            <p className='ptage'><span className='span'>Passenger - Class</span></p>
            <input type='text'placeholder=''className='inputcls'/>
          </div>
          <div className='flex'>
            <p> + Add promo Code</p>
            <button><IoPaperPlane/>Show flights</button>
          </div>

        </div>  
      </div>
      <div className='heading1'>
        <h1>Let's go places together</h1>
        <h4>Discover the latest offers and news and start planning your nest trip with us</h4>
       <div className='button'><button >See All</button></div> 
        </div>
        <div  className='container-image'></div>

        <div className='heading2'>
          <h1>Fall into travel</h1>
          <h4>Going somewhere to celebrate this season?Wheather you're going home or somewhere to roam, we've got the travel tools to get you to your destination.</h4>
           <div className='button'><button >See All</button></div>  
        </div>

            <div className='place'>
             <Place data={data}/>
            </div> 

           <div className='heading1'>
             <h1>Fall into travel</h1>
             <h4>Going somewhere to celebrate this season?Wheather you're going home or somewhere to roam, we've got the travel tools to get you to your destination.</h4>
             <div className='button'><button >See All</button></div>
             </div>

             <div className='display'>
             <div className='container-image2'>
              <h1>Backpacking Sri Lanka</h1>
              <h4>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</h4>
              <button className='button1'> Book Flight</button>
              <div className='Fromtop'><h3>From <h3>$700</h3></h3> </div>
             </div>
             <div className='left'>
                <div className='container-image3'>
                   <img src={image1}alt=''/>
                   <img src={image2}alt=''/>
                   <img src={image3}alt=''/>
                   <img src={image4}alt=''/> 
                 </div>
             </div>
             </div>
             <Footer/>   
    </div>
  );
}

export default FindFlight;

