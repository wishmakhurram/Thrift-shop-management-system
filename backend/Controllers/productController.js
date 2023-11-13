const Product = require('../Models/productModel');

async function createProduct(req,res){
    try {
        console.log(req.body);
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function getAllProducts(req,res){
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
async function updateProduct(req,res){
    try {
        const products = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
async function deleteProduct(req,res){
    try {
        const products = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
};