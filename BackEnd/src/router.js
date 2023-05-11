const express = require('express');
const registerController = require('./controllers/RestauranteController')
const AuthController = require('./controllers/AuthController')
const ReservaController = require('./controllers/ReservasController')
const { authenticateToken } = require('./models/TokenModel');
const router = express.Router();
require('dotenv').config();


router.get('/restaurantes',registerController.getAllRestaurantes);
router.post('/register',AuthController.register);
router.get('/usercheck',authenticateToken ,AuthController.userCheck);
router.post('/createreserva',authenticateToken ,ReservaController.createReserva);
router.get('/mesas/:id/:id2',ReservaController.getAllMessasOnById);
router.get('/reserva',ReservaController.getAllReserva);
router.put('/reserva/:id',ReservaController.setMesasReservas);
router.get('/reserva/:id',ReservaController.getAllReservaById);
router.get('/user',AuthController.getAllusers);
router.put('/user',AuthController.updateUsers)
router.post('/login',AuthController.login);

module.exports = router;