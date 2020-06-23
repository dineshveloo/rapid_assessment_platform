const mongoose = require("mongoose");

var ConfigurationDetailsSchema2 = new mongoose.Schema({
     
    Simple_Dev1: {
        type:Number,
        required:"Required"
    },
    Simple_Srdev1: {
        type:Number,
        required:"Required"
    },
    Simple_BA1: {
        type:Number,
        required:"Required"
    },
    Simple_Arch1: {
        type:Number,
        required:"Required"
    },
    Simple_PM1: {
        type:Number,
        required:"Required"
    },
    Simple_DM1: {
        type:Number,
        required:"Required"
    },
         
    Medium_Dev1: {
        type:Number,
        required:"Required"
    },
    Medium_Srdev1: {
        type:Number,
        required:"Required"
    },
    Medium_BA1: {
        type:Number,
        required:"Required"
    },
    Medium_Arch1: {
        type:Number,
        required:"Required"
    },
    Medium_PM1: {
        type:Number,
        required:"Required"
    },
    Medium_DM1: {
        type:Number,
        required:"Required"
    },
         
    Complex_Dev1: {
        type:Number,
        required:"Required"
    },
    Complex_Srdev1: {
        type:Number,
        required:"Required"
    },
    Complex_BA1: {
        type:Number,
        required:"Required"
    },
    Complex_Arch1: {
        type:Number,
        required:"Required"
    },
    Complex_PM1: {
        type:Number,
        required:"Required"
    },
    Complex_DM1: {
        type:Number,
        required:"Required"
    },
    Dev_Cost1:{
        type:Number,
        required:"Required"
    },
    Srdev_Cost1:{
        type:Number,
        require:"Required"
    },
    BA_Cost1:{
        type:Number,
        required:"Required"
    },
    Arch_Cost1:{
        type:Number,
        required:"Required"
    },
    PM_Cost1:{
        type:Number,
        required:"Required"
    },
    DUlead_Cost1:{
        type:Number,
        required:"Required"
    },
    Bot_Creator_Cost1:{
        type:Number,
        required:"Required"
    },
    Bot_Run_Unatt_Cost1:{
        type:Number,
        required:"Required"
    },
    Bot_Run_Att_Cost1:{
        type:Number,
        required:"Required"
    },
    Cont_Room_Cost1:{
        type:Number,
        required:"Required"
    },
    VM_Cost1:{
        type:Number,
        required:"Required"
    },
    Server_Cost1:{
        type:Number,
        required:"Required"
    },
    FTE_Cost1:{
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

mongoose.model('ConfigurationDetails2', ConfigurationDetailsSchema2);
