var express = require("express")
var app = express();
var fs = require("fs");
var cors = require('cors')
app.use(cors())
app.get('/products',(req,res)=>{
    var product = JSON.parse(fs.readFileSync("Products.txt").toString());
    res.json(product)
    console.log(product)
})
app.get('/products/:id',(req,res)=>{
    var pid = JSON.parse(fs.readFileSync("Products.txt").toString());
    pid.map((p,i)=>{
        if(req.params.id==p.id){
            console.log(p)
            res.json(p)
        }
    })
})
app.listen(8500,()=>{
    console.log("server is running on port 8500")
})