import React from 'react';
import PetrifiedForest from '../../img/PetrifiedForest.jpg'; 

export default () => {

  return (
        <div className="location-card bg-secondary">
          <img className="image-head" src={PetrifiedForest} />
          <h4 className="text-secondary">
            <strong>Petrified Forest National Park</strong>
          </h4>
          <p className="text-faded mb-0">May 19-20</p>
          <table className="it-table-style">
            <tr className="it-table-row">
              <p>Weather goes here</p>
            </tr>
            <tr className="it-table-row">
              <td className="table-label">Points Of Interest</td>
              <td className="table-content">Painted Desert, Scenery</td>
            </tr>
            <tr className="it-table-row">
              <td className="table-label">Hiking</td>
              <td className="table-content">None</td>
            </tr>
            <tr className="it-table-row">
              <td className="table-label">Climbing</td>
              <td className="table-content">None</td>
            </tr>
            <tr className="it-table-row">
              <p>Pictures go here</p>
            </tr>
          </table>
        </div>
  )}