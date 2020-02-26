import React from 'react';
import mapboxgl from 'mapbox-gl';
import '../css/mapper.css';
import MapData from '../data/mapData.json';
mapboxgl.accessToken = 'pk.eyJ1IjoiZXRzLW5hdGhhbmllbCIsImEiOiJjazZud20wOWQxNWMzM2xwYng3MDJnOGhmIn0.WXLlcu4cBcEHpY_Cq-YKHA';

class Mapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    lat: 34.1509,
    lng: -100.5841,
    zoom: 3.39,
    interactive: false
    };
  }
  
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      interactive: this.state.interactive
    });
    MapData.features.forEach(function(marker) {
      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    });
    // map.addLayer({
    //   'id': 'route',
    //   'type': 'line',
    //   'source': MapData,
    //   'layout': {
    //   'line-join': 'round',
    //   'line-cap': 'round'
    //   },
    //   'paint': {
    //   'line-color': '#888',
    //   'line-width': 8
    //   }
    // });
  }

  render() {
    return (
    <div>
    <div ref={el => this.mapContainer = el} className="mapContainer" />
    </div>
    )
    }
  }

export default Mapper