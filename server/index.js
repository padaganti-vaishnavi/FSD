const express = require('express')
const mongoose = require ('mongoose')
const url = 'mongodb://localhost/example'
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection
const app = express();

con.on('open',function(){
    console.log("welcome")
})
app.use(express.json())
const r=require('./route/route')
app.use('/demo',r)
app.listen(9000,()=>{
    console.log("Server connected")
})
