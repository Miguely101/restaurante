const connection = require('./connection');
const bcrypt = require('bcrypt');
const sql = require('mssql');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const getInfos = async(user)=>{
   const pool = await connection;
   const result2 = await pool.request()
   .query(`EXEC getinfo @utilizador_id = ${user.id};`);

   return(result2.recordset)
}

const register  = async (user) =>{
 const pool = await connection;
 const hashedPassowrd = await bcrypt.hash(user.password,10);
 
 const email = await pool.request()
   .input('utilizador_email', sql.VarChar(80), user.email)
   .query('SELECT * FROM tbl_utilizadores Where utilizador_email =  @utilizador_email');
   const data = email.recordset[0];

   let resp2 ={code:201, message:"Email existe."}
   if(data != undefined || data != null) return (resp2);

    if(user.nome == null ||user.password == null || user.email == null|| user.numero == null||user.morada == null)
    return ('Bad Request');

 const result = await pool.request()
      .input('perm_id', sql.Int, 1)
      .input('utilizador_nome', sql.VarChar(50), user.nome)
      .input('utilizador_email', sql.VarChar(80), user.email)
      .input('utilizador_senha', sql.VarChar(250), hashedPassowrd)
      .input('utilizador_numero', sql.VarChar(20), user.numero)
      .input('utilizador_morada', sql.VarChar(100), user.morada)
      .input('restaurante_id', sql.Int, 1)
      .query('INSERT INTO tbl_utilizadores (restaurante_id,perm_id, utilizador_nome, utilizador_email, utilizador_senha, utilizador_numero, utilizador_morada) VALUES (@restaurante_id,@perm_id, @utilizador_nome, @utilizador_email, @utilizador_senha, @utilizador_numero, @utilizador_morada)');
      let resp ={code:200, message:"Registado com sucesso"}
      return (resp);
};


const login  = async (user) =>{
   const pool = await connection;

   const email = await pool.request()
   .input('utilizador_email', sql.VarChar(80), user.email)
   .query('SELECT * FROM tbl_utilizadores Where utilizador_email =  @utilizador_email');
   const data = email.recordset[0];
   console.log(data)
   if(data == undefined || data == null) return ("Email não existe.");
   if(await bcrypt.compare(user.password,data.utilizador_senha)){

    let userData ={id:data.utilizador_id,nome:data.utilizador_nome,email:data.utilizador_email,numero:data.utilizador_numero,morada:data.utilizador_morada,perm:data.perm_id}
    const accessToken = jwt.sign(userData, process.env.ACCESS_TOKEN)

    let resp ={code:200, accessToken}

    return (resp);
   }else{
    return ("Senha Errada");
   }
};

const getAllusers = async()=>{
   const pool = await connection;
   const email = await pool.request()
   .query('SELECT * FROM tbl_utilizadores');
   const data = email.recordset;
   return data;
}

const updateUser = async (user) =>{

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
   getInfos,
   updateUser,
   getAllusers,
   login,
   register ,
};