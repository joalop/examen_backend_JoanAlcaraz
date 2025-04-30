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

app.listen(port, () => {
    console.log('Listen in port: ',port);
})