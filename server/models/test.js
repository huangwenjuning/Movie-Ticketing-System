var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = new Schema({
  name: {
    type: String
  },
  sex: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model('Test', testSchema);
