const path = require("path")
const express=require("express")
const port=5000
const users=require("./routes/users")

//Importando router
const app = express()

app.use("/static",express.static(path.join(__dirname,"static")))


app.use(users)

app.get("/",(req,res)=>{
    console.log(__dirname)
    return res.sendFile(path.join(__dirname,"views","index.html"))
})
app.listen(port,()=>{
    console.log("Escuchando en : http://localhost:"+ port)
})