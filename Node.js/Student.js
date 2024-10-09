const mongoose=require('mongoose')
const schema=mongoose.Schema({
     id:String,
     name:String,
     address:String,
     email:String,
     mobile:Number,
     roll:Number
});
module.exports=mongoose.model("student",schema);