const mongoose = require ('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
const md5 = require('md5')
const validator = require('validator')
const mongodbErrorHandler = require('mongoose-mongodb-errors')
const passportLocalMongoose = require('passport-local-mongoose')



const userSchema = new Schema({
  username:{
    type: String,
    Unique: true,
    required: 'Please insert your Username',
    trim: true,
  },
   password:{
    type: String,
    trim: true,
    required: 'Please provide your password'
   },

   email:{
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Invalid Email Address'],
    required: 'Please Supply an email address'
   },

   name:{
    type: String,
    required: 'Please Provide a name',
    trim: true
   },
   created: {
    type: Date,
    default: Date.now
  },
   resetPasswordToken: String,
   resetPasswordExpires: Date
})
 userSchema.virtual('gravatar').get(
  function(){
    const hash = md5(this.email)
    return`https://gravatar.com/avatar/${hash}?s=200`
  }
 )

 userSchema.plugin(passportLocalMongoose,{usernameField: 'email'})
 userSchema.plugin(mongodbErrorHandler)



 export const UserModel = mongoose.model('User', userSchema)
 