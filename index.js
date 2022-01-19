const express = require('express');
const app = express();
app.use('/categoria', require('./routes/categoria'));
app.use('/productos', require('./routes/productos'));

app.use(express.json());  


app.use('/products', require('./routes/productos'))
app.use('/categorias',require('./routes/categoria'));

app.listen('4000', ()=>{
  console.log("Servidor encendido");
})