const path = require("path")
const express=require('express')
const port=5000

//Importando router
const users=require("./routes/users")
const app = express()

//>>>>>>>>>> SECCION PARA LOS MIDDLEWARE
//Middleware para archivos estaticos, con esto podemos usar css , html
app.use("/static",express.static(path.join(__dirname,"static")))

// >>>>>>>> SECCION PARA LOS ROUTERS

// Vamos a asignar un router osea el de users
app.use(users)// No es un middleware, solo le asignamos la ruta

app.get("/",(req,res)=>{
    console.log(__dirname)
    return res.sendFile(path.join(__dirname,"views","index.html"))
})
app.listen(port,()=>{
    console.log("Escuchando en : http://localhost:"+ port)
})