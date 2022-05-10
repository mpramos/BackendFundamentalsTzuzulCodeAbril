const mysql = require("mysql2")

// establecemos la conexion
const connection = mysql.createConnection({
    // Tenemos que pasar los detalles de nuestra base de datos dentro de createConnection
    host:'127.0.0.1', // 'localhost'
    port : '3306',
    user:'maripao',
    password:'12345',
    database:'organizerapp'
})

//exportamos como objeto para poder exportar varias cosas y no solo una
module.exports={
    connection
}

