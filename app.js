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

geocode.geocodeAddress(arg.a);
