const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();
const port = 3000;

//settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));//establesco la ruta donde estan los ejs

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'contraseña',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'));
//routes
app.listen(port,()=> {
    console.log(`Se está escuchando en el {
        puerto ${port}`);
});