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

   const  getAllMessasOnById  = async (id,id2) =>{
    const pool = await connection;
    const result2 = await pool.request()
    .query(`EXEC GetMesasDisponiveis`);
    console.log(result2)

    const result = await pool.request()
    .query(`EXEC gettingTodasMesas @restaurantId = ${id} , @reservaId = ${id2}`);
    return (result.recordset);
   };

   
const  getAllReservaById  = async (id) =>{
    const pool = await connection;
   
    const result = await pool.request()
    .input('restaurante_id',sql.Int,id)
    .query('SELECT * FROM tbl_reservas where restaurante_id = @restaurante_id');
    return (result.recordset);
};

const  setMesasReservas = async (array,id,id2) =>{
    const pool = await connection;
    for (let i = 0; i < array.length; i++) {
        const { mesa_id } = array[i];
        const result = await pool.request()
        .input('reserva_id', sql.Int, id)
        .input('mesa_id', sql.Int, mesa_id)
        .query('INSERT INTO tbl_reservaMesas (reserva_id, mesa_id) values (@reserva_id, @mesa_id)')
    
      }
      var text = "Aceite"
      if(id2 == 1){text = "Cancelada"}

        


      const result2 = await pool.request()
      .input('reserva_id', sql.Int, id)
      .input('reserva_estado',sql.VarChar(50), text)
      .query('UPDATE tbl_reservas SET reservas_estado = @reserva_estado where reserva_id=@reserva_id ');  

      return ("Reserva Confirmada")
};

const  getMesas  = async (id) =>{
    const pool = await connection;
   
    const result = await pool.request()
    .query(`SELECT * FROM tbl_reservaMesas where reserva_id = ${id}`);
    return (result.recordset);
};
module.exports = {
    getMesas,
    setMesasReservas,
    getAllReservaById,
    getAllMessasOnById,
    getAllReserva,
    createReserva 
};