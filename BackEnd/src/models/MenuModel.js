const connection = require('./connection');
const sql = require('mssql');
require("dotenv").config();

const  CreateMenus  = async (menu) =>{
    const pool = await connection;
    const insertResult = await pool
    const result = await pool.request()
    .input('menu_nome', sql.VarChar(50), menu.menu_nome)
    .input('menu_preco', sql.Numeric(10,2), menu.menu_preco)
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

const  getAllmenus  = async () =>{
    const pool = await connection;
   
    const result = await pool.request()
    .query('SELECT * FROM tbl_menus');
    return (result.recordset);
};

const getItemsMenu = async (id)=>{
    const pool = await connection;
   
    const result = await pool.request()
    .query('SELECT rel.*, prato.prato_nome, prato.prato_preco FROM tbl_relMenu rel JOIN tbl_pratos prato ON rel.prato_id = prato.prato_id WHERE rel.menu_id =' + id);
    return (result.recordset);
};
module.exports = {
    CreateMenus,
    getItemsMenu,
    getAllmenus
};