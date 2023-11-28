const express = require('express');

const router = express.Router();
const productController = require('../Controllers/productController');


// create a new product

router.post('/products',productController.upload.single("image"),productController.createProduct);
router.get('/getallproducts',productController.getAllProducts);
router.get('/getproductbyid',productController.getProductById);
router.put('/cancelbooking/:id',productController.updateProduct);
router.delete('/deleteproduct/:id',productController.deleteProduct);


module.exports = router;