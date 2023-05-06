const { request, response } = require('express');
const PostModel= require('../models/ReservasModel');



const createReserva  = async(request, response) =>{
    let resp = await PostModel.createReserva(request.body,request.user);
    return response.status(201).json(resp);
};


module.exports = {
    createReserva  
};