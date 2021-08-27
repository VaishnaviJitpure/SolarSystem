const mongoos = require('mongoose');
mongoos.connect("mongodb://localhost:27017/CurdOp",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
   }).then(() =>{
    console.log(" Connecting Successful");
}).catch((e)=>{
    console.log("Sorry Connection is Not Establish");

})
