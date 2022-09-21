const Router=require('express').Router();
const { getProducts } = require('../controllers/productController');

Router.get('/all',getProducts);

module.exports=Router;