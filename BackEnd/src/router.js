const express = require('express');
const registerController = require('./controllers/RestauranteController')
const AuthController = require('./controllers/AuthController')
const ReservaController = require('./controllers/ReservasController')
const PratosController = require('./controllers/PratosController')
const MenuController = require('./controllers/MenuController')
const EncomendaController = require('./controllers/EncomendaController')
const DonationController = require('./controllers/DonationsController')

const { authenticateToken } = require('./models/TokenModel');
const router = express.Router();
require('dotenv').config();

//infoCalls


//Menus
router.put('/menu/:id',MenuController.editMenu);
router.post('/menudelete',MenuController.deleteMenu);
router.post('/menu',MenuController.CreateMenus);
router.get('/menu',MenuController.getAllmenus);
router.get('/menuitems/:id',MenuController.getItemsMenu);
//Encomenda
router.post('/encomenda',authenticateToken,EncomendaController.CreateEncomenda);
router.get('/encomenda/:id',EncomendaController.getEncomenda)
router.get('/encomendaitems/:id',EncomendaController.getEncomendItems)
router.get('/encomendaestado/:id/:id2',EncomendaController.setencomendaEstado)
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
router.put('/reserva/:id/:id2',ReservaController.setMesasReservas);
router.get('/reserva/:id',ReservaController.getAllReservaById);
router.get('/reservaMesas/:id',ReservaController.getMesas);
//Client
router.get('/user',AuthController.getAllusers);
router.put('/user',AuthController.updateUsers)
router.post('/login',AuthController.login);
router.post('/register',AuthController.register);
router.get('/usercheck',authenticateToken ,AuthController.userCheck);
router.get('/userinfos',authenticateToken ,AuthController.getInfos);
//Doar
router.get('/donations',DonationController.getDonations);
router.post('/donations',authenticateToken ,DonationController.donate);
//26
module.exports = router;