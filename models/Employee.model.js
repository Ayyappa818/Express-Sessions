var mongoose = require("mongoose");
var employeeSchema=mongoose.Schema({
    name:"string",
    age:"string",
    position:"string",
    department:"string",
    email:"string",
    salary:"string"
})
var Employee=mongoose.model("Employee",employeeSchema);
module.exports=Employee;