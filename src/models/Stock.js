const mongoose = require("mongoose")

const stockSchema = new mongoose.Schema({
    retailer_id:{
        type: Number,
         
        ref:"wetailer"
    },
    wholesaler_id:{
        type: Number,
         
        ref:"wholesaler"
    },
    
    stock_amount:{
        type: String,
         
       
    },
    date:{
        type: Date,
        
    }
})

const Stock = mongoose.model("Stock", stockSchema)
module.exports = Stock