/*
  Catch Errors Handler

  with async/await, you need some way to catch errors
  
  Instead of using try{} catch(e) {} in each controller, we wrap the function in catchErrors(), catch and errors they throw, and pass it along to our express middleware with next()
*/
exports.catchErrors = (fn) =>{
  return (req, res, next) =>{
    return fn(req, res, next).catch(next)
  }
}

/*
  Not found Error

  When we hit a route that is not found, we mark it as 404 and pass it along to the next error handler to display
*/
exports.notFound = (req, res, next)=>{
  const err = new Error('Page Not Found')
  err.status = 404
  next
}

/*
  MongoDB Validation Error Handler

  Detect if there are mongodb validation errors that we can nicely show via flash message
*/
exports.flashValidationErrors = (err, req, res, next) =>{
  if (!err.errors) return next(err)

  // validation errors look like 
  const errorKeys = Object.keys(err.errors)
  errorKeys.forEach(key => req.flash ('error', err.errors[key].message))
  res.redirect('back')
}

/*
  Development Error Handler

  In development we show good error message so if we hit a syntax error or any other previously un-handled error, we can show good info on hat happened
*/
exports.developmentErrors = (err, req, res, next)=>{
  err.stack = err.stack || ''
  const errorDetails ={
    message: err.message,
    status: err.status,
  }

  res.status(err.status || 500)
  res.format({
    // Based on the `Accept` http header
    'text/html': ()=>{
      res.render('error', errorDetails)
    },

    // Form submit, reload the page 
    'application/json': ()=> res.json(errorDetails)  // Ajax call, send JSON back
  })
}

exports.productionErrors = (err, req, res, next) =>{
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
}