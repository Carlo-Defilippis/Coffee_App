export default async function delta() {
    if ("geolocation" in window.navigator) {
        console.log("GeoLocation is Available!");
        window.navigator.geolocation.getCurrentPosition((position) => {
              console.log('Geolocation responce: ', position, position.coords.latitude,position.coords.longitude );
              const lat = position.coords.latitude
              const lon = position.coords.longitude
              console.log(`${lat},${lon}`)
              return `${lat},${lon}`
            },
            function(error) {
              console.error("Error Code = " + error.code + " - " + error.message);
            }
          );
      } else {
        alert("Please allow location on your browser to use our app!");
      }      
}
