const request = require('request');
const yargs = require('yargs');

const arg = yargs.options({
a: {
    demand:true,
    alias:"adsress",
    describe:"Address to fetech weather for",
    string:true
  }
})
.help()
.alias("help","h")
.argv;

console.log(arg.a);
var encodedAddress = encodeURIComponent(arg.a);
request({
  url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json:true,

},(error,response,body) => {
  console.log(JSON.stringify(response,undefined,2));
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
  console.log(`Longitud : ${body.results[0].geometry.location.lng}`);
  console.log(error);
  console.log(response.statusCode);
});
