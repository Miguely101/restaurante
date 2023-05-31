const connection = require('./connection');
const sql = require('mssql');
require("dotenv").config();

const CreateEncomenda  = async (menu) =>{
    const pool = await connection;
    const insertResult = await pool
    const result = await pool.request()
    .input('restaurante_id', sql.Int, menu.menu_nome)
    .input('utilizador_id', sql.Int, menu.menu_preco)
    .input('encomenda_data', sql.Numeric(10,2), menu.menu_preco)
    .input('encomenda_hora', sql.Int, menu.menu_preco)
    .input('encomenda_valor', sql.Numeric(10,2), menu.menu_preco)
    .input('estado_id', sql.Int,1)
    .query('INSERT INTO tbl_menus(menu_nome,menu_preco) VALUES (@menu_nome,@menu_preco)');

    const selectResult = await pool
      .request()
      .query('SELECT MAX(menu_id) AS max_menu_id FROM tbl_menus');
     const insertedMenuId = selectResult.recordset[0].max_menu_id;


    for (let i = 0; i < menu.ids.length; i++) {
        const prato_id  = menu.ids[i];
        const result = await pool.request()
        .input('menu_id', sql.Int, insertedMenuId)
        .input('prato_id', sql.Int, prato_id)
        .query('INSERT INTO tbl_relMenu (menu_id, prato_id) values (@menu_id, @prato_id)')    
      }

      let resp ={code:200, message:"Menu criado com sucesso"}
      return(resp)
};


module.exports = {
  CreateEncomenda
};