const express = require('express');

// set up express app
const app = express();

// get request from the root level aka the route
// if a get request shows up, a callback function is run
app.get('/', function (req, res) {
  // when you go to http://localhost:4000/ it notices that there was a get request and console logs GET request
  console.log('GET request');
  // at the moment the website is doing nothing and waiting for a response
  // the req parameter contains information about the request while the
  // res parameter contains info about the response like the status code or sending some data
  // res.end();
  // // now when we go to localhost:4000, it stops trying to load something and isnt spinning around
  res.send({ name: 'John' });
  // now instead of just ending the get request, it now send back some data. John
});

// listen for requests
// in this case heroku might give us a port number so we can put that in our env file
// if not it defaults to 4000
app.listen(process.env.port || 4000, function () {
  console.log('ready to accept requests');
});