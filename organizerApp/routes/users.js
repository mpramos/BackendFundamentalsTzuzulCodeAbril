// DEFINIMOS LA RUTAS PARA EL USUARIO
const express= require("express")
const database=require('../libs/database')
const router =express.Router()
console.log(database)
router.get("/users",(req,res)=>{
    database.connection.query("SELECT * FROM users",function (error,result) {
        console.log(error)
        console.log(result)
    })
    res.json({
        ruta:"users"
    })
})
router.get("/login",(req,res)=>{
        res.json({
            ruta:"login"
        })
})
router.get("/registro",(req,res)=>{
        res.json({
            ruta:"registro"
        })
})
module.exports=router