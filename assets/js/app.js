let geocodeAPIKey = 'AIzaSyB-6mHLokag8Rsgq9TptWlz38Mwz3o9fW8';
let geocodeAPIURL =  `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,
+Mountain+View,+CA&key=${geocodeAPIKey}`;

function geoCodeAPICall(){
  fetch(geocodeAPIURL).then(response=>response.json())
  .then(data=>console.log(data))
  .catch(error=>console.log(error));
}
geoCodeAPICall();