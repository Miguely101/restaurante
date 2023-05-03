const express = require('express');
const registerController = require('./controllers/RestauranteController')
const AuthController = require('./controllers/AuthController')
const { authenticateToken } = require('./models/TokenModel');
const router = express.Router();
require('dotenv').config();


router.get('/restaurants',registerController.getAllRestaurantes);
router.post('/register',AuthController.register);
router.get('/usercheck',authenticateToken ,AuthController.userCheck)
router.post('/login',AuthController.login);
module.exports = router;