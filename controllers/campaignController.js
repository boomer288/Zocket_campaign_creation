const Campaign=require('../models/campaignModel');

const getCampaigns=async(req,res)=>{
    try{
        const query=[];
        
        if(req.query.title!='')
        {
            query.push({$match:{"product.title":{$regex:req.query.title}}});
        }

        if(req.query.platform!='All Platforms')
        {
            if(req.query.platform=='Google')
            query.push({$match:{$or:[{"taskid":1},{"taskid":7},{"taskid":9}]}});
            else 
            if(req.query.platform=='Youtube')
            query.push({$match:{$or:[{"taskid":5},{"taskid":8}]}});
            else
            if(req.query.platform=='Instagram')
            query.push({$match:{$or:[{"taskid":6}]}});
            else 
            if(req.query.platform=='FaceBook')
            query.push({$match:{$or:[{"taskid":2},{"taskid":3},{"taskid":4}]}});
        }
        
        if(req.query.status!='All Status')
        {
            if(req.query.status=='Live')
            query.push({$match:{'onOff':1}});
            else
            query.push({$match:{'onOff':0}});

        }

        if(req.query.date=="Last 30 Days")
        {
            query.push({$match:{$gt:{'startDate':new Date(new Date().setDate(today.getDate() - 30))}}});
        }

        let data=[];

        if(query.length!==0)
        data=await Campaign.aggregate(query);
        else data=await Campaign.find({});

        res.json(data);
    }
    catch(e)
    {
        console.log(e);
    }
}

const postCampaign=async (req,res)=>{
    try{
        const newCampaign=new Campaign(req.body);
        const response=await newCampaign.save();
        res.send(response);
        console.log(response);
    }
    catch(e)
    {
        console.log(e);
    }
}

const toggleLive=async(req,res)=>{
    try{
        const cur_campaign=await Campaign.findById(req.body._id);
        cur_campaign.onOff=1-cur_campaign.onOff;
        cur_campaign.save();
    }
    catch(e)
    {
        console.log(e);
    }
}

const deleteCampaign=async(req,res)=>{
    try{
            const response=await Campaign.findByIdAndDelete(req.query.id);
            res.json(response);
    }
    catch(e)
    {
        console.log(e);
    }
}

module.exports={getCampaigns,postCampaign,toggleLive,deleteCampaign}