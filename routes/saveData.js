const express = require('express');
const router = express.Router();

const Order = require('../models/Order');

function orderNumber() {
    let now = Date.now().toString()
    now += now + Math.floor(Math.random() * 10)
    return  [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-')
  }


router.post('/api/orderpizza',async(req,res) => {
    const newOrder = new Order({
        kind:req.body.kind,
        pizzaName:req.body.pizzaName,
        size:req.body.size,
        topping:req.body.topping,
        phoneNumber:req.body.phoneNumber,
        name:req.body.name,
        address:req.body.address,
        orderId:orderNumber()
    });
    try{
        const a1=await newOrder.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
});

module.exports = router;