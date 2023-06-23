const mongoogse = require('mongoose');
const Schema = mongoogse.Schema;

// create ninja schema and model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'], // the second paramenter is some feedback if something goes wrong
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },
  // add in geo location later. ex lat long
});

const Ninja = mongoogse.model('ninja', NinjaSchema);
// creates a model called ninja using the NinjaSchema

module.exports = Ninja;