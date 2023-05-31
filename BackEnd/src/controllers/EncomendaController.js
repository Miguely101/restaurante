const { request, response } = require('express');
const PostModel= require('../models/EncomendaModel');

const CreateEncomenda = async(request,response)=>{
    let data = await PostModel.CreateEncomenda(request.body,request.user.id);
    return response.status(201).json(data)
}


module.exports = {
    CreateEncomenda,
};