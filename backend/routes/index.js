const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const userAuthController = require('../controllers/userAuthController')
const { catchErrors } = require('../handlers/errorHandlers')

// Login, Register and validation routes
router.get('/user/login', userController.loginForm)
router.post('/user/login',userAuthController.login)
router.get('/user/register', userController.registerForm)

// 1. Validate the registration data
// 2. register the user
// 3. we need to log them in
router.post('/user/register', 
userController.validateRegister,
userController.register,
userAuthController.login
)

router.get('/user/logout', userAuthController.logout)

router.get('/user/account', userAuthController.isLoggedIn, userController.account)
router.post('/user/account', catchErrors(userController.updateAccount))
router.post('/user/account/forgot', catchErrors(userAuthController.forgot))
router.get('/user/account/reset/:token', catchErrors(userAuthController.reset))
router.post('/user/account/reset/:token', catchErrors(userAuthController.update))


module.exports = router