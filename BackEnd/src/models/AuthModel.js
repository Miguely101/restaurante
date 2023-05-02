const connection = require('./connection');
const bcrypt = require('bcrypt');
const sql = require('mssql');

require("dotenv").config();

const register  = async (user) =>{
 const pool = await connection;
 const hashedPassowrd = await bcrypt.hash(user.password,10);

if(user.nome == null ||user.password == null || user.email == null|| user.numero == null||user.morada == null)
return ('Bad Request');

 const result = await pool.request()
      .input('perm_id', sql.Int, 1)
      .input('utilizador_nome', sql.VarChar(50), user.nome)
      .input('utilizador_email', sql.VarChar(80), user.email)
      .input('utilizador_senha', sql.VarChar(250), hashedPassowrd)
      .input('utilizador_numero', sql.VarChar(20), user.numero)
      .input('utilizador_morada', sql.VarChar(100), user.morada)
      .query('INSERT INTO tbl_utilizadores (perm_id, utilizador_nome, utilizador_email, utilizador_senha, utilizador_numero, utilizador_morada) VALUES (@perm_id, @utilizador_nome, @utilizador_email, @utilizador_senha, @utilizador_numero, @utilizador_morada)');
    return ('Registado com sucesso!');
};

const login  = async (user) =>{
   const pool = await connection;

   const email = await pool.request()
   .input('utilizador_email', sql.VarChar(80), user.email)
   .query('SELECT * FROM tbl_utilizadores Where utilizador_email =  @utilizador_email');
   const data = email.recordset[0];

   if(data == undefined || data == null) return ("Email não existe.");
   if(await bcrypt.compare(user.password,data.utilizador_senha)){
    return ("Login feito com sucesso");
   }else{
    return ("Senha Errada");
   }
};
   
module.exports = {
    login,
    register ,
};