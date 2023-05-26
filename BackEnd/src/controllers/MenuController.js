const { request, response } = require('express');
const PostModel= require('../models/MenuModel');

const CreateMenus = async(request,response)=>{
    let data = await PostModel.CreateMenus(request.body);
    return response.status(201).json(data)
}

const getAllmenus = async(request,response)=>{
    let data = await PostModel.getAllmenus();
    return response.status(201).json(data)
}


const getItemsMenu = async(request,response)=>{
    let data = await PostModel.getItemsMenu(request.params.id);
    return response.status(201).json(data)
}
const deleteMenu = async(request,response)=>{
    let data = await PostModel.deleteMenu(request.body);
    return response.status(201).json(data)
}

const editMenu = async(request,response)=>{
    let data = await PostModel.editMenu(request.body,request.params.id);
    return response.status(201).json(data)
}
module.exports = {
    editMenu,
    deleteMenu,
    getItemsMenu, 
    getAllmenus,
    CreateMenus,
};