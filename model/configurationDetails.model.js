const mongoose = require("mongoose");

var ConfigurationDetailsSchema = new mongoose.Schema({
     
    Simple_Dev: {
        type:Number,
        required:"Required"
    },
    Simple_Srdev: {
        type:Number,
        required:"Required"
    },
    Simple_BA: {
        type:Number,
        required:"Required"
    },
    Simple_Arch: {
        type:Number,
        required:"Required"
    },
    Simple_PM: {
        type:Number,
        required:"Required"
    },
    Simple_DM: {
        type:Number,
        required:"Required"
    },
         
    Medium_Dev: {
        type:Number,
        required:"Required"
    },
    Medium_Srdev: {
        type:Number,
        required:"Required"
    },
    Medium_BA: {
        type:Number,
        required:"Required"
    },
    Medium_Arch: {
        type:Number,
        required:"Required"
    },
    Medium_PM: {
        type:Number,
        required:"Required"
    },
    Medium_DM: {
        type:Number,
        required:"Required"
    },
         
    Complex_Dev: {
        type:Number,
        required:"Required"
    },
    Complex_Srdev: {
        type:Number,
        required:"Required"
    },
    Complex_BA: {
        type:Number,
        required:"Required"
    },
    Complex_Arch: {
        type:Number,
        required:"Required"
    },
    Complex_PM: {
        type:Number,
        required:"Required"
    },
    Complex_DM: {
        type:Number,
        required:"Required"
    },
    Dev_Cost:{
        type:Number,
        required:"Required"
    },
    Srdev_Cost:{
        type:Number,
        require:"Required"
    },
    BA_Cost:{
        type:Number,
        required:"Required"
    },
    Arch_Cost:{
        type:Number,
        required:"Required"
    },
    PM_Cost:{
        type:Number,
        required:"Required"
    },
    DUlead_Cost:{
        type:Number,
        required:"Required"
    },
    Bot_Creator_Cost:{
        type:Number,
        required:"Required"
    },
    Bot_Run_Unatt_Cost:{
        type:Number,
        required:"Required"
    },
    Bot_Run_Att_Cost:{
        type:Number,
        required:"Required"
    },
    Cont_Room_Cost:{
        type:Number,
        required:"Required"
    },
    VM_Cost:{
        type:Number,
        required:"Required"
    },
    Server_Cost:{
        type:Number,
        required:"Required"
    },
    FTE_Cost:{
        type:Number,
        required:"Required"
    }

},
    {
        toObject: {
          virtuals: true,
        },
        toJSON: {
          virtuals: true,
        },
});

mongoose.model('ConfigurationDetails', ConfigurationDetailsSchema);
