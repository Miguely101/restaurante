const { request, response } = require('express');
const PostModel= require('../models/PratosModel');



const getAllpratos = async(request,response)=>{
    let data = await PostModel.getAllpratosById();
    return response.status(201).json(data)
}

const createPrato = async(request,response)=>{
    let data = await PostModel.createPrato(request.body);
    return response.status(201).json(data)
}

const getAllTipos = async(request,response)=>{
    let data = await PostModel.getAllTipos();
    return response.status(201).json(data)
}


module.exports = {
    createPrato,
    getAllpratos,
    getAllTipos
};