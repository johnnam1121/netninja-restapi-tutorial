const express = require('express');
const Ninja = require('../models/ninjas');
const router = express.Router();

// setting up routes
// get list of ninjas from database
router.get('/ninjas', function (req, res) {
  res.send({ type: "GET" })
});

// add a new ninja to the db
// router.post('/ninjas', function (req, res) {
//   console.log(req.body);
//   res.send({
//     type: "POST",
//     ninja: req.body,
//   })
// });
// new post method. going to actually save the data to the db now
router.post('/ninjas', function (req, res) {
  // var ninja = new Ninja(req.body);
  // ninja.save();
  Ninja.create(req.body).then(function (ninja) {
    //this function will only run if the ninja was properly created since it is a promise
    res.send(ninja); // send back the ninja that was saved
  }); // this line of code is the same as the above 2. just simplifies it
});

// update a ninja
router.put('/ninjas/:id', function (req, res) {
  res.send({ type: "PUT" })
});

// delete a ninja
router.delete('/ninjas/:id', function (req, res) {
  res.send({ type: "DELETE" })
});

// exporting the router so it can be used in index.js
module.exports = router;