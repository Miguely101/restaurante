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

   let prompt = "Faz uma mensagem de 50 palavras máximo a agradecer 1€ de doação"
   try {
      const completion = await openai.createCompletion({
         model:"text-davinci-003",
         prompt:prompt,
         temperature: 1,
         max_tokens:50
      });

      const result2 = await pool.request()
      .query(`INSERT INTO tbl_relaDoa (utilizador_id,id_doacao,valor,mensagem) values (${user.id},1,1,${completion.data.choices[0].text})`);
      console.log(completion.data.choices[0].text)
      return(result2.recordset)

   } catch (error) {
      console.log(error.message)
      return(error)
   }

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