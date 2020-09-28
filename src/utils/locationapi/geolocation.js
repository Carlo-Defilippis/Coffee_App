export default class GeoLocateMe {

getCoordinates() {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async getAddress() {
  // notice, no then(), cause await would block and 
  // wait for the resolved result
  const position = await this.getCoordinates(); 
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  // return lat and lng
  return `${lat},${lon}`;  
}

}