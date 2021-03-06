const { request } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
require('./config/config')

const bodyParser = require('body-parser')
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// habilitar la carpeta public para acceder
app.use(express.static(path.resolve(__dirname, '../public')))


//configuracion global de rutas
app.use(require('./routes/index'))


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true },
    (err, res) => {
        if (err) throw error
        console.log('Base de datos ONLINE');
    });

app.listen(process.env.PORT, () => {
    console.log('escuchando el puerto', process.env.PORT);
})