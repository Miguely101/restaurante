const { request, response } = require('express');
const PostModel= require('../models/AuthModel');


//Create
const register = async(request, response) =>{
 
    let user = {nome:request.body.nome, email:request.body.email, morada:request.body.morada, numero:request.body.numero,password:request.body.password}
    console.log(user);
    let resp = await PostModel.register(user); 
    return response.status(201).json(resp);
};

module.exports = {
   register ,
};