const mongoose = require ('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
const md5 = require('md5')
const validator = require('validator')
const mongodbErrorHandler = require('mongoose-mongodb-errors')
const passportLocalMongoosee = require('passport-local-mongoose')

const driverSchema = new Schema({
  driver_id:{
    type: Number,
    required: 'Please Input a Bus Number',
  },

  name:{
    type: String,
    required: 'Please Provide a name',
    trim: true
  },

  password:{
    type: String,
    trim: true,
    required: 'Please provide your password',
    validate: [validator.isStrongPassword, 'invalid Password']
  },
  phone:{
    type: Number,
    required: 'Please Provide a phone number'
  },
  vehicle_info:{
    type: String,
    required: true
  },

  status:{
    isActive: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  route:[{type: mongoose.Schema.ObjectId,
    ref: 'Route'}
  ]
})

driverSchema.plugin(passportLocalMongoose, { usernameField: 'driver_id' });
driverSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Driver', driverSchema);