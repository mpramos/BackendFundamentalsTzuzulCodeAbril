const express= require("express")

const app=express()
//  Indica que estamos visitando el home , inicio raiz   
app.get("/",function(peticion,respuesta) {
   respuesta.send("Metodo GET")    
})
// /usuarios:Es la ruta que indica que estamos visitando la sección usuarios
// En teoria esta ruta indica que estamos creando usuarios 
app.post("/usuarios",function(preticion, respuesta) {
    respuesta.send("Método POST")
    
})

app.put("/",function(peticion, respuesta) {
    respuesta.send("Método PUT")
})

app.delete("/", function(peticion, respuesta) {
    respuesta.send("Método DELETE")
})
app.listen(5000,()=>{
    console.log("Ecuchando : http://localhost:5000")
})
