const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

router.put("/:id", CategoryController.updateCategory);
router.get("/",CategoryController.SelectCategory);
router.get("/",CategoryController.SelectAllCategories);
router.get("/",CategoryController.CreateCategory);
router.post("/",CategoryController.InsertCategory);

module.exports = router;