// const express = require('express');

// // set up express app
// const app = express();

// // get request from the root level aka the route
// // if a get request shows up, a callback function is run
// // app.get('/', function (req, res) {
// //   // when you go to http://localhost:4000/ it notices that there was a get request and console logs GET request
// //   console.log('GET request');
// //   // at the moment the website is doing nothing and waiting for a response
// //   // the req parameter contains information about the request while the
// //   // res parameter contains info about the response like the status code or sending some data
// //   // res.end();
// //   // // now when we go to localhost:4000, it stops trying to load something and isnt spinning around
// //   res.send({ name: 'John' });
// //   // now instead of just ending the get request, it now send back some data. John
// // });

// // listen for requests
// // in this case heroku might give us a port number so we can put that in our env file
// // if not it defaults to 4000
// app.listen(process.env.port || 4000, function () {
//   console.log('ready to accept requests');
// });

// lesson 6
// const express = require('express');
// //const routes = require('./routes/api'); the import is no longer needed after line 39

// const app = express();

// // after creating the routes in another file, it is imported then app.use now uses it
// // app.use('/api', routes); // the '/api' paramenter basically adds api in front of every route
// // so that we do not have to add the /api to EVERY single route.

// // this is the exact same thing as above but removes the need for the import
// app.use('/api', require('./routes/api'));

// app.listen(process.env.port || 4000, function () {
//   console.log('ready to accept requests');
// });

// lesson 7 handling post requests and downloading body parser
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.json());
// app.use('/api', require('./routes/api'));

// app.listen(process.env.port || 4000, function () {
//   console.log('ready to accept requests');
// });

// lesson 9 saving data to mongodb
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();

// // connect to mongoDB
// mongoose.connect('mongodb://localhost/ninjago')
// mongoose.Promise = global.Promise; // dont really understand this

// app.use(bodyParser.json());
// app.use('/api', require('./routes/api'));

// app.listen(process.env.port || 4000, function () {
//   console.log('ready to accept requests');
// });

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
// mongoose.connect('mongodb://localhost/ninjago');
mongoose.connect('mongodb://localhost:27017/ninjago');
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/ninjago', {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
//   bufferCommands: false, // Disable command buffering
//   serverSelectionTimeoutMS: 3000, // Set server selection timeout to 3 seconds
// });
// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.port || 4000, function () {
  console.log('now listening for requests');
});