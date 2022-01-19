db = require("../config/database");

const CategoryController = {
    updateCategory(req,res){
        let newTitle = req.body.tituloCategoria;
        let sql = `UPDATE categorias SET tituloCategoria = "${newTitle}" WHERE idCategoria = ${req.params.id}`;
        db.query(sql,(err,result)=>{
          if(err) throw err;
          console.log(result);
          res.send("Categoria actualizada...");
        })
      },
      SelectCategory(req,res){
        let sql =`SELECT * FROM expressdb.categorias WHERE idCategoria = ${req.params.id}`;
        db.query(sql,(err,result)=>{
          if(err) throw err
          console.log(result)
          res.send(`Categoria con id ${req.params.id} seleccionado`);
        })
      },
      SelectAllCategories(req, res){
        let sql = "SELECT * FROM expressdb.categorias";
        db.query(sql,(err,result)=>{
          if(err) throw err
          console.log(result);
          res.send("Listado de categorias...");
        })
      },
      CreateCategory(req,res){
        let sql='CREATE TABLE categorias(idCategoria int AUTO_INCREMENT, tituloCategoria VARCHAR(255), PRIMARY KEY(idCategoria))'
        db.query(sql,(err,result)=>{
          if(err) throw err;
          console.log(result);
          console.log("Tabla de categorías creada...");
        })
        
      }, 
      InsertCategory(req,res){
        let post = {tituloCategoria: req.body.tituloCategoria};
        let sql = 'INSERT INTO categorias SET ?'
        db.query(sql,post,(err,result)=>{
          if(err) throw err;
          console.log(result);
          res.send("Categoría insertada en la BD...");
        })
      }
}

module.exports = CategoryController;

