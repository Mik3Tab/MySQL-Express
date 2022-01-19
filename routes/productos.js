const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController')

router.put('/',ProductController.UpdateProduct)
router.get('/', ProductController.CreateTableProduct);
router.get('/',ProductController.SelectAllProducts);
router.get('/',ProductController.SelectProductName);
router.get('/', ProductController.SelectProductId);

module.exports = router;