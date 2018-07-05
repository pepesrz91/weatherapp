const request = require('request');


const getWeather = (lat,long,callback)=>{
  request({
    url:`https://api.darksky.net/forecast/152f487d54c1bbd103842b4651636ca7/${lat},${long}`,
    json:true
  },(error,response,body)=>{
    if (error) {
      console.log('Unable to connect to Forecaste.ios server');
    }else if (response.statusCode === 404)  {
      console.log('Unable to fetch the weather');
    }else if (response.statusCode === 200) {
      console.log('Everything working awesome!!!');
      console.log(JSON.stringify(body.currently,undefined,2));
    }

  });
}

module.exports.getWeather = getWeather;
