// DEFINIMOS LA RUTAS PARA EL USUARIO
const express= require("express")

// Definimos un router, dónde tendremos asignados distintas rutas
// En express nosotros tenemos ya una función que nos define  crear el route
// la expresion es express.Router()
const router =express.Router()
// Nos devolveria la pagina de usuarios
router.get("/users",(req,res)=>{
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