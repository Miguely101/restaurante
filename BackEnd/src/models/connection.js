const sql = require('mssql');
require("dotenv").config();

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  server: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DB,
  options: {
    encrypt: true,
    trustServerCertificate: true,
    enableArithAbort: true
  },
  authentication: {
    type: 'default',
    options: {
      userName: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD
    }
  }
};

const connection = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = connection;
