const mongoose = require("mongoose");

var ConfigurationDetailsSchema4 = new mongoose.Schema({
     
    Simple_Dev3: {
        type:Number,
        required:"Required"
    },
    Simple_Srdev3: {
        type:Number,
        required:"Required"
    },
    Simple_BA3: {
        type:Number,
        required:"Required"
    },
    Simple_Arch3: {
        type:Number,
        required:"Required"
    },
    Simple_PM3: {
        type:Number,
        required:"Required"
    },
    Simple_DM3: {
        type:Number,
        required:"Required"
    },
         
    Medium_Dev3: {
        type:Number,
        required:"Required"
    },
    Medium_Srdev3: {
        type:Number,
        required:"Required"
    },
    Medium_BA3: {
        type:Number,
        required:"Required"
    },
    Medium_Arch3: {
        type:Number,
        required:"Required"
    },
    Medium_PM3: {
        type:Number,
        required:"Required"
    },
    Medium_DM3: {
        type:Number,
        required:"Required"
    },
         
    Complex_Dev3: {
        type:Number,
        required:"Required"
    },
    Complex_Srdev3: {
        type:Number,
        required:"Required"
    },
    Complex_BA3: {
        type:Number,
        required:"Required"
    },
    Complex_Arch3: {
        type:Number,
        required:"Required"
    },
    Complex_PM3: {
        type:Number,
        required:"Required"
    },
    Complex_DM3: {
        type:Number,
        required:"Required"
    },
    Dev_Cost3:{
        type:Number,
        required:"Required"
    },
    Srdev_Cost3:{
        type:Number,
        require:"Required"
    },
    BA_Cost3:{
        type:Number,
        required:"Required"
    },
    Arch_Cost3:{
        type:Number,
        required:"Required"
    },
    PM_Cost3:{
        type:Number,
        required:"Required"
    },
    DUlead_Cost3:{
        type:Number,
        required:"Required"
    },
    Bot_Creator_Cost3:{
        type:Number,
        required:"Required"
    },
    Bot_Run_Unatt_Cost3:{
        type:Number,
        required:"Required"
    },
    Bot_Run_Att_Cost3:{
        type:Number,
        required:"Required"
    },
    Cont_Room_Cost3:{
        type:Number,
        required:"Required"
    },
    VM_Cost3:{
        type:Number,
        required:"Required"
    },
    Server_Cost3:{
        type:Number,
        required:"Required"
    },
    FTE_Cost3:{
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

mongoose.model('ConfigurationDetails4', ConfigurationDetailsSchema4);
