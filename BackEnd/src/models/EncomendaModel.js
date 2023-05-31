const connection = require('./connection');
const sql = require('mssql');
require("dotenv").config();

const CreateEncomenda = async (ecomenda, id) => {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var formattedDate = new Date(year, month - 1, day); // Convert to Date object
  var hour = currentDate.getHours();

  const pool = await connection;
  const insertResult = await pool;

  const result = await pool
    .request()
    .input('restaurante_id', sql.Int, ecomenda.restaurante_id)
    .input('utilizador_id', sql.Int, id)
    .input('encomenda_data', sql.Date, formattedDate)
    .input('encomenda_hora', sql.Int, hour)
    .input('encomenda_valor', sql.Numeric(10, 2), ecomenda.valorTotal)
    .input('estado_id', sql.Int, 1)
    .query('INSERT INTO tbl_encomendas(restaurante_id,utilizador_id,encomenda_data,encomenda_hora,encomenda_valor,estado_id) VALUES (@restaurante_id,@utilizador_id,@encomenda_data,@encomenda_hora,@encomenda_valor,@estado_id)');

  const selectResult = await pool.request().query('SELECT MAX(encomenda_id) AS max_id FROM tbl_encomendas');
  const insertedMenuId = selectResult.recordset[0].max_id;

  for (let i = 0; i < ecomenda.pratos.length; i++) {
    const { prato_id, prato_quant } = ecomenda.pratos[i];
    const result = await pool
      .request()
      .input('encomenda_id', sql.Int, insertedMenuId)
      .input('prato_id', sql.Int, prato_id)
      .input('relEncomenda_quantidade', sql.Int, prato_quant)
      .query('INSERT INTO tbl_relEncomenda (encomenda_id, prato_id,relEncomenda_quantidade) values (@encomenda_id, @prato_id,@relEncomenda_quantidade)');
  }

  let resp = { code: 200, message: "encomenda criada com sucesso" };
  return resp;
};



module.exports = {
  CreateEncomenda
};