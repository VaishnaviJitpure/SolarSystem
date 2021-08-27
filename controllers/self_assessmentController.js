
const express=require('express');
const app= express();
const nodemailer = require('nodemailer');
const Self_assesment = require("../models/self_assessment");
//use to create-Post

exports.create = async(req, res) => {
  try {
      const Self_assesment_data= new Self_assesment({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email:req.body.email,
      phonNumber:req.body.phonNumber,
      location:req.body.location,
      })
      // email send..........
      function email(Self_assesment_data) {
      const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'vaishnavi.brilliance@gmail.com',
              pass: 'Qwertyuiop@123'
          }
      });
      const mailOptions = {
          from: `${Self_assesment_data.email}`,
          to: 'vaishnavi.brilliance@gmail.com',
          subject: 'This is Enquiry Mail From  Self Assessment ',
          html:'<p> Name - '+`${Self_assesment_data.firstname}`+' '+`${Self_assesment_data.lastname} `+'</p><p> Email - '+`${Self_assesment_data.email}`+'</p><p>Contact - '+`${Self_assesment_data.phonNumber}`+'</p><p>Location- '+`${Self_assesment_data.location}`+'</p><p>Purpose - '+`${Self_assesment_data.purpose}`+'</p><p>Power Requirment  - '+`${Self_assesment_data.power_requirement}`+'</p><p>Number Of Pannel  - '+`${Self_assesment_data.number_of_pannel}`+'</p><p>Area Available  - '+`${Self_assesment_data.area_available}`+'</p><p>Bill Img- '+`${Self_assesment_data.bill_img}`+'</p>'
      }
      transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
              console.log(error);
          } else {
              console.log("mail has been done", info.response);
          }
      });
  
  
      }

      email(Self_assesment_data);
      const calculation= await Self_assesment_data.save();
      res.send(req.body);
      res.status(201);
     
}
catch (error) {
  res.status(400).send(error); 
}
  
}

