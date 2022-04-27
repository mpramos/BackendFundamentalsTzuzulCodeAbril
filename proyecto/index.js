const express= require("express")

const app=express()
app.use(express.text())// Utilizando el middleware para 
// la conversion de datos 

app.get("/",function(peticion,respuesta) {
   respuesta.send("Metodo GET")    
})
app.post("/usuarios",function(peticion, respuesta) {
    const user=peticion.body
    respuesta.send("Método POST: "+user)
    
})
app.post("/json",function(peticion, respuesta) {
    console.log(peticion.body)  
    respuesta.send("Hola: ")    
})

app.put("/",function(peticion, respuesta) {
    //en body se encuentra la información que nos da el cliente
    respuesta.send("Método PUT")
})
  
app.delete("/", function(peticion, respuesta) {
    respuesta.send("Método DELETE")
})
app.listen(5000,()=>{
    console.log("Ecuchando : http://localhost:5000")
})
