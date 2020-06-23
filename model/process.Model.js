const mongoose = require("mongoose");

var ProcessSchema = new mongoose.Schema({
     
    clientName: {
        type : String,
        
    },
    Buss_Unit: {
        type : String,
       
    },
    Sub_Buss_Unit: {
       type : String,
       
    },
    Proc_Name: {
        type: String,
        
    },
    Proc_Id: {
        type: String,
        unique: true,
       
    },
    Proc_Desc: {
        type: String,
       
    },
    Mon_Vol: {
        type: Number,
       
    },
    AHT: {
        type: Number,
        
    },
    FTE: {
        type: Number,
       
    },
    SLA: {
        type: String,
       
    },
    TAT: {
        type: String,
        
    },
    App_Used: {
        type: String,
       
    },
    Doc_Present: {
        type:String,
       
    },
    Rule_Based: {
        type:String,
       
    },
    Stuc_Data: {
        type: String,
       
    },
    Inp_Data_Type: {
        type: String,
        
    },
    Amenable_RPA: {
        type: String,
       
    },
    Amenable_Cognitive: {
        type: Number,
      
    },
    Automation_Ready: {
        type: String,
       
    },
    AP_Perc: {
        type: Number,
    },
    FTE_Benefit: {
        type: Number,
    },
    Status: {
        type: String,
    },
    Num_of_apps: {
        type : Number,
        
    },
    Num_of_mainframe: {
        type : Number,
       
    },
    Num_of_Citrix: {
       type : Number,
       
    },
    Third_party_sites: {
        type: String,
        
    },
    Num_of_scrs: {
        type: Number,
        
       
    },
    Num_of_proccessteps: {
        type: Number,
       
    },
    Num_of_Scenarios: {
        type: Number,
       
    },
    Num_of_Decpoints: {
        type: Number,
        
    },
    Num_of_standardinput: {
        type: Number,
       
    },
    Intr_dynamic_table: {
        type: String,
       
    },
    Num_of_basedcontrols: {
        type: Number,
        
    },
    Num_of_accessprofile: {
        type: Number,
       
    },
    Num_of_browsersupp: {
        type: Number,
       
    },
    Operation_stability: {
        type:String,
       
    },
    Freq_change: {
        type: String,
       
    },
    Svc_lvl_agr: {
        type: String,
        
    },
    Num_of_getsignoff: {
        type: Number,
       
    },
    Num_of_Envsetup: {
        type: Number,
      
    },
    Func_point: {
        type: Number,
       
    },
    Monthly_effsaving: {
        type: Number,
    },
    Effort: {
        type: Number,
    },
    Quadrant: {
        type: String,
    },
    Classification: {
        type: String,
    }
} ,
     {
        toObject: {
          virtuals: true,
        },
        toJSON: {
          virtuals: true,
        },
});

mongoose.model("Process", ProcessSchema);