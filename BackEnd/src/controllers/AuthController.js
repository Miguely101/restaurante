const { request, response } = require('express');
const PostModel= require('../models/AuthModel');


const getInfos = async(request,response)=>{
    let data = await PostModel.getInfos(request.user)
    return response.status(201).json(data)
}

const register = async(request, response) =>{
    let user = {nome:request.body.nome, email:request.body.email, morada:request.body.morada, numero:request.body.numero,password:request.body.password}
    let resp = await PostModel.register(user); 
    return response.status(201).json(resp);
};

const login = async(request, response) =>{
    let user = {email:request.body.email,password:request.body.password}
    let resp = await PostModel.login(user);
 
    return response.status(201).json(resp);
};

const userCheck = async(request,response)=>{
 return response.status(201).json(request.user)
}

const getAllusers = async(request,response)=>{
    let data = await PostModel.getAllusers();
    return response.status(201).json(data)
}

const updateUsers =  async(request,response)=>{
    let data = await PostModel.updateUser(request.body);
    return response.status(201).json(data)
}

module.exports = {
    getInfos,
    updateUsers,
    getAllusers,
    userCheck,
    login,
    register ,
};