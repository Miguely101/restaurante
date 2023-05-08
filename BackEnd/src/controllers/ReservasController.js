const { request, response } = require('express');
const PostModel= require('../models/ReservasModel');



const createReserva  = async(request, response) =>{
    let resp = await PostModel.createReserva(request.body,request.user);
    return response.status(201).json(resp);
};

const getAllReserva  = async(request, response) =>{
    let resp = await PostModel.getAllReserva();
    return response.status(201).json(resp);
};

const getAllMessasOnById  = async(request, response) =>{
    let resp = await PostModel.getAllReserva();
    return response.status(201).json(resp);
};

module.exports = {
    getAllMessasOnById,
    getAllReserva, 
    createReserva  
};