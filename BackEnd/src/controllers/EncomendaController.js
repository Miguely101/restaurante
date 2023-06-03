const { request, response } = require('express');
const PostModel= require('../models/EncomendaModel');

const CreateEncomenda = async(request,response)=>{
    let data = await PostModel.CreateEncomenda(request.body,request.user.id);
    return response.status(201).json(data)
}

const getEncomenda = async(request,response)=>{
    let data = await PostModel.getEncomenda(request.params.id);
    return response.status(201).json(data)
}

const getEncomendItems = async(request,response)=>{
    let data = await PostModel.getEncomendItems(request.params.id);
    return response.status(201).json(data)
}

const  setencomendaEstado = async(request,response)=>{
    let data = await PostModel.setencomendaEstado(request.params.id,request.params.id2);
    return response.status(201).json(data)
}
module.exports = {
    setencomendaEstado,
    getEncomendItems,
    getEncomenda ,
    CreateEncomenda,
};