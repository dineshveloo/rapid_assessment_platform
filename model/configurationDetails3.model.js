const mongoose = require("mongoose");

var ConfigurationDetailsSchema3 = new mongoose.Schema({
     
    Simple_Dev2: {
        type:Number,
        required:"Required"
    },
    Simple_Srdev2: {
        type:Number,
        required:"Required"
    },
    Simple_BA2: {
        type:Number,
        required:"Required"
    },
    Simple_Arch2: {
        type:Number,
        required:"Required"
    },
    Simple_PM2: {
        type:Number,
        required:"Required"
    },
    Simple_DM2: {
        type:Number,
        required:"Required"
    },
         
    Medium_Dev2: {
        type:Number,
        required:"Required"
    },
    Medium_Srdev2: {
        type:Number,
        required:"Required"
    },
    Medium_BA2: {
        type:Number,
        required:"Required"
    },
    Medium_Arch2: {
        type:Number,
        required:"Required"
    },
    Medium_PM2: {
        type:Number,
        required:"Required"
    },
    Medium_DM2: {
        type:Number,
        required:"Required"
    },
         
    Complex_Dev2: {
        type:Number,
        required:"Required"
    },
    Complex_Srdev2: {
        type:Number,
        required:"Required"
    },
    Complex_BA2: {
        type:Number,
        required:"Required"
    },
    Complex_Arch2: {
        type:Number,
        required:"Required"
    },
    Complex_PM2: {
        type:Number,
        required:"Required"
    },
    Complex_DM2: {
        type:Number,
        required:"Required"
    },
    Dev_Cost2:{
        type:Number,
        required:"Required"
    },
    Srdev_Cost2:{
        type:Number,
        require:"Required"
    },
    BA_Cost2:{
        type:Number,
        required:"Required"
    },
    Arch_Cost2:{
        type:Number,
        required:"Required"
    },
    PM_Cost2:{
        type:Number,
        required:"Required"
    },
    DUlead_Cost2:{
        type:Number,
        required:"Required"
    },
    Bot_Creator_Cost2:{
        type:Number,
        required:"Required"
    },
    Bot_Run_Unatt_Cost2:{
        type:Number,
        required:"Required"
    },
    Bot_Run_Att_Cost2:{
        type:Number,
        required:"Required"
    },
    Cont_Room_Cost2:{
        type:Number,
        required:"Required"
    },
    VM_Cost2:{
        type:Number,
        required:"Required"
    },
    Server_Cost2:{
        type:Number,
        required:"Required"
    },
    FTE_Cost2:{
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

mongoose.model('ConfigurationDetails3', ConfigurationDetailsSchema3);
