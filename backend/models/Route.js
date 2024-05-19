const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const routeSchema = new mongoose.Schema({
  origin:{
    type: String,
    default: 'Point'
  },

  destination:{
    type: String,
    default: 'Point'
  },

  coordinates:{
    type: Number,
    required: 'You must supply coordinates'
  },

  created: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Route', routeSchema)