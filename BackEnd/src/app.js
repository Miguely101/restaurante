const express = require('express');
const router = require('./router');
const cors = require('cors');
const app = express();
const whitelist = ['http://localhost:3333', 'http://localhost','http://localhost:4200'];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin ||whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(('Not allowed by CORS'))
    }
  }
}


app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

module.exports = app;