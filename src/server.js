require('dotenv').config(); //add thu vien .env

const express = require('express'); //commonJS
const configViewEngine = require('./config/viewEngine'); // config view engine (phai dat trung ten bien mooi co the mappings)
const webRoutes = require('./routes/web'); // config web routes (o day chi co 1 bien nen khong can dat trung ten)

// import express from 'express'; //ES module
const app = express() //app express
const port = process.env.PORT || 3000; 
const hostname = process.env.HOST_NAME; //default port

// config template engine
configViewEngine(app);
// lay routes
app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port} and listening host ${hostname}`)
})