const { request, response } = require('express');
const PostModel= require('../models/DonationModel');


const donate = async(request,response)=>{
    console.log('x1')
    let data = await PostModel.donate(request.user)
    return response.status(201).json(data)
}

const getDonations = async(request,response)=>{
    let data = await PostModel.getDonations();
    return response.status(201).json(data)
}



module.exports = {
    donate,
    getDonations,
};