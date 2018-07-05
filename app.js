const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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

geocode.geocodeAddress(arg.a,(errorMessage,results)=>{
  if (errorMessage) {
    console.log(errorMessage);
  }else {
    //console.log(results);
    console.log(JSON.stringify(results,undefined,2));
  }
});

//API KEY DARK SKY 152f487d54c1bbd103842b4651636ca7
//EXAMPLE FOR BROWSER
//https://api.darksky.net/forecast/152f487d54c1bbd103842b4651636ca7/20.6596988,-103.3496092

const request = require('request');

request({
  url:"https://api.darksky.net/forecast/152f487d54c1bbd103842b4651636ca7/20.6596988,-103.3496092",
  json:true
},(error,response,body)=>{
  console.log(JSON.stringify(body.currently,undefined,2));
});
