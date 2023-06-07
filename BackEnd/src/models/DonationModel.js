const connection = require('./connection');
const bcrypt = require('bcrypt');
const sql = require('mssql');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const donate = async(user)=>{
   const pool = await connection;
   const result2 = await pool.request()
   .query(`INSERT INTO tbl_relaDoa (utilizador_id,id_doacao,valor) values (${user.id},1,1)`);

   return(result2.recordset)
}

const getDonations = async(user)=>{
    const pool = await connection;
    const result2 = await pool.request()
    .query(`SELECT COUNT(relaDoa_id) FROM tbl_relaDoa`);
 
    return(result2.recordset)
 }
  
module.exports = {
   donate,
   getDonations
};