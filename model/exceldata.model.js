const mongoose = require("mongoose");
var excelSchema = new mongoose.Schema({

    firstname: {
        type: String,
        } ,
    lastname: {
       type: String,
    } ,
    country: {
      type: String,
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
mongoose.model('excelData',excelSchema);