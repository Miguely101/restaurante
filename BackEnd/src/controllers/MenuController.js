const { request, response } = require('express');
const PostModel= require('../models/MenuModel');



const getAllmenus = async(request,response)=>{
    let data = await PostModel.getAllmenus();
    return response.status(201).json(data)
}


const getItemsMenu = async(request,response)=>{
    let data = await PostModel.getItemsMenu(request.params.id);
    return response.status(201).json(data)
}

module.exports = {
    getItemsMenu, 
    getAllmenus,
};