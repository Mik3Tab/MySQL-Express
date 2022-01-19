const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

router.put("/updateCategory/:id", CategoryController.updateCategory);
router.get("/selectCategory",CategoryController.SelectCategory);
router.get("selectAllCategories/",CategoryController.SelectAllCategories);
router.get("/createCategory",CategoryController.CreateCategory);
router.post("/insertCategory",CategoryController.InsertCategory);

module.exports = router;