import React, {Component, PureComponent} from 'react';
import ReactMapGL, {Marker, Layer, Source} from 'react-map-gl';
import MapData from '../data/mapData.json';
import Mark from '../img/baseline_place_black_18dp.png';
import {fromJS} from 'immutable';
import '../css/mapper.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZXRzLW5hdGhhbmllbCIsImEiOiJjazZud20wOWQxNWMzM2xwYng3MDJnOGhmIn0.WXLlcu4cBcEHpY_Cq-YKHA';

const mapStyle = fromJS({
  version: 8,
  sources: {
      points: {
          type: 'geojson',
          data: {MapData}
      }
  },
  layers: [
      {
        'id': 'route',
        'type': 'line',
        source: 'points',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
          },
        'paint': {
          'line-color': '#888',
          'line-width': 8
        }
      }
  ]
});

class Markers extends PureComponent {
  render() {
    const {data} = this.props;
    return data.map(
      city => <Marker longitude={city.geometry.coordinates[0]} latitude={city.geometry.coordinates[1]} ><img src={Mark} /></Marker>
    )
  }
}

class Mapper extends Component {

  state = {
    viewport: {
      width: '100%',
      height: '90vh',
      latitude: 34.1509,
      longitude: -100.5841,
      zoom: 3.39
    }
  };

  render() {
    return (
      <ReactMapGL
        /* mapStyle={mapStyle} */
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        scrollZoom={false}
        dragPan={false}
        dragRotate={false}
        doubleClickZoom={false}
        touchZoom={false}
        touchRotate={false}
        keyboard={false}
      >
      <Markers data={MapData.features} />
      </ReactMapGL>
    );
  }
}

export default Mapper