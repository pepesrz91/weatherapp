const yargs = require('yargs');
// const geocode = require('./geocode/geocode');
// const weather = require('./weather/weather');
const axios = require('axios');



//weather.getWeather();

const argv = yargs.options({
a: {
    demand:true,
    alias:"address",
    describe:"Address to fetech weather for",
    string:true
  },
long: {
  demand:false,
  alias:'longitud',
  describe:'longitud to fetch weather',
  int:true
},
lat: {
  demnand:false,
  alias:'latitude',
  describe:'Latitude to fetch weather',
  int:true
}
})
.help()
.alias("help","h")
.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl =  `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geocodeUrl).then((response)=>{
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that Address');
  }
  var formattedAddress = response.data.results[0].formatted_address;

  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lat;
  var weatherUrl = `https://api.darksky.net/forecast/152f487d54c1bbd103842b4651636ca7/${lat},${lng}`;
  console.log(formattedAddress);
  return axios.get(weatherUrl);

}).then((response)=>{
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);

}).catch((e)=>{
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers');
  }else{
    console.log(e.message);
  }
});
