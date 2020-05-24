const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//importing routes
const customersRoutes = require('./routes/customer.js');//digo de donde vienen las rutas

const port = 8000;
//settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));//establesco la ruta donde estan los ejs

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {//conecto con la base crudnodejsmysql
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'));

app.use(express.urlencoded({extended: false}));

//routes
app.use('/', customersRoutes);//ruta inicial del servidor

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port,()=> {
    console.log(`Se está escuchando en el {
        puerto ${port}`);
});