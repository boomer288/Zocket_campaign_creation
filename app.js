const express=require('express');
const app=express();
const path=require('path');
const cors=require('cors');
app.use(cors());

app.use(express.urlencoded({extended:false}));
app.use(express.json());
require('dotenv').config();

console.log(process.env.MONGO_URI);
require('mongoose').connect(process.env.MONGO_URI).then(()=>console.log("Database is Connected....")).catch(e=>console.log(e));

const campaign_route=require('./routes/campaign');
const product_route=require('./routes/product');

app.use(express.static(path.join('build')));

app.use('/campaign',campaign_route);
app.use('/product',product_route);

const PORT=process.env.PORT;


app.listen(PORT,()=>{
    console.log(`Server is Running on PORT ${process.env.PORT}`);
})
