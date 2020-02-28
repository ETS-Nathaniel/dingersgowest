import React from 'react';

const CardBuilder = props => Object.entries(props.cardConfig).map(item => {
  const label = item[0];
  const {image, date, weather, interest, hiking, climbing, photos} = item[1];

  return (
        <div className="location-card bg-secondary">
          <img className="image-head" src={image} />
          <h4 className="text-secondary">
            <strong>{label}</strong>
          </h4>
          <p className="text-faded mb-0">{date}</p>
          <table className="it-table-style">
            <tr className="it-table-row">
              <p>{weather}</p>
            </tr>
            <tr className="it-table-row">
              <td className="table-label">Points Of Interest</td>
              <td className="table-content">{interest}</td>
            </tr>
            <tr className="it-table-row">
              <td className="table-label">Hiking</td>
              <td className="table-content">{hiking}</td>
            </tr>
            <tr className="it-table-row">
              <td className="table-label">Climbing</td>
              <td className="table-content">{climbing}</td>
            </tr>
            <tr className="it-table-row">
              <p>{photos}</p>
            </tr>
          </table>
        </div>
  )})

export default CardBuilder