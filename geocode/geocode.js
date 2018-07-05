const request = require('request');

var geocodeAddress = (adress)=>{
  var encodedAddress = encodeURIComponent(adress);

  request({
    url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true,

  },(error,response,body) => {
    if (error) {
      console.log('Some Error!!');
    }else if (body.status === "ZERO_RESULTS") {
      console.log('Unable to find that address.');
    }else if (body.status === 'OK') {
      console.log(JSON.stringify(response,undefined,2));
      console.log(`Address: ${body.results[0].formatted_address}`);
      console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
      console.log(`Longitud : ${body.results[0].geometry.location.lng}`);
      console.log(response.statusCode);
    }
  });
}




module.exports.geocodeAddress = geocodeAddress;
