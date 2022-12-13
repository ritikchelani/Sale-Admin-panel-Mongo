const express = require('express');
const server=express();
const port =process.env.PORT || 4010;
const exphbs=require('express-handlebars');
const router=require('./src/routes/index');
const connection = require("./db");
var bodyParser = require("body-parser");
const cors = require("cors")
const http = require("http");
connection();


server.use(cors())
server.use(bodyParser.json());
server.use(express.json());
server.use(express.urlencoded({ extended:true }));
server.use(express.static('public'));
server.engine('hbs',exphbs.engine({extname:".hbs"}))
server.set('view engine', 'hbs');
server.use('/',router);


server.listen(port,()=>{
    console.log(`server listening on port ${port}`)
});