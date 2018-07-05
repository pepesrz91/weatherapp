const request = require('request');

var geocodeAddress = (adress,callback)=>{
  var encodedAddress = encodeURIComponent(adress);

  request({
    url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true,

  },(error,response,body) => {
    if (error) {
      callback('Some Error!!');
    }else if (body.status === "ZERO_RESULTS") {
      callback('Unable to find that address.')
      console.log('Unable to find that address.');
    }else if (body.status === 'OK') {
      callback(undefined,{
        address:body.results[0].formatted_address,
        latitude:body.results[0].geometry.location.lat,
        longitud:body.results[0].geometry.location.lng
      });
    }
  });
}
module.exports.geocodeAddress = geocodeAddress;
