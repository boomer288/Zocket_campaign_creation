const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    img:String,
    title:String,
    Description:Number,  
});

module.exports=mongoose.model('product',productSchema);
