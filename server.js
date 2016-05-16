"use strict";
let koa = require('koa');  
let app = koa();
let co = require("co");
let request = require("co-request");

app.use(function *() {  
  this.body = 'Hello World';
});

co(function* () {
  let result = yield request("http://api.openweathermap.org/data/2.5/weather?q=LosAngeles&appid=128c543da50fbcc0d216056029148b7e"); 
  let response = result;
  let body = result.body;
  console.log("Response: ", response);
  console.log("Body: ", body);
}).catch(function (err) {
    console.err(err);
});

app.listen(3000); 

 

 
