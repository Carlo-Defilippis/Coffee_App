import React from 'react'
import GoogleMapReact from 'google-map-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './map.css'
import GeoLocateMe from '../../utils/locationapi/googlemaps'


// var location = new GeoLocateMe();
// console.log(location)

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 40.8543908,
    lng: -74.746336599999,
  }

const zoomLevel = 10;
const Map = () => (
  <div className="map">
    <h2 className="map-h2">Check out coffee shops near you!</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBBYO5GUhGzV2Jo0mCE5bYzIHbpLfKC5eo' }}
        center={location}
        defaultZoom={12}
      >

      </GoogleMapReact>
    </div>
  </div>
)

export default Map