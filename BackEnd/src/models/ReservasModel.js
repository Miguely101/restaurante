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
      .input('reserva_estado', sql.VarChar(50), "Pendente")
      .query('INSERT INTO tbl_reservas (reservas_estado,reserva_pessoas,restaurante_id , utilizador_id , reserva_data, reserva_hora) VALUES (@reserva_estado, @reserva_pessoas,@restaurante_id, @utilizador_id , @reserva_data, @reserva_hora)');
      let resp = "Reserva efetuada com sucesso";
      return (resp);
};




const getAllReserva  = async (reserva, user) =>{
    const pool = await connection;
   
    const result = await pool.request()
    .query('SELECT * FROM tbl_reservas');
    return (result.recordset);
   };

   const  getAllMessasOnById  = async (id) =>{
    const pool = await connection;
   
    const result = await pool.request()
    .input('restaurante_id',sql.Int, id)
    .query('SELECT mesas.mesa_id, mesas.mesa_lugares FROM tbl_mesas AS mesas INNER JOIN tbl_restaurantes AS restaurantes ON mesas.restaurante_id = restaurantes.restaurante_id LEFT JOIN tbl_reservaMesas AS reservas ON mesas.mesa_id = reservas.mesa_id WHERE reservas.reserva_id IS NULL AND restaurantes.restaurante_id = @restaurante_id');
    return (result.recordset);
   };
 
module.exports = {
    getAllMessasOnById,
    getAllReserva,
    createReserva 
};