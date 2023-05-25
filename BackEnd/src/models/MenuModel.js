const connection = require('./connection');
const sql = require('mssql');
require("dotenv").config();

const  getAllmenus  = async () =>{
    const pool = await connection;
   
    const result = await pool.request()
    .query('SELECT * FROM tbl_menus');
    return (result.recordset);
};


module.exports = {
    getAllmenus
};