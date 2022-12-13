const wholesaler=require('../models/Wholesaler');
const retailer=require('../models/Retailer');
const stock=require('../models/Stock');


const allWholesalers = async (req,res)=>{

    try {
    const Wholesaler = await wholesaler.find({id:req.params.id});
    // await res.status(200).send(Wholesaler);
    // console.log(Wholesaler);
    await res.render('apione', {Wholesaler});
    } catch (e) {
        res.status(404).send()
        console.log(e);
    }
}


const RetailerOneWhole = async (req,res)=>{

    try {
    const Retailer = await retailer.find();

    await res.render('apitwo', {Retailer});
    console.log(Retailer);
    } catch (e) {
        res.status(404).send()
        console.log(e);
    }
}

const MonthlyTurnOver = async (req,res)=>{

    try {
    const Stock = await stock.find();
    await res.render('apithree', {Stock});
    console.log(Stock);
    } catch (e) {
        res.status(404).send()
        console.log(e);
    }
}


const MaxTurnOver = async (req,res)=>{

    try {
    const Stock = await stock.find();
    await res.render('apifour', {Stock});
    console.log(Stock);
    } catch (e) {
        res.status(404).send()
        console.log(e);
    }
}





const home = async (req,res)=>{
    await  res.render('home');
}


module.exports={
    home,
    allWholesalers,
    RetailerOneWhole,
    MonthlyTurnOver,
    MaxTurnOver
}