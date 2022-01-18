const express = require('express');
const app = express();
const mysql = require('mysql2');
app.use(express.json());  



//CREANDO DATABASE
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'aumonmi2013',
    database:'expressDB'
  });

  db.connect();

//GETTERS
app.get('/createdb',(req,res)=>{
  let sql ='CREATE DATABASE expressDB';
  db.query(sql,(err,result)=>{
    if(err)throw err;
    console.log(result);
    res.send('Database created...')
  })
})

app.get('/createtable',(req,res)=>{
  let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT,     title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'
  db.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send("Posts table created...");
  })
})

app.get('/categoria_has_productos',(req,res)=>{
  let sql = 'CREATE TABLE expressdb.categoria_has_productos ( id INT AUTO_INCREMENT, id_categoria INT, id_producto INT, PRIMARY KEY(id), FOREIGN KEY(id_producto) REFERENCES productos(idProducto), FOREIGN KEY(id_categoria) REFERENCES categorias(idCategoria))'
  db.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send("Categoria_has_productos ha sido creada...");
  })
})

app.post('/postProductoCategoria', (req,res)=>{
  let post = {id_producto: req.body.id_producto, id_categoria: req.body.id_categoria}
  let sql = 'INSERT INTO expressdb.categoria_has_productos SET ?'
  db.query(sql,post,(err,result)=>{
    if(err) throw err
    console.log(result)
    res.send("Cositas posteadas...");
  })
})

app.get('/createProductos',(req,res)=>{
  let sql ='CREATE TABLE productos(idProducto int AUTO_INCREMENT, tituloProducto VARCHAR(255), precio VARCHAR(255), PRIMARY KEY(idProducto))'
  db.query(sql,(err, result)=>{
    if(err) throw err;
    console.log(result);
    res.send("Tabla de productos creada...");
  })
})

app.get('/SeleccionaProducto/:id',(req,res)=>{
  let sql =`SELECT * FROM expressdb.productos WHERE idProducto = ${req.params.id}`;
  db.query(sql,(err,result)=>{
    if(err) throw err
    console.log(result)
    res.send(`Producto con id ${req.params.id} seleccionado`);
  })
})

app.get('/SeleccionaProductoName/:tituloProducto',(req,res)=>{
  let sql =`SELECT * FROM expressdb.productos WHERE tituloProducto ="${req.params.tituloProducto}"`;
  db.query(sql,(err,result)=>{
    if(err) throw err
    console.log(result)
    res.send(`Producto con titulo ${req.params.tituloProducto} seleccionado`);
  })
})

app.get('/SeleccionaCategoria/:id',(req,res)=>{
  let sql =`SELECT * FROM expressdb.categorias WHERE idCategoria = ${req.params.id}`;
  db.query(sql,(err,result)=>{
    if(err) throw err
    console.log(result)
    res.send(`Categoria con id ${req.params.id} seleccionado`);
  })
})

app.get('/SelectAllProductos',(req,res)=>{
  let sql = `SELECT * FROM expressdb.productos`;
  db.query(sql,(err,result)=>{
    if(err) throw err
    console.log(result)
    res.send("Lista de productos seleccionados")
  })
})

//GET ALL PRODUCTOS
app.get('/getAllProductos', (req,res)=>{
  let sql = "SELECT * FROM expressdb.productos";
  db.query(sql,(err, result)=>{
    if(err) throw err
    console.log(result)
    res.send("Listado de productos...");
  })
})

//GET ALL CATEGORIAS
app.get('/getAllCategorias', (req, res)=>{
  let sql = "SELECT * FROM expressdb.categorias";
  db.query(sql,(err,result)=>{
    if(err) throw err
    console.log(result);
    res.send("Listado de categorias...");
  })
})

app.get('/createCategorias',(req,res)=>{
  let sql='CREATE TABLE categorias(idCategoria int AUTO_INCREMENT, tituloCategoria VARCHAR(255), PRIMARY KEY(idCategoria))'
  db.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result);
    console.log("Tabla de categorías creada...");
  })
})


//SETTERS
app.post('/postProducto',(req,res)=>{
  let post = { tituloProducto: req.body.tituloProducto, precio: req.body.precio}
  let sql = 'INSERT INTO expressdb.productos SET ?'
  db.query(sql,post,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send("Producto insertado en la BD...");
  })
})

app.post('/postCategoria', (req,res)=>{
  let post = {tituloCategoria: req.body.tituloCategoria};
  let sql = 'INSERT INTO categorias SET ?'
  db.query(sql,post,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send("Categoría insertada en la BD...");
  })
})

//DELETE
app.delete('/deleteFromCategoriaProducto/:id',(req,res)=>{
  let sql = `DELETE FROM expressdb.categoria_has_productos WHERE id_producto = ${req.params.id}`;
  db.query(sql, (err,result)=>{
    if (err) throw err
    console.log(result)
    res.send("Producto de categoria_has_producto borrado...");
  })
})

app.delete('/deleteProducto/:id',(req,res)=>{
  let sql = `DELETE FROM expressdb.productos WHERE idProducto = ${req.params.id}`;
  db.query(sql, (err,result)=>{
    if (err) throw err
    console.log(result)
    res.send("Producto borrado...");
  })
})

//UPDATE
app.put('/updateProducto/:id',(req,res)=>{
  let newTitleProd = req.body.tituloProducto;
  let newPrecioProd = req.body.precio;
  let sql = `UPDATE productos SET tituloProducto = "${newTitleProd}", precio = "${newPrecioProd}" WHERE idProducto = ${req.params.id}`;
  db.query(sql,(err, result)=>{
     if(err) throw err;
     console.log(result);
     res.send("Producto actualizado...");
  })
})

app.put('/updateCategoria/:id',(req,res)=>{
  let newTitle = req.body.tituloCategoria;
  let sql = `UPDATE categorias SET tituloCategoria = "${newTitle}" WHERE idCategoria = ${req.params.id}`;
  db.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send("Categoria actualizada...");
  })

})


//POSTS

app.post('/', (req,res)=>{
  let post = {title: req.body.title, body: req.body.body};
  let sql = 'INSERT INTO posts SET ?'
  db.query(sql,post,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send('Post added...');
  })
})


app.listen('4000', ()=>{
  console.log("Servidor encendido");
})