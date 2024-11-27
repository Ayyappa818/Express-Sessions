var express = require("express")
var app = express();
var fs = require("fs");
var cors = require('cors')
app.use(cors())

var bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

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

app.post('/addproduct',(req,res)=>{
    var product = JSON.parse(fs.readFileSync("Products.txt").toString());
    product.push(req.body)
    res.json(product)
    fs.writeFileSync('Products.txt',JSON.stringify(product))
    res.send("data was added")
})

app.delete('/deleteproduct/:id',(req,res)=>{
    var del = JSON.parse(fs.readFileSync("Products.txt").toString());
    del.splice(req.params.id,1)
    res.json(del)
    fs.writeFileSync('Products.txt',JSON.stringify(del))
    res.send("product deleted")
})

app.listen(8500,()=>{
    console.log("server is running on port 8500")
})