const Cat_has_ProductController = {
    InsertCatProduct(req,res){
        let post = {id_producto: req.body.id_producto, id_categoria: req.body.id_categoria}
        let sql = 'INSERT INTO expressdb.categoria_has_productos SET ?'
        db.query(sql,post,(err,result)=>{
          if(err) throw err
          console.log(result)
          res.send("Cositas posteadas...");
        })
      },
    DeleteProduct(req,res){
        let sql = `DELETE FROM expressdb.categoria_has_productos WHERE id_producto = ${req.params.id}`;
        db.query(sql, (err,result)=>{
          if (err) throw err
          console.log(result)
          res.send("Producto de categoria_has_producto borrado...");
        })
      }
}