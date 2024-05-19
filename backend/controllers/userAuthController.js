const passport = require('passport')
const crypto = require('crypto')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const promisify = require('es6-promisify')

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'Failed Login!',
  successRedirect: '/',
  successFlash: 'You are now logged in'
})

exports.logout = (req, res)=>{
  req.logout()
  req.flash('You are now logged out!')
  req.redirect('/')
}

exports.isLoggedIn = (req, res, next) =>{
  // first check if the user is authenticated
  if (req.isAuthenticated()){
    next() // carry on! They are logged in1
    return
  }
  req.flash('error', 'You must be logged in')
  return res.redirect('/login')
}

exports.forgot = async (req, res)=>{
  // 1. see if a user with that email exists
  const User = await User.findOne({
    email: req.body.email})
    if (!user) {
      req.flash('error', 'Email does not exists.')
      return res.redirect('/login')
    }

    // 2. set reset tokens and expiry on their account
    user.resetPasswordToken = crypto.randomBytes(20).toString('hex')
    user.resetPasswordExpires = Date.now() + 3600000
    await user.save()

    // 3. send them an email with the token
    const resetURL = `http://${req.headers.host}/account/reset/${user.resetPasswordToken}`
    await mail.send({
      user,
      filename: 'password-reset',
      subject: 'Password Reset',
      resetURL
    })

    req.send('A reset password link has been sent to your email')

    // 4. redirect to login page
    res.redirect('/login')
}

exports.reset = async (req, res)=>{
  const user = await user.findOne({
    resetPasswordToken: req.params.token,
    resetPasswordExpires: {$gt: Date.now()}
  })
  if (!user){
    req.send('Password reset is invalid')
    return res.redirect('/login')
  }

  // if there is an user, show the reset password form
  res.send('this is the reset password form')
}

exports.confirmedPasswords = (req, res, next) =>{
  if (req.body.password === req.body ['password-confirm']) {
    next() 
    return
  }

  req.send('Password do not match')
  res.redirect('back')
}

exports.update = async (req, res) =>{
  const user = await User.findOne({
    resetPasswordToken: req.params.token,
    resetPasswordExpires: { $gt: Date.now()}
  })

  if (!user) {
    res.send('Password reset has expired')
    return res.redirect('/login')
  }

  const setPassword = promisify(user.setPassword, user)
  await setPassword(req.body.password)
  user.resetPasswordToken = undefined
  user.resetPasswordExpires = undefined
  const updatedUser = await User.save()
  await req.login(updatedUser)
  res.send('Your password has been reset! You are now logged in!')
  res.redirect('/')
}