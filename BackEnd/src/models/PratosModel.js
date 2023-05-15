const connection = require('./connection');
const sql = require('mssql');
require("dotenv").config();

const  getAllpratos  = async () =>{
    const pool = await connection;
   
    const result = await pool.request()
    .query('SELECT * FROM tbl_pratos');
    return (result.recordset);
};
const  getAllTipos = async () =>{
    const pool = await connection;
   
    const result = await pool.request()
    .query('SELECT * FROM tbl_pratosTipos');
    return (result.recordset);
};

const createPrato = async (prato) =>{
    const pool = await connection;
    const result = await pool.request()
    .input('prato_nome', sql.VarChar(50), prato.prato_nome)
    .input('prato_preco', sql.Numeric(10,2), prato.prato_preco)
    .input('pratoTipo_id', sql.Int,  prato.pratoTipo_id)
    .input('prato_imagem', sql.VarChar(200), prato.prato_imagem)
    .query('INSERT INTO tbl_pratos(prato_nome,prato_preco, pratoTipo_id, prato_imagem) VALUES (@prato_nome,@prato_preco, @pratoTipo_id, @prato_imagem)');
    let resp ={code:200, message:"Prato criada com sucesso"}
    return (resp);
};


module.exports = {
    createPrato,
    getAllpratos,
    getAllTipos
};