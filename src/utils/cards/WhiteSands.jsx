import React from 'react';
import WhiteSands from '../../img/WhiteSands.jpg'; 

export default () => {

  return (
        <div className="location-card bg-secondary">
          <img className="image-head" alt="White Sands" src={WhiteSands} />
          <h4 className="text-secondary">
            <strong>White Sands National Park</strong>
          </h4>
          <p className="text-faded mb-0">May 19</p>
          <table className="it-table-style">
            <tr className="it-table-row">
              <p>Weather goes here</p>
            </tr>
            <tr className="it-table-row">
              <td className="table-label">Points Of Interest</td>
              <td className="table-content">Sand Surfing, Exploring</td>
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