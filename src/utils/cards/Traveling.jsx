import React from 'react';
import DriveIcon from '../../img/road.png'; 

export default (props) => {

  return (
        <div className={`location-card bg-secondary ${props.hide}`}>
          <h1 className="text-secondary travel-top">
            <strong>On The Road</strong>
          </h1>
          <p className="text-faded">{props.date}</p>
          <img className="travel-image" alt="On The Road" src={DriveIcon} />
        </div>
  )}