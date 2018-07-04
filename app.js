const request = require('request');

request({
  url:"http://maps.googleapis.com/maps/api/geocode/json?address=%201616%20americas%20guadalajara",
  json:true,

},(error,response,body) => {
  console.log(JSON.stringify(response,undefined,2));
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
  console.log(`Longitud : ${body.results[0].geometry.location.lng}`);
  console.log(error);
  console.log(response.statusCode);
});
