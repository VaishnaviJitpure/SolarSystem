const mongoose=require('mongoose');
const registeruser=new mongoose.Schema({
    firstname : {
        type:String
    } ,
    lastname : {
        type:String
    },
    email:{
        type:String
    },
    phonNumber:{
        type:Number
    },
    location:{
        type:String
    }
})
//here we create  collection
//const Register =new mongoose.model("collection name",schema)
const Self_assesment =new mongoose.model("Self_assesment",registeruser)

//now we have to export it
module.exports=Self_assesment;