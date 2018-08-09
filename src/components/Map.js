import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarker from './MapMarker';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const styles = {
//   headline: {
//       fontSize: 24,
//       paddingTop: 16,
//       marginBottom: 12,
//       fontWeight: 400,
//   },
//   slide: {
//       padding: 10,
//   },
//   speechBubble: {
//       backgroundColor: '#F63E7C',
//       width: 65,
//       height: 25
//   },
//   infoWindows: {
//       backgroundColor: 'white',
//       width: 300,
//       height: 150,
//       marginTop: 10,
//       marginLeft: -10,
//       padding: 10,
//       borderRadius: 3,
//   },
//   infoDetails: {
//       marginLeft: 10,
//   },
//   triangle: {
//       width: 0,
//       height: 0,
//       backgroundColor: 'transparent',
//       borderStyle: 'solid',
//       borderLeftWidth: 5,
//       borderRightWidth: 5,
//       borderBottomWidth: 8,
//       borderLeftColor: 'transparent',
//       borderRightColor: 'transparent',
//       borderBottomColor: '#F63E7C',
//       transform: 'rotate(180deg)',
//       marginTop: -2
//   }

// };


class Map extends Component {
  static defaultProps = {
    center: {
      lat: 10.7086097,
      lng: 122.56363429999999
    },
    zoom: 14
  };

  render() {
    let boardingHouses = this.props.boardingHouses
    // console.log(boardingHouses)
    // boardingHouses.length ? boardingHouses.map(marker => console.log(marker)) : null;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB6xTOk3aTgbtxiystM_hlRoAgAKKAGEcc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
            {Object.keys(boardingHouses).map(marker =>  (
              // console.log(boardingHouses[marker])
              <MapMarker 
                key={marker}
                lat={boardingHouses[marker].location.latitude} 
                lng={boardingHouses[marker].location.longitude} 
                price={boardingHouses[marker].min_rate}
                bhs={boardingHouses[marker]}
              />
            ))}
            
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;