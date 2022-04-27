const express= require("express")

const app=express()
app.use(express.text())
app.use(express.json()) // Utilizando el middleware para la coversion de datos
app.get("/",function(peticion,respuesta) {
   respuesta.send("Metodo GET")    
})
app.post("/usuarios",function(peticion, respuesta) {
    const user=peticion.body
    respuesta.send("Método POST: "+user)
})
app.post("/json",function(peticion, respuesta) {
    const user=peticion.body 
    respuesta.send("Hola: "+ user.nombre)    
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
