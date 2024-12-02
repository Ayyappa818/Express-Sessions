var express = require("express");
var app = express();
var fs = require("fs");
var cors = require('cors')
app.use(cors())
const mongoose =require("mongoose");
var Employee=require('./models/Employee.model')
mongoose.connect('mongodb://localhost:27017/Employee') 



app.get("/employees",function(req,res){
    Employee.find({}).then(data=>{
        res.json(data)
        console.log(data)
    }).catch((err)=>{console.log(err)})
})
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('Connection error:', err));
  
 
    // var newemployee = new Employee({
    //     name:"Ayyappa",
    //     age:'23',
    //     position:"Software developer",
    //     department:"IT",
    //     email:"ayyappa666@gmail.com",
    //     salary:'10000'
    // })
    // newemployee.save()
    // .then((res)=>{console.log(res)})
    // .catch((err)=>{console.log(err)})

    //  Employee.findOneAndDelete({name:"Ayyappa"})
    //  .then((res)=>{console.log(res)})
    // .catch((err)=>{console.log(err)})
    // Employee.findByIdAndUpdate("6749bf97496317450d3ed117",{firstname:"Bruce"})
    // .then((res)=>{console.log(res)})
    // .catch((err)=>{console.log(err)})





app.listen(4500,()=>{
    console.log("server is running on port 4500")
})