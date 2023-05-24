const express = require('express');
const registerController = require('./controllers/RestauranteController')
const AuthController = require('./controllers/AuthController')
const ReservaController = require('./controllers/ReservasController')
const PratosController = require('./controllers/PratosController')
const { authenticateToken } = require('./models/TokenModel');
const router = express.Router();
require('dotenv').config();



//Menus
router.get('/menu',PratosController.getAllpratos);
router.get('/menuitems',PratosController.getAllpratos);
//Pratos
router.post('/pratos',PratosController.createPrato);
router.get('/pratos',PratosController.getAllpratos);
router.get('/pratostipos',PratosController.getAllTipos);
router.put('/pratoedit',PratosController.editPrato);
router.put('/pratosdelete',PratosController.deletePrato);
//Restaurante
router.get('/restaurantes',registerController.getAllRestaurantes);
//Reservas
router.post('/createreserva',authenticateToken ,ReservaController.createReserva);
router.get('/mesas/:id/:id2',ReservaController.getAllMessasOnById);
router.get('/reserva',ReservaController.getAllReserva);
router.put('/reserva/:id',ReservaController.setMesasReservas);
router.get('/reserva/:id',ReservaController.getAllReservaById);
//Client
router.get('/user',AuthController.getAllusers);
router.put('/user',AuthController.updateUsers)
router.post('/login',AuthController.login);
router.post('/register',AuthController.register);
router.get('/usercheck',authenticateToken ,AuthController.userCheck);
module.exports = router;