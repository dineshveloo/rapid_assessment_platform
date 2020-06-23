const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Mydb", { useNewUrlParser: true}, { useUnifiedTopology: true }, (error)=>{
 
   if(!error)
   {
       console.log("Database connected successfully.");
   }
   else
   {
       console.log("Error connecting to database.");
   }
});

const User = require("./user.model")
const Process = require("./process.Model")
const Business = require("./business.model")
const effortestimation = require("./effortEstimation.model")
const Classification=require("./configurationDetails.model")
const Classification2=require("./configurationDetails2.model")
const Classification3=require("./configurationDetails3.model")
const Classification4=require("./configurationDetails4.model")
const ProcessFlow = require("./processFlow.model")
const ExcelData = require("./exceldata.model")