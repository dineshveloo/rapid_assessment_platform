const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
     
    userName: {
        type : String,
        required :"Required"
    },
    email:{
      type:String,
      required:"Required"
    },
    employeeId: {
        type : String,
        required :"Required"
    },
    password: {
       type : String
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

mongoose.model('User', UserSchema);
