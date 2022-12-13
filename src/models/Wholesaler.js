const mongoose = require("mongoose")

const wholesalerSchema = new mongoose.Schema({
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
const wholesaler = mongoose.model("wholesaler", wholesalerSchema)
module.exports = wholesaler