const express= require('express');
const router=express.Router();
const {allWholesalers,home,RetailerOneWhole, MonthlyTurnOver, MaxTurnOver}=require('../controllers/Wholesalercontroller')

router.get('/',home)
router.get('/api/1/:id', allWholesalers)
router.get('/api/2', RetailerOneWhole)
router.get('/api/3', MonthlyTurnOver)
router.get('/api/4', MaxTurnOver)
module.exports=router;