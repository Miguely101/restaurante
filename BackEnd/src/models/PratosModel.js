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

const editPratoById = async (PratoId) =>{

    const pool = await connection;
  
    const result = await pool.request()
    .input('perm_id', sql.Int,user.perm_id)
    .input('utilizador_id', sql.Int, user.utilizador_id)
    .input('utilizador_nome', sql.VarChar(50), user.utilizador_nome)
    .input('utilizador_email', sql.VarChar(80), user.utilizador_email)
    .input('utilizador_numero', sql.VarChar(20), user.utilizador_numero)
    .input('utilizador_morada', sql.VarChar(100), user.utilizador_morada)
    .query('UPDATE tbl_utilizadores SET perm_id = @perm_id, utilizador_nome = @utilizador_nome, utilizador_email = @utilizador_email, utilizador_numero = @utilizador_numero, utilizador_morada = @utilizador_morada WHERE utilizador_id = @utilizador_id');
    return ("Sucesso");
 }


module.exports = {
    deletePrato,
    createPrato,
    getAllpratos,
    getAllTipos
};