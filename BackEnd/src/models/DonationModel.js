const connection = require('./connection');
const bcrypt = require('bcrypt');
const sql = require('mssql');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const {Configuration,OpenAIApi} = require('openai');

const configuration = new Configuration({
   apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const donate = async(user)=>{
   const pool = await connection;

    const result3 = await pool.request()
   .query(`SELECT utilizador_nome as nome FROM tbl_utilizadores WHERE utilizador_id = '${user.id}'`);
    var nome = result3.recordset[0].nome

   let prompt = `Faz uma mensagem de 20 palavras máximo a agradecer ao ${nome} pela a doação de 1€ para unicef para crianças defavorocidas deixa a mensagem pequena e simoples`
   try {
      const completion = await openai.createCompletion({
         model:"text-davinci-003",
         prompt:prompt,
         temperature: 1,
         max_tokens:50
      });
      const x = completion.data.choices[0].text
      const result2 = await pool.request()
      .input('mensage', sql.VarChar(sql.MAX),x.toString())
      .query(`INSERT INTO tbl_relaDoa (utilizador_id,id_doacao,valor,mensagem) values (${user.id},1,1,@mensage)`);
      return(result2.recordset)

   } catch (error) {
      console.log(error.message)
      return(error)
   }

}

const getDonations = async(user)=>{
    const pool = await connection;
    const result2 = await pool.request()
    .query(`SELECT utilizador_nome, mensagem, COUNT(tbl_relaDoa.utilizador_id) AS vezes
    FROM tbl_relaDoa
    INNER JOIN tbl_utilizadores ON tbl_relaDoa.utilizador_id = tbl_utilizadores.utilizador_id
    GROUP BY tbl_relaDoa.utilizador_id, utilizador_nome, mensagem
    ORDER BY tbl_relaDoa.utilizador_id DESC
    OFFSET 0 ROWS FETCH NEXT 3 ROWS ONLY;
    `);
    return(result2.recordset)
 }
  
module.exports = {
   donate,
   getDonations
};