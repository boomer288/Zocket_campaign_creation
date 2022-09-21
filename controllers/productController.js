const Product=require('../models/productModel');

const getProducts=async(req,res)=>{
    try{

        const products=await Product.find({});
        res.json(products);
    }
    catch(e){
        console.log(e);
    }
}


module.exports={getProducts};