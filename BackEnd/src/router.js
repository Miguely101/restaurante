const express = require('express');
const registerController = require('./controllers/RestauranteController')
const router = express.Router();
require('dotenv').config();

router.get('/restaurants',registerController.getAllRestaurantes);


module.exports = router;