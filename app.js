const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

weather.getWeather();

const arg = yargs.options({
a: {
    demand:true,
    alias:"adsress",
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

geocode.geocodeAddress(arg.a,(errorMessage,results)=>{
  if (errorMessage) {
    console.log(errorMessage);
  }else {
    //console.log(results);
    //console.log(results);
    console.log(JSON.stringify(results.address,undefined,2));
    //sconsole.log(results.);
    weather.getWeather(results.latitude,results.longitud,(error,weatherResponse)=>{
      if (error) {
        console.log(error);
      }else{
        //console.log(error);
        console.log(`It's currently ${weatherResponse.temperature} but it feels like ${weatherResponse.apparentTemperature}`);
      }
    });
  }
});



//API KEY DARK SKY 152f487d54c1bbd103842b4651636ca7
//EXAMPLE FOR BROWSER
//https://api.darksky.net/forecast/152f487d54c1bbd103842b4651636ca7/20.6596988,-103.3496092

// const request = require('request');
//
// request({
//   url:"https://api.darksky.net/forecast/152f487d54c1bbd103842b4651636ca7/20.6596988,-103.3496092",
//   json:true
// },(error,response,body)=>{
//   if (error) {
//     console.log('Unable to connect to Forecaste.ios server');
//   }else if (response.statusCode === 404)  {
//     console.log('Unable to fetch the weather');
//   }else if (response.statusCode === 200) {
//     console.log('Everything working awesome!!!');
//     console.log(JSON.stringify(body.currently,undefined,2));
//   }
//
// });
