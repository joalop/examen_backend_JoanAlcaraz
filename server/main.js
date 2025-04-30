const express = require('express');
const cors = require("cors");
const fs = require('fs');

const app = express();

const port = process.env.port || 8000;

app.use(cors() );
app.use( express.json() );




//Ejercicio 1
app.get('/comidas', (req, res) => {
    let comidas = ['sopa','verdura','carne'];
    let random = Math.floor(Math.random()*3);
    res.send( JSON.stringify( comidas[ random ] ) );
});





app.listen(port, () => {
    console.log('Listen in port: ',port);
})