// DEFINIMOS LA RUTAS PARA EL USUARIO
const express= require("express")
const database=require('../libs/database')
const router =express.Router()
console.log(database)
router.get("/users",(req,res)=>{
    database.connection.query("SELECT * FROM user",function (error,result) {
        if(error!=null){
            res.json({
                message:error.sqlMessage
            })

        }
        res.json(result)
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