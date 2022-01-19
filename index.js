const express = require('express');
const app = express();

app.use(express.json());  
app.use('/categoria', require('./routes/categoria'));
app.use('/productos', require('./routes/productos'));

app.listen('4000', ()=>{
  console.log("Servidor encendido");
})