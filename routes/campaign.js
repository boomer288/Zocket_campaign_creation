const Router=require('express').Router();
const {getCampaigns,postCampaign,toggleLive,deleteCampaign}=require('../controllers/campaignController');

Router.use('/all',getCampaigns);
Router.post('/post',postCampaign);
Router.post('/toggleLive',toggleLive);
Router.delete('/delete',deleteCampaign);
module.exports=Router;