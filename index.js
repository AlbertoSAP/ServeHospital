// importacion de el lector de .env
require('dotenv').config();
// importacion del paquete express
const express = require('express');
// importacion del paquete cors
const cors = require(' cors ')
const { DBconexion } = require('./DB/config');
// crear serve express
const app = express();
// configuracion de Cors
app.use(cors());
// Base de Datos
DBconexion();
console.log(process.env);

// rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })
});

app.listen(process.env.PORT, () => {
    console.log('sevidor en linia en el puerto :', process.env.PORT);
});