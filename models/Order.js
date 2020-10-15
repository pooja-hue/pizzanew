const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    kind:{
        type:String,
        required:true
    },
    pizzaName:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    topping:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    orderId:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("pizza",OrderSchema);