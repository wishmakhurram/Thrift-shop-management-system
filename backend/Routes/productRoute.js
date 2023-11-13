const express = require('express');

const router = express.Router();
const productController = require('../Controllers/productController');


// create a new product

router.post('/products',productController.createProduct);
router.get('/getallproducts',productController.getAllProducts);
router.put('/updateproduct/:id',productController.updateProduct);
router.delete('/deleteproduct/:id',productController.deleteProduct);


module.exports = router;