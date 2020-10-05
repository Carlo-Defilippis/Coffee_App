import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


class LoadScriptOnlyIfNeeded extends LoadScript {
    componentDidMount() {
      const cleaningUp = true
      const isBrowser = typeof document !== "undefined" // require('@react-google-maps/api/src/utils/isbrowser')
      const isAlreadyLoaded = window.google && window.google.maps && document.querySelector('body.first-hit-completed') // AJAX page loading system is adding this class the first time the app is loaded
      if (!isAlreadyLoaded && isBrowser) {
        // @ts-ignore
        if (window.google && !cleaningUp) {
          console.error("google api is already presented")
          return
        }
  
        this.isCleaningUp().then(this.injectScript)
      }
  
      if (isAlreadyLoaded) {
        this.setState({ loaded: true })
      }
    }
  }

const containerStyle = {
  width: '400px',
  height: '400px'
};



const center = {
  lat: -3.745,
  lng: -38.523
};



class MyComponents extends Component {
  render() {
    return (
      <LoadScriptOnlyIfNeeded
        googleMapsApiKey="AIzaSyBBYO5GUhGzV2Jo0mCE5bYzIHbpLfKC5eo"
      >
      
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScriptOnlyIfNeeded>
    )
  }
}

export default MyComponents;