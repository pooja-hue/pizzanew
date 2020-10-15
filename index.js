const express = require('express');
const mongoose = require('mongoose');
const url='mongodb://localhost/Pizzachat'
const app=express();
mongoose.connect(url,{useNewUrlParser:true})
const con= mongoose.connection
con.on('open',()=>{
    console.log('connected...')
})
app.use(express.json())
const savedata = require('./routes/saveData')
app.use('/saveData',savedata)
app.listen(9061,()=>{
    console.log('server is started');
});