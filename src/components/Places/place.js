import React from 'react';
import './place.css'

const Place = ({data}) => {
  return (
    <div>
      <ul className='ultag'>
        {data.map(place =>(
            <li className='litag'>
                <img src={place.image}alt='' className='imageplace'/>
               <div>
                <h1 className='hclass'>{place.place}</h1>
                <p className='about'>{place.about}</p>
                <div className='price'><p >{place.price}</p></div>
                <button className='placebutton'>{place.button}</button>
                </div>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Place;
