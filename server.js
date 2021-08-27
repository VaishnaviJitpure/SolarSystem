const express=require('express');
const app= express();
const path= require('path');
const port=process.env.PORT || 3000;
app.use(express.static('views'))
require('./connect');
app.use(express.json());
app.use(express.urlencoded({extended:false})) 
app.set('view engine', 'hbs')

app.get('/',(req,res) => {
    res.render(__dirname + '/views/self_assessment.hbs')
    //req.render('index');
})

const self=require('./models/self_assessment');
app.post('/self_assessment',async(req,res) =>{
    try {
        const Self_assesment_data= new self({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email:req.body.email,
        phonNumber:req.body.phonNumber,
        location:req.body.location
        
        })
        
        const calculation= await Self_assesment_data.save();
        res.status(201).json({"msg":"data created","response":calculation});
       
       
  }
  catch (error) {
    res.status(400).send(error); 
  }
});

app.listen(3000,() =>{
    console.log(" Server Listen Port");

});