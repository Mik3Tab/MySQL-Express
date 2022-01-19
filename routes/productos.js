const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController')

router.put('/updateProduct/:id',ProductController.UpdateProduct)
router.get('/createTable', ProductController.CreateTableProduct);
router.get('/SelectProducts',ProductController.SelectAllProducts);
router.get('/SelectProductName/:name',ProductController.SelectProductName);
router.get('/SelectProductId/:id', ProductController.SelectProductId);

module.exports = router;