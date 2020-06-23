const mongoose = require("mongoose");

var BusinessSchema = new mongoose.Schema({
     
    Selected_Process: {
        type : Array,
        required :"Required"
    },
    Total_Count:{
      type : Number,
      required : "Required"
    },
    Simple_Count: {
      type : Number,
      required : "Required"
    },
    Medium_Count: {
      type : Number,
      required : "Required"
    },
    Complex_Count: {
      type : Number,
      required : "Required"
    },
   
},
    {
        toObject: {
          virtuals: true,
        },
        toJSON: {
          virtuals: true,
        },
});

mongoose.model('Business', BusinessSchema);
