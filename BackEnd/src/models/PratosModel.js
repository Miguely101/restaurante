const connection = require('./connection');
const sql = require('mssql');
require("dotenv").config();

const  getAllpratos  = async () =>{
    const pool = await connection;
   
    const result = await pool.request()
    .query('SELECT tbl_pratos.prato_id,tbl_pratos.prato_imagem,tbl_pratos.prato_nome,tbl_pratos.prato_preco, pratosTipos.pratoTipo_nome AS pratoTipo FROM tbl_pratos JOIN tbl_pratosTipos AS pratosTipos ON tbl_pratos.pratoTipo_id = pratosTipos.pratoTipo_id');
    return (result.recordset);
};
const  getAllTipos = async () =>{
    const pool = await connection;
   
    const result = await pool.request()
    .query('SELECT * FROM tbl_pratosTipos');
    return (result.recordset);
};

const createPrato = async (prato) =>{
    const pratoloads =  await prato
    const pool = await connection;
    const result = await pool.request()
    .input('prato_nome', sql.VarChar(50), pratoloads.prato_nome)
    .input('prato_preco', sql.Numeric(10,2), pratoloads.prato_preco)
    .input('pratoTipo_id', sql.Int,  pratoloads.pratoTipo_id)
    .input('prato_imagem', sql.VarChar(sql.MAX), pratoloads.prato_imagem)
    .query('INSERT INTO tbl_pratos(prato_nome,prato_preco, pratoTipo_id, prato_imagem) VALUES (@prato_nome,@prato_preco, @pratoTipo_id, @prato_imagem)');
    let resp ={code:200, message:"Prato criado com sucesso"}
    return (resp);
};


const deletePrato = async (prato) =>{
    const pool = await connection;
    for (let i = 0; i < prato.length; i++) {
    const result = await pool.request()
    .input('prato_id', sql.Int,  prato[i])
    .query('DELETE FROM tbl_pratos where prato_id = @prato_id')
    }
    let resp ={code:200, message:"Prato apagado"}
    return (resp)
};
module.exports = {
    deletePrato,
    createPrato,
    getAllpratos,
    getAllTipos
};