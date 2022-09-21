const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    icon:String,
    title:String,
    description:Number,  
});

const campaignSchema=new mongoose.Schema({
    product:productSchema,
    taskid:Number,
    productid:Number,
    timeline:Number,
    startDate:Date,
    endDate:Date,
    budget:Number,
    ltoggle:Number,
    location:String,
    radius:Number,
    outlook:Number,
    onOff:{type:Number,default:1},
    status:{type:String,default:'live'},
    clicks:{type:Number,default:Math.floor(Math.random()*1000)},
});

module.exports=mongoose.model('campaign',campaignSchema);
