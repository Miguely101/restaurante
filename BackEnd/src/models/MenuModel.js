const connection = require('./connection');
const sql = require('mssql');
require("dotenv").config();

const  getAllmenus  = async () =>{
    const pool = await connection;
   
    const result = await pool.request()
    .query('SELECT * FROM tbl_menus');
    return (result.recordset);
};

const getItemsMenu = async (id)=>{
    const pool = await connection;
   
    const result = await pool.request()
    .query('SELECT rel.*, prato.prato_nome, prato.prato_preco FROM tbl_relMenu rel JOIN tbl_pratos prato ON rel.prato_id = prato.prato_id WHERE rel.menu_id =' + id);
    return (result.recordset);
};
module.exports = {
    getItemsMenu,
    getAllmenus
};