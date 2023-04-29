const { request, response } = require('express');
const PostModel= require('../models/RestauranteModel');


//Create
const getAllRestaurantes = async(request, response) =>{
    let resp = await PostModel.getAllRestaurantes(); 
    return response.status(201).json(resp);
};

module.exports = {
    getAllRestaurantes ,
};