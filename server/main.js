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




//Ejercicio 2
let array = [];

let Obj = {
    min:null,
    max:null,
};

app.post('/minmax', (req, res) => {

    array.push( req.body.number );

    if(array.length == 1){
        Obj.min = array[0];
        Obj.max = array[0];
    }else{
        for( let i=0; i < array.length; i++ ){
            if( array[i] < Obj.min){  Obj.min =  array[i]  };
            if( array[i] > Obj.max){  Obj.max =  array[i]  };
        }
    }

    res.send( JSON.stringify( Obj ) );
});


//Ejercicio 3
// Recibe por parametro una id que se presupone que es numero
// La sentencia sql esta correcta si los usuarios estan en la tabla users
// Si la conexion viene correctamente de la variable db, la sentencia de envio es correcta
/*  Se recomienda si ocurriese un error en la sentencia  a la base de datos
    ponerlo entre el bloque try{} catch(){} para controlar el error
*/
// falta una condicion de que en caso de error se emita una llamada res ya que si ocurre un error se cortara el flujo.
app.put('/users', (res, req) => {
    const userId = req.params.id;
    const sql = `DELETE FROM users WHERE id=${userID}`;
    db.query(sql, (error, result) => {
        if(error) throw error;
        res.send(`User ${userId} deleted from the db.`);
    })
})


app.listen(port, () => {
    console.log('Listen in port: ',port);
})