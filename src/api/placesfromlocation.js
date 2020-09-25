import {
    Client,
    axiosInstance,
    PlaceInputType,
    PlaceType2,
    Status, PlaceType1
} from "@googlemaps/google-maps-services-js";
import GeoLocateMe from './geolocation'

let geoLocation;

export default geoLocation = new GeoLocateMe();
geoLocation.getAddress().then(r => {
    console.log(r.split(','))
    let myArray = r.split(',')
    console.log({ lat: `${myArray[0]}`, lng: `${myArray[1]}` })

    const client = new Client({});

    client.placesNearby({
        params: {
            location: myArray.join(),
            input: 'coffee',
            inputtype: PlaceInputType.textQuery,
            radius: 50000,
            type: ["cafe",
            "bakery",
            "meal_takeaway",
            "restaurant",
            "food",
            "point_of_interest",
            "store",
            "establishment"],
            key: 'AIzaSyBBYO5GUhGzV2Jo0mCE5bYzIHbpLfKC5eo',
        },
        timeout: 5000
    }, axiosInstance)
        .then(r => {
            console.log(Status, 'Based on the places nearby we have returned a result of: ', r.data.results);

        })
        .catch(e => {
            console.log("Returned an error of: ", e);
        });
});


