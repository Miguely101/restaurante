const connection = require('./connection');

require("dotenv").config();

const  getAllRestaurantes  = async () =>{
 const pool = await connection;
 const result = await pool.request().query('SELECT * FROM tbl_restaurantes');
 return result
};


module.exports = {
    getAllRestaurantes ,
};