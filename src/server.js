require ('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const router = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use('/api', router);

server.listen(process.env.port,()=>{
    console.log(`Servidor rodando em http://localhost:${process.env.port}`)
})
