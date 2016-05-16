"use strict";
let koa = require('koa'); 
let router = require('koa-router'); 
let app = koa();
let co = require("co");
let request = require("co-request");
let config = require("config")
let credentials = config.get('credentials')

//app.use(router.routes());
let weatherData;
app.use(function *() {  
  this.body = weatherData || "Hello World";
});

co(function* () {
  let result = yield request("http://api.openweathermap.org/data/2.5/weather?q=LosAngeles&appid=" + credentials.key); 
  let response = result;
  let weatherData = result.body;
  console.log("Body: ", weatherData)
}).catch(function (err) {
    console.err(err);
});

app.listen(3000); 

 

 
