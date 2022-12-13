const mongoose = require("mongoose")

const RetialerSchema = new mongoose.Schema({
    id:{
        type: Number,
         
    },
    name:{
        type: String,
         
    },
    mobile_number:{
        type:String,
         
    }
})

const retailer = mongoose.model("retailer", RetialerSchema)
module.exports = retailer