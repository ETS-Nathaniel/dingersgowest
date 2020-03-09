import React, {Component} from 'react';
import MapGL from 'react-map-gl';
import Pins from './Pins';
import '../../css/mapper.css';

import DATA from '../../data/mapData.json';

const TOKEN = 'pk.eyJ1IjoiZXRzLW5hdGhhbmllbCIsImEiOiJjazZud20wOWQxNWMzM2xwYng3MDJnOGhmIn0.WXLlcu4cBcEHpY_Cq-YKHA';

class Mapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: '100%',
        height: '90vh',
        latitude: 34.1509,
        longitude: -100.5841,
        zoom: 3.39
      },
      popupInfo: null
    };
  }

  _updateViewport = viewport => {
    this.setState({viewport});
  };

  render() {
    const {viewport} = this.state;

    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN}
        scrollZoom={false}
        dragPan={false}
        dragRotate={false}
        doubleClickZoom={false}
        touchZoom={false}
        touchRotate={false}
        keyboard={false}
      >
        <Pins data={DATA.features} />
      </MapGL>
    );
  }
}

export default Mapper