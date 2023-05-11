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

const getAllReservaById  = async(request, response) =>{
    let resp = await PostModel.getAllReservaById(request.params.id);
    return response.status(201).json(resp);
};

const getAllMessasOnById  = async(request, response) =>{
    let resp = await PostModel.getAllMessasOnById(request.params.id,request.params.id2);
    return response.status(201).json(resp);
};
const setMesasReservas  = async(request, response) =>{
    let resp = await PostModel.setMesasReservas(request.body,request.params.id);
    return response.status(201).json(resp);
};

module.exports = {
    setMesasReservas,
    getAllReservaById,
    getAllMessasOnById,
    getAllReserva, 
    createReserva  
};