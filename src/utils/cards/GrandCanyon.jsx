import React from 'react';
import GrandCanyon from '../../img/GrandCanyon.jpg'; 

export default () => {

  return (
        <div className="location-card bg-secondary">
          <img className="image-head" alt="Grand Canyon" src={GrandCanyon} />
          <h4 className="text-secondary">
            <strong>The Grand Canyon</strong>
          </h4>
          <p className="text-faded mb-0">May 20-21</p>
          <table className="it-table-style">
            <tr className="it-table-row">
              <p>Weather goes here</p>
            </tr>
            <tr className="it-table-row">
              <td className="table-label">Points Of Interest</td>
              <td className="table-content">South Rim, Outdoor Advenuring</td>
            </tr>
            <tr className="it-table-row">
              <td className="table-label">Hiking</td>
              <td className="table-content">Yes, Link Trail</td>
            </tr>
            <tr className="it-table-row">
              <td className="table-label">Climbing</td>
              <td className="table-content">Yes, Link Climbing</td>
            </tr>
            <tr className="it-table-row">
              <p>Pictures go here</p>
            </tr>
          </table>
        </div>
  )}