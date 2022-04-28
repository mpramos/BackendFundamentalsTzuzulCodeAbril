// modulo que nos permite obtener la ubicacion de los archivos
// Path ya viendo instalado, es un modulo localque ya viene en nodeJS
const path = require("path") // path:permite administrar rutas de archivos
// Modulos externos
const express=require('express')
const port=5000
const app = express()
// si qwuiero mandar html hacemos lo siguiente
app.get("/",(req,res)=>{
    console.log(__dirname)
    // enviamos el archivo con sendFile
    // permite unir la ruta en la cual tenemos la ruta del proyecto
    return res.sendFile(path.join(__dirname,"static","index.html"))
})
app.listen(port,()=>{
    console.log("Escuchando en : http://localhost: "+ port)
})