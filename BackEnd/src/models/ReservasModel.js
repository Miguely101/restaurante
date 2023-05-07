const connection = require('./connection');
const sql = require('mssql');
require("dotenv").config();

const createReserva  = async (reserva, user) =>{
 const pool = await connection;

 const result = await pool.request()
      .input('restaurante_id', sql.Int, reserva.restaurante_id)
      .input('utilizador_id', sql.Int, user.id)
      .input('reserva_data', sql.Date, reserva.reserva_data)
      .input('reserva_hora', sql.Int, reserva.reserva_hora)
      .input('reserva_pessoas', sql.Int, reserva.reserva_pessoas)
      .input('reserva_estado', sql.Int, "Pendente")
      .query('INSERT INTO tbl_reservas (reserva_estado,reserva_pessoas,restaurante_id , utilizador_id , reserva_data, reserva_hora) VALUES (@reserva_estado, @reserva_pessoas,@restaurante_id, @utilizador_id , @reserva_data, @reserva_hora)');
      let resp = "Reserva efetuada com sucesso";
      return (resp);
};


const getAllReserva  = async (reserva, user) =>{
    const pool = await connection;
   
    const result = await pool.request()
    .query('SELECT * FROM tbl_reservas');
    return (result.recordset);
   };

module.exports = {
    getAllReserva,
    createReserva 
};