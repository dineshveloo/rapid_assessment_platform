const mongoose = require("mongoose");
var diagramSchema = new mongoose.Schema({
    Proc_Id: {
        type: String,
        unique: true,
       
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
mongoose.model("processFlow",diagramSchema);