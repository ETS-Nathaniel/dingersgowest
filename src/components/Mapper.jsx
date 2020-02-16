import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import '../css/mapper.css';
mapboxgl.accessToken = 'pk.eyJ1IjoiZXRzLW5hdGhhbmllbCIsImEiOiJjazZud20wOWQxNWMzM2xwYng3MDJnOGhmIn0.WXLlcu4cBcEHpY_Cq-YKHA';

class Mapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    lng: 5,
    lat: 34,
    zoom: 2
    };
    }

  componentDidMount() {
    const map = new mapboxgl.Map({
    container: this.mapContainer,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [this.state.lng, this.state.lat],
    zoom: this.state.zoom
    });
    }

  render() {
    return (
    <div>
    <div ref={el => this.mapContainer = el} className="mapContainer" />
    </div>
    )
    }
  
  }
   
ReactDOM.render(<Mapper />, document.getElementById('mapper'));

export default Mapper