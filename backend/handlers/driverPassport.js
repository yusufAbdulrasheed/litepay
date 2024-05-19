const passport = require('passport');
const mongoose = require('mongoose');
const Driver = mongoose.model('Driver');

passport.use(Driver.createStrategy());

passport.serializeDriver(Driver.serializeDriver());
passport.deserializeDriver(Driver.deserializeDriver());