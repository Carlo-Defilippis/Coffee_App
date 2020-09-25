import {Client, axiosInstance, PlaceInputType} from "@googlemaps/google-maps-services-js";

const client = new Client({});
 
export default client
  .findPlaceFromText({
    params: {
    input: 'dunkin donuts',
    inputtype: PlaceInputType.textQuery,
    key: 'AIzaSyBBYO5GUhGzV2Jo0mCE5bYzIHbpLfKC5eo',
    fields: ["name","place_id","formatted_address", "photos", "type"],
    },
    timeout: 1000 
  }, axiosInstance)
  .then(r => {
    console.log('Based on the search name or place_id we have returned a result of: ', r.data.candidates[0]
    , '\n', r.data.candidates);

  })
  .catch(e => {
    console.log(process.env)
    console.log("Returned an error of: ", e);
  });
