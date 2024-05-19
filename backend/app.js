const express = require("express")
const session = require("express-session")
const MongoStore = require("connect-mongo")
// const path = require("path")
const cookieParser = require("cookie-parser")
const passport = require("passport")
const promisify = require("es6-promisify")
const flash = require("connect-flash")
const expressValidator = require("express-validator")
const routes = require("./routes/index")
const errorHandlers = require("./handlers/errorHandlers")
const passportHandlers = require("./handlers/driverPassport")

// creating express app
const app = express()

// Middleware starts

// we use this middleware to take raw request and turn them into usable properties on req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Expose a bunch of methods for validating data. This is used mostly on userController.validateRegister
app.use(expressValidator)

// populate req.cookies ith any cookies that comes along with the request
app.use(cookieParser())

// This keeps users logged in and allows us to send flash messages
// app.use(session({}))

// We use passport to handle user logins
app.use(passport.initialize())
// app.use(passport.session())

// flash middleware allows us to use req.flash('error', 'shit!'), which will then pass that message to the next page the user requests
app.use(flash())
  
// we finally handle our routes
app.use("/", routes)
app.use("/user", routes)

// if the routes doesn't work, we display the 404 error and forward them to error handler
app.use(errorHandlers.notFound)

//one of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors)

// Otherwise this was a really bad error we didn't expect
// if(app.get("env") === "development"){
//  Then we use the Development Error Handler - Prints stack trace
// app.use(errorHandlers.developmentErrors)
// }

// production error handler
app.use(errorHandlers.productionErrors)

// // now we export this file so we can use in main.js

// Middleware Ends
module.exports = app
