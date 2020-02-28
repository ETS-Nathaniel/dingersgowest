import React from 'react';
import '../css/itinerary.css';
import CardBuilder from '../utils/CardBuilder';
import CardConfig from '../utils/CardConfigure';

function Itinerary () {
  return (
  <section className="content-section bg-primary text-light text-center" id="services">
    <div className="container">
      <div className="content-section-heading">
        <h3 className="text-primary-light mb-0">Itinerary</h3>
        <h2 className="mb-5 text-primary">Follow along on our trip</h2>
      </div>
      </div>
      <div className="row">
        <CardBuilder cardConfig={CardConfig} />
    </div>
  </section>
  )
}

export default Itinerary