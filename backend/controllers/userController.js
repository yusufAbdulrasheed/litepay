const mongoose = require('mongoose')
const User = mongoose.model('User')
const promisify = require('es6-promisify')

exports.login = (req, res)=>{
  res.send('this is the log in page')
}

exports.register = (req, res) =>{
  res.send('this is the registration page')
}

exports.validateRegister = (req, res, next) =>{
  req.sanitizeBody('username')
  req.checkBody('username', 'Provide a username').notEmpty()
  req.sanitizeBody('name')
  req.checkBody('name', 'You must provide a name').notEmpty()
  req.checkBody('email', 'Email not valid!').isEmail()
  req.sanitizeBody('email').normalizeEmail({
    
    gmail_remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false,
  })

  req.checkBody('password', 'Password Cannot be Blank!').notEmpty()
  req.checkBody('password-confirm', 'Confirmed Password cannot be Blank!').notEmpty()
  req.checkBody('password-confirm', 'Oops! Your password do not match').equals(req.body.password)

  const errors = req.validationErrors()
  if(errors){
    req.flash('error', errors.map(err => err.msg))
    res.send('you are now back to the registration page')
    return //stop the function from running
  }
  next() //there were no errors
}

exports.register = async (req, res, next) =>{
  const User = new User({email: req.body.email, name: req.body.name})

  const register = promisify(User.register, User)
  await register(user, req.body.password)
  next() // pass to authcontroller
}

exports.account =(req, res)=>{
  res.send('Edit your profile')
}

exports.updateAccount = async (req, res) =>{
  const updates = {
    name: req.body.name,
    email: req.body.email
  }

  const user = await User.findOneAndUpdate
  (
    {_id: req.user._id},
    {$set: updates},
    {new: true, runValidators: true, context: 'query'}
  )

  req.send('Successfully Updated your profile')
}