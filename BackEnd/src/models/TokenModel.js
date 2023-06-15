const jwt = require('jsonwebtoken');
require("dotenv").config();


const authenticateToken = async(request, response,next) =>{

    const authHeader = request.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return response.sendStatus(401)
    jwt.verify(token,process.env.ACCESS_TOKEN, (err,user) =>{
        if(err) return response.sendStatus(403)
        request.user = user
        next()
    })
};



module.exports = {
   authenticateToken
};