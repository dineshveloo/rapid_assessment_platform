const express = require("express");
const application = express();
 const path = require("path");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const XLSX       = require('xlsx');
const multer     = require('multer');
const UserModel = mongoose.model('User');
const ProcessModel = mongoose.model('Process');
const ProcessFlowModel = mongoose.model('processFlow');
const excelModel = mongoose.model('excelData');
const effortEstimationModel = mongoose.model('EffortEstimation');
const ConfigurationDetailsModel = mongoose.model('ConfigurationDetails');
//...............bp............................//
const ConfigurationDetailsModel2 = mongoose.model('ConfigurationDetails2');
//.............bp...............................//
const ConfigurationDetailsModel3 = mongoose.model('ConfigurationDetails3');
const ConfigurationDetailsModel4 = mongoose.model('ConfigurationDetails4');
const GoogleCharts= require("google-charts");
const session = require('express-session');
var uniqBy = require('lodash.uniqby');
var BusinessModel = mongoose.model('Business');
application.use(bodyparser.json());
application.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
mongoose.set('useFindAndModify', false);
application.use('/user', express.static('views/images'));
application.use(express.static(__dirname + '/public'));
const router=express.Router();
//........dropdown....................//
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";
//.......................................//

//multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });
  var upload = multer({ storage: storage });
  

router.get("/", (req, res)=>{
    
});
router.get("/Home", (req, res)=>{
res.render("Home")
});
router.get("/indexexample", (req, res)=>{
    res.render("indexexample")
    });

router.get("/uploadDownload", (req, res)=>{
    res.render("uploadDownload")
    });

router.get("/captureProcessFlow", (req, res)=>{
    res.render("captureProcessFlow")
    });
router.get("/processFlowDocumentation", (req, res)=>{
        res.render("processFlowDocumentation")
        });
router.get("/processFlowDocumentation2", (req, res)=>{
            res.render("processFlowDocumentation2")
            });
router.get("/effortEstimation AA", (req, res)=>{
    res.render("effortEstimation AA")
    });
router.get("/CaptureProcess", (req, res)=>{
    res.render("CaptureProcess")
});
router.get("/CaptureProcess2", (req, res)=>{
    res.render("CaptureProcess2")
});



router.get("/processDiscovery", (req, res)=>{
    res.render("processDiscovery")
});
router.get("/processDiscovery2", (req, res)=>{
    res.render("processDiscovery2")
});
router.get("/businessCaseList", (req, res)=>{
    res.render("businessCaseList")
});
router.get("/selectedProcess", (req, res)=>{
    res.render("selectedProcess")
});




router.get("/viewProcessList", (req, res)=>{
   
    ProcessModel.find((err, docs) => {
        if(!err){
        res.render("viewProcessList", {list: docs});
      
        console.log(docs);
        }
        else {
        console.log('Failed to retrieve the Course List: '+ err);
        }
        });
});

//.................................effortview....................//
router.get("/viewEffortList", (req, res)=>{
   
    effortEstimationModel.find((err, docs) => {
        if(!err){
        res.render("viewEffortList", {list: docs});
      
        console.log(docs);
        }
        else {
        console.log('Failed to retrieve the Course List: '+ err);
        }
        });
});
//.............................................................//


router.get("/businessCaseDetails", (req, res)=>{
    
    ProcessModel.find((err, docs) => {
        if(!err){
            res.render("businessCaseList", {list: docs});
       
        
        
        console.log(docs);
        }
        else {
        console.log('Failed to retrieve the Course List: '+ err);
        }
        });
});
router.get("/configurationDetailsInputAA",(req,res)=>{
    res.render("configurationDetailsInputAA")
});
router.get("/configurationDetailsInputAA2",(req,res)=>{
    res.render("configurationDetailsInputAA2")
});
router.get("/configurationDetailsInputUI",(req,res)=>{
    res.render("configurationDetailsInputUI")
});

router.get("/configurationDetailsInputPR",(req,res)=>{
    res.render("configurationDetailsInputPR")
});
router.get("/configurationDetailsInputBP",(req,res)=>{
    res.render("configurationDetailsInputBP")
});
router.get("/defaultConfigurationDetails",(res,req)=>{
    res.render("defaultConfigurationDetails")
});
router.get("/defaultConfigurationDetails2",(res,req)=>{
    res.render("defaultConfigurationDetails2")
});
router.get("/defaultConfigurationDetails3",(res,req)=>{
    res.render("defaultConfigurationDetails3")
});
router.get("/defaultConfigurationDetails4",(res,req)=>{
    res.render("defaultConfigurationDetails4")
});
router.get("/fetchConfigurationDetails",(req,res)=>{
    ConfigurationDetailsModel.find((err,doc)=>{
        if(!err)
        {
            res.render("defaultConfigurationDetails AA",{list:doc[0]})
        }
        else{
            res.send(err)
            console.log(err)
        }
    });

});

//...............blueprism.........................//
router.get("/fetchConfigurationDetails2",(req,res)=>{
    ConfigurationDetailsModel2.find((err,doc)=>{
        if(!err)
        {
            res.render("defaultConfigurationDetails UI",{list:doc[0]})
        }
        else{
            res.send(err)
            console.log(err)
        }
    });

});

//.................................................//
//....................pega............................//
router.get("/fetchConfigurationDetails3",(req,res)=>{
    ConfigurationDetailsModel3.find((err,doc)=>{
        if(!err)
        {
            res.render("defaultConfigurationDetails PR",{list:doc[0]})
        }
        else{
            res.send(err)
            console.log(err)
        }
    });

});
//........................................................//
//......................ui..................................//
router.get("/fetchConfigurationDetails4",(req,res)=>{
    ConfigurationDetailsModel4.find((err,doc)=>{
        if(!err)
        {
            res.render("defaultConfigurationDetails BP",{list:doc[0]})
        }
        else{
            res.send(err)
            console.log(err)
        }
    });

});
//.........................................................//
router.post("/addConfigurationDetails",(req,res)=>{

    var configurationdetailsmodel = new ConfigurationDetailsModel();
    configurationdetailsmodel.Simple_Dev=req.body.Simple_Dev;
    configurationdetailsmodel.Simple_Srdev=req.body.Simple_Srdev;
    configurationdetailsmodel.Simple_BA=req.body.Simple_BA;
    configurationdetailsmodel.Simple_Arch=req.body.Simple_Arch;
    configurationdetailsmodel.Simple_PM=req.body.Simple_PM;
    configurationdetailsmodel.Simple_DM=req.body.Simple_DM;
    configurationdetailsmodel.Medium_Dev=req.body.Medium_Dev;
    configurationdetailsmodel.Medium_Srdev=req.body.Medium_Srdev;
    configurationdetailsmodel.Medium_BA=req.body.Medium_BA;
    configurationdetailsmodel.Medium_Arch=req.body.Medium_Arch;
    configurationdetailsmodel.Medium_PM=req.body.Medium_PM;
    configurationdetailsmodel.Medium_DM=req.body.Medium_DM;
    configurationdetailsmodel.Complex_Dev=req.body.Complex_Dev;
    configurationdetailsmodel.Complex_Srdev=req.body.Complex_Srdev;
    configurationdetailsmodel.Complex_BA=req.body.Complex_BA;
    configurationdetailsmodel.Complex_Arch=req.body.Complex_Arch;
    configurationdetailsmodel.Complex_PM=req.body.Complex_PM;
    configurationdetailsmodel.Complex_DM=req.body.Complex_DM;
    configurationdetailsmodel.Dev_Cost=req.body.Dev_Cost;
    configurationdetailsmodel.Srdev_Cost=req.body.Srdev_Cost;
    configurationdetailsmodel.BA_Cost=req.body.BA_Cost;
    configurationdetailsmodel.Arch_Cost=req.body.Arch_Cost;
    configurationdetailsmodel.PM_Cost=req.body.PM_Cost;
    configurationdetailsmodel.DUlead_Cost=req.body.DUlead_Cost;
    configurationdetailsmodel.Bot_Creator_Cost=req.body.Bot_Creator_Cost;
    configurationdetailsmodel.Bot_Run_Unatt_Cost=req.body.Bot_Run_Unatt_Cost;
    configurationdetailsmodel.Bot_Run_Att_Cost=req.body.Bot_Run_Att_Cost;
    configurationdetailsmodel.Cont_Room_Cost=req.body.Cont_Room_Cost;
    configurationdetailsmodel.VM_Cost=req.body.VM_Cost;
    configurationdetailsmodel.Server_Cost=req.body.Server_Cost;
    configurationdetailsmodel.FTE_Cost=req.body.FTE_Cost;
    ConfigurationDetailsModel.find((err,doc)=>{
        if(!err)
        {
        if(doc.length)
        {
            var updated_doc={$set: {Simple_Dev:req.body.Simple_Dev, 
                Simple_Srdev:req.body.Simple_Srdev,
                Simple_BA:req.body.Simple_BA,
                Simple_Arch:req.body.Simple_Arch,
                Simple_PM:req.body.Simple_PM,
                Simple_DM:req.body.Simple_DM,
                Medium_Dev:req.body.Medium_Dev,
                Medium_Srdev:req.body.Medium_Srdev,
                Medium_BA:req.body.Medium_BA,
                Medium_Arch:req.body.Medium_Arch,
                Medium_PM:req.body.Medium_PM,
                Medium_DM:req.body.Medium_DM,
                Complex_Dev:req.body.Complex_Dev,
                Complex_Srdev:req.body.Complex_Srdev,
                Complex_BA:req.body.Complex_BA,
                Complex_Arch:req.body.Complex_Arch,
                Complex_PM:req.body.Complex_PM,
                Complex_DM:req.body.Complex_DM,
                Dev_Cost:req.body.Dev_Cost,
                Srdev_Cost:req.body.Srdev_Cost,
                BA_Cost:req.body.BA_Cost,
                Arch_Cost:req.body.Arch_Cost,
                PM_Cost:req.body.PM_Cost,
                DUlead_Cost:req.body.DUlead_Cost,
                Bot_Creator_Cost:req.body.Bot_Creator_Cost,
                Bot_Run_Unatt_Cost:req.body.Bot_Run_Unatt_Cost,
                Bot_Run_Att_Cost:req.body.Bot_Run_Att_Cost,
                Cont_Room_Cost:req.body.Cont_Room_Cost,
                VM_Cost:req.body.VM_Cost,
                Server_Cost:req.body.Server_Cost,
                FTE_Cost:req.body.FTE_Cost,
                }}
            ConfigurationDetailsModel.updateOne({Simple_Dev:doc[0].Simple_Dev},updated_doc,(err,doc)=>{
                if(!err)
                {
                   res.render("configurationDetailsInputAA",{viewtitle:"Updated Successfully"})
                }
                else{
                    console.log(err);
                    res.render("configurationDetailsInputAA",{viewerror:"error Occured in proceeding"})
                }
            });
        }
       
        else
        {
            configurationdetailsmodel.save((err,doc)=>{
                if(!err)
                {
                    
                    res.render("defaultConfigurationDetails",{viewtitle:"Details Saved Successfully"})
                }
                else
                {
                    console.log(err)
                    res.render("defaultConfigurationDetails",{viewerror:"error Occured while Saving the details"});
                }
            });
        
        }
    }
    else{
        console.log(err)
        res.send("error")
    }
    });
});
//..............................BP.........................................//

router.post("/addConfigurationDetails2",(req,res)=>{

    var configurationdetailsmodel2 = new ConfigurationDetailsModel2();
    configurationdetailsmodel2.Simple_Dev1=req.body.Simple_Dev1;
    configurationdetailsmodel2.Simple_Srdev1=req.body.Simple_Srdev1;
    configurationdetailsmodel2.Simple_BA1=req.body.Simple_BA1;
    configurationdetailsmodel2.Simple_Arch1=req.body.Simple_Arch1;
    configurationdetailsmodel2.Simple_PM1=req.body.Simple_PM1;
    configurationdetailsmodel2.Simple_DM1=req.body.Simple_DM1;
    configurationdetailsmodel2.Medium_Dev1=req.body.Medium_Dev1;
    configurationdetailsmodel2.Medium_Srdev1=req.body.Medium_Srdev1;
    configurationdetailsmodel2.Medium_BA1=req.body.Medium_BA1;
    configurationdetailsmodel2.Medium_Arch1=req.body.Medium_Arch1;
    configurationdetailsmodel2.Medium_PM1=req.body.Medium_PM1;
    configurationdetailsmodel2.Medium_DM1=req.body.Medium_DM1;
    configurationdetailsmodel2.Complex_Dev1=req.body.Complex_Dev1;
    configurationdetailsmodel2.Complex_Srdev1=req.body.Complex_Srdev1;
    configurationdetailsmodel2.Complex_BA1=req.body.Complex_BA1;
    configurationdetailsmodel2.Complex_Arch1=req.body.Complex_Arch1;
    configurationdetailsmodel2.Complex_PM1=req.body.Complex_PM1;
    configurationdetailsmodel2.Complex_DM1=req.body.Complex_DM1;
    configurationdetailsmodel2.Dev_Cost1=req.body.Dev_Cost1;
    configurationdetailsmodel2.Srdev_Cost1=req.body.Srdev_Cost1;
    configurationdetailsmodel2.BA_Cost1=req.body.BA_Cost1;
    configurationdetailsmodel2.Arch_Cost1=req.body.Arch_Cost1;
    configurationdetailsmodel2.PM_Cost1=req.body.PM_Cost1;
    configurationdetailsmodel2.DUlead_Cost1=req.body.DUlead_Cost1;
    configurationdetailsmodel2.Bot_Creator_Cost1=req.body.Bot_Creator_Cost1;
    configurationdetailsmodel2.Bot_Run_Unatt_Cost1=req.body.Bot_Run_Unatt_Cost1;
    configurationdetailsmodel2.Bot_Run_Att_Cost1=req.body.Bot_Run_Att_Cost1;
    configurationdetailsmodel2.Cont_Room_Cost1=req.body.Cont_Room_Cost1;
    configurationdetailsmodel2.VM_Cost1=req.body.VM_Cost1;
    configurationdetailsmodel2.Server_Cost1=req.body.Server_Cost1;
    configurationdetailsmodel2.FTE_Cost1=req.body.FTE_Cost1;
    ConfigurationDetailsModel2.find((err,doc)=>{
        if(!err)
        {
        if(doc.length)
        {
            var updated_doc={$set: {Simple_Dev1:req.body.Simple_Dev1, 
                Simple_Srdev1:req.body.Simple_Srdev1,
                Simple_BA1:req.body.Simple_BA1,
                Simple_Arch1:req.body.Simple_Arch1,
                Simple_PM1:req.body.Simple_PM1,
                Simple_DM1:req.body.Simple_DM1,
                Medium_Dev1:req.body.Medium_Dev1,
                Medium_Srdev1:req.body.Medium_Srdev1,
                Medium_BA1:req.body.Medium_BA1,
                Medium_Arch1:req.body.Medium_Arch1,
                Medium_PM1:req.body.Medium_PM1,
                Medium_DM1:req.body.Medium_DM1,
                Complex_Dev1:req.body.Complex_Dev1,
                Complex_Srdev1:req.body.Complex_Srdev1,
                Complex_BA1:req.body.Complex_BA1,
                Complex_Arch1:req.body.Complex_Arch1,
                Complex_PM1:req.body.Complex_PM1,
                Complex_DM1:req.body.Complex_DM1,
                Dev_Cost1:req.body.Dev_Cost1,
                Srdev_Cost1:req.body.Srdev_Cost1,
                BA_Cost1:req.body.BA_Cost1,
                Arch_Cost1:req.body.Arch_Cost1,
                PM_Cost1:req.body.PM_Cost1,
                DUlead_Cost1:req.body.DUlead_Cost1,
                Bot_Creator_Cost1:req.body.Bot_Creator_Cost1,
                Bot_Run_Unatt_Cost1:req.body.Bot_Run_Unatt_Cost1,
                Bot_Run_Att_Cost1:req.body.Bot_Run_Att_Cost1,
                Cont_Room_Cost1:req.body.Cont_Room_Cost1,
                VM_Cost1:req.body.VM_Cost1,
                Server_Cost1:req.body.Server_Cost1,
                FTE_Cost1:req.body.FTE_Cost1,
                }}
            ConfigurationDetailsModel2.updateOne({Simple_Dev1:doc[0].Simple_Dev1},updated_doc,(err,doc)=>{
                if(!err)
                {
                   res.render("configurationDetailsInputUI",{viewtitle:"Updated Successfully"})
                }
                else{
                    console.log(err);
                    res.render("configurationDetailsInputUI",{viewerror:"error Occured in proceeding"})
                }
            });
        }
       
        else
        {
            configurationdetailsmodel2.save((err,doc)=>{
                if(!err)
                {
                    
                    res.render("defaultConfigurationDetails2",{viewtitle:"Details Saved Successfully"})
                }
                else
                {
                    console.log(err)
                    res.render("defaultConfigurationDetails2",{viewerror:"error Occured while Saving the details"});
                }
            });
        
        }
    }
    else{
        console.log(err)
        res.send("error")
    }
    });
});






//.........................................................................//
//......................pega............................................//
router.post("/addConfigurationDetails3",(req,res)=>{

    var configurationdetailsmodel3 = new ConfigurationDetailsModel3();
    configurationdetailsmodel3.Simple_Dev2=req.body.Simple_Dev2;
    configurationdetailsmodel3.Simple_Srdev2=req.body.Simple_Srdev2;
    configurationdetailsmodel3.Simple_BA2=req.body.Simple_BA2;
    configurationdetailsmodel3.Simple_Arch2=req.body.Simple_Arch2;
    configurationdetailsmodel3.Simple_PM2=req.body.Simple_PM2;
    configurationdetailsmodel3.Simple_DM2=req.body.Simple_DM2;
    configurationdetailsmodel3.Medium_Dev2=req.body.Medium_Dev2;
    configurationdetailsmodel3.Medium_Srdev2=req.body.Medium_Srdev2;
    configurationdetailsmodel3.Medium_BA2=req.body.Medium_BA2;
    configurationdetailsmodel3.Medium_Arch2=req.body.Medium_Arch2;
    configurationdetailsmodel3.Medium_PM2=req.body.Medium_PM2;
    configurationdetailsmodel3.Medium_DM2=req.body.Medium_DM2;
    configurationdetailsmodel3.Complex_Dev2=req.body.Complex_Dev2;
    configurationdetailsmodel3.Complex_Srdev2=req.body.Complex_Srdev2;
    configurationdetailsmodel3.Complex_BA2=req.body.Complex_BA2;
    configurationdetailsmodel3.Complex_Arch2=req.body.Complex_Arch2;
    configurationdetailsmodel3.Complex_PM2=req.body.Complex_PM2;
    configurationdetailsmodel3.Complex_DM2=req.body.Complex_DM2;
    configurationdetailsmodel3.Dev_Cost2=req.body.Dev_Cost2;
    configurationdetailsmodel3.Srdev_Cost2=req.body.Srdev_Cost2;
    configurationdetailsmodel3.BA_Cost2=req.body.BA_Cost2;
    configurationdetailsmodel3.Arch_Cost2=req.body.Arch_Cost2;
    configurationdetailsmodel3.PM_Cost2=req.body.PM_Cost2;
    configurationdetailsmodel3.DUlead_Cost2=req.body.DUlead_Cost2;
    configurationdetailsmodel3.Bot_Creator_Cost2=req.body.Bot_Creator_Cost2;
    configurationdetailsmodel3.Bot_Run_Unatt_Cost2=req.body.Bot_Run_Unatt_Cost2;
    configurationdetailsmodel3.Bot_Run_Att_Cost2=req.body.Bot_Run_Att_Cost2;
    configurationdetailsmodel3.Cont_Room_Cost2=req.body.Cont_Room_Cost2;
    configurationdetailsmodel3.VM_Cost2=req.body.VM_Cost2;
    configurationdetailsmodel3.Server_Cost2=req.body.Server_Cost2;
    configurationdetailsmodel3.FTE_Cost2=req.body.FTE_Cost2;
    ConfigurationDetailsModel3.find((err,doc)=>{
        if(!err)
        {
        if(doc.length)
        {
            var updated_doc={$set: {Simple_Dev2:req.body.Simple_Dev2, 
                Simple_Srdev2:req.body.Simple_Srdev2,
                Simple_BA2:req.body.Simple_BA2,
                Simple_Arch2:req.body.Simple_Arch2,
                Simple_PM2:req.body.Simple_PM2,
                Simple_DM2:req.body.Simple_DM2,
                Medium_Dev2:req.body.Medium_Dev2,
                Medium_Srdev2:req.body.Medium_Srdev2,
                Medium_BA2:req.body.Medium_BA2,
                Medium_Arch2:req.body.Medium_Arch2,
                Medium_PM2:req.body.Medium_PM2,
                Medium_DM2:req.body.Medium_DM2,
                Complex_Dev2:req.body.Complex_Dev2,
                Complex_Srdev2:req.body.Complex_Srdev2,
                Complex_BA2:req.body.Complex_BA2,
                Complex_Arch2:req.body.Complex_Arch2,
                Complex_PM2:req.body.Complex_PM2,
                Complex_DM2:req.body.Complex_DM2,
                Dev_Cost2:req.body.Dev_Cost2,
                Srdev_Cost2:req.body.Srdev_Cost2,
                BA_Cost2:req.body.BA_Cost2,
                Arch_Cost2:req.body.Arch_Cost2,
                PM_Cost2:req.body.PM_Cost2,
                DUlead_Cost2:req.body.DUlead_Cost2,
                Bot_Creator_Cost2:req.body.Bot_Creator_Cost2,
                Bot_Run_Unatt_Cost2:req.body.Bot_Run_Unatt_Cost2,
                Bot_Run_Att_Cost2:req.body.Bot_Run_Att_Cost2,
                Cont_Room_Cost2:req.body.Cont_Room_Cost2,
                VM_Cost2:req.body.VM_Cost2,
                Server_Cost2:req.body.Server_Cost2,
                FTE_Cost2:req.body.FTE_Cost2,
                }}
            ConfigurationDetailsModel3.updateOne({Simple_Dev2:doc[0].Simple_Dev2},updated_doc,(err,doc)=>{
                if(!err)
                {
                   res.render("configurationDetailsInputPR",{viewtitle:"Updated Successfully"})
                }
                else{
                    console.log(err);
                    res.render("configurationDetailsInputPR",{viewerror:"error Occured in proceeding"})
                }
            });
        }
       
        else
        {
            configurationdetailsmodel3.save((err,doc)=>{
                if(!err)
                {
                    
                    res.render("defaultConfigurationDetails3",{viewtitle:"Details Saved Successfully"})
                }
                else
                {
                    console.log(err)
                    res.render("defaultConfigurationDetails3",{viewerror:"error Occured while Saving the details"});
                }
            });
        
        }
    }
    else{
        console.log(err)
        res.send("error")
    }
    });
});


//....................................................................//
//.................ui..............................................//
router.post("/addConfigurationDetails4",(req,res)=>{

    var configurationdetailsmodel4 = new ConfigurationDetailsModel4();
    configurationdetailsmodel4.Simple_Dev3=req.body.Simple_Dev3;
    configurationdetailsmodel4.Simple_Srdev3=req.body.Simple_Srdev3;
    configurationdetailsmodel4.Simple_BA3=req.body.Simple_BA3;
    configurationdetailsmodel4.Simple_Arch3=req.body.Simple_Arch3;
    configurationdetailsmodel4.Simple_PM3=req.body.Simple_PM3;
    configurationdetailsmodel4.Simple_DM3=req.body.Simple_DM3;
    configurationdetailsmodel4.Medium_Dev3=req.body.Medium_Dev3;
    configurationdetailsmodel4.Medium_Srdev3=req.body.Medium_Srdev3;
    configurationdetailsmodel4.Medium_BA3=req.body.Medium_BA3;
    configurationdetailsmodel4.Medium_Arch3=req.body.Medium_Arch3;
    configurationdetailsmodel4.Medium_PM3=req.body.Medium_PM3;
    configurationdetailsmodel4.Medium_DM3=req.body.Medium_DM3;
    configurationdetailsmodel4.Complex_Dev3=req.body.Complex_Dev3;
    configurationdetailsmodel4.Complex_Srdev3=req.body.Complex_Srdev3;
    configurationdetailsmodel4.Complex_BA3=req.body.Complex_BA3;
    configurationdetailsmodel4.Complex_Arch3=req.body.Complex_Arch3;
    configurationdetailsmodel4.Complex_PM3=req.body.Complex_PM3;
    configurationdetailsmodel4.Complex_DM3=req.body.Complex_DM3;
    configurationdetailsmodel4.Dev_Cost3=req.body.Dev_Cost3;
    configurationdetailsmodel4.Srdev_Cost3=req.body.Srdev_Cost3;
    configurationdetailsmodel4.BA_Cost3=req.body.BA_Cost3;
    configurationdetailsmodel4.Arch_Cost3=req.body.Arch_Cost3;
    configurationdetailsmodel4.PM_Cost3=req.body.PM_Cost3;
    configurationdetailsmodel4.DUlead_Cost3=req.body.DUlead_Cost3;
    configurationdetailsmodel4.Bot_Creator_Cost3=req.body.Bot_Creator_Cost3;
    configurationdetailsmodel4.Bot_Run_Unatt_Cost3=req.body.Bot_Run_Unatt_Cost3;
    configurationdetailsmodel4.Bot_Run_Att_Cost3=req.body.Bot_Run_Att_Cost3;
    configurationdetailsmodel4.Cont_Room_Cost3=req.body.Cont_Room_Cost3;
    configurationdetailsmodel4.VM_Cost3=req.body.VM_Cost3;
    configurationdetailsmodel4.Server_Cost3=req.body.Server_Cost3;
    configurationdetailsmodel4.FTE_Cost3=req.body.FTE_Cost3;
    ConfigurationDetailsModel4.find((err,doc)=>{
        if(!err)
        {
        if(doc.length)
        {
            var updated_doc={$set: {Simple_Dev3:req.body.Simple_Dev3, 
                Simple_Srdev3:req.body.Simple_Srdev3,
                Simple_BA3:req.body.Simple_BA3,
                Simple_Arch3:req.body.Simple_Arch3,
                Simple_PM3:req.body.Simple_PM3,
                Simple_DM3:req.body.Simple_DM3,
                Medium_Dev3:req.body.Medium_Dev3,
                Medium_Srdev3:req.body.Medium_Srdev3,
                Medium_BA3:req.body.Medium_BA3,
                Medium_Arch3:req.body.Medium_Arch3,
                Medium_PM3:req.body.Medium_PM3,
                Medium_DM3:req.body.Medium_DM3,
                Complex_Dev3:req.body.Complex_Dev3,
                Complex_Srdev3:req.body.Complex_Srdev3,
                Complex_BA3:req.body.Complex_BA3,
                Complex_Arch3:req.body.Complex_Arch3,
                Complex_PM3:req.body.Complex_PM3,
                Complex_DM3:req.body.Complex_DM3,
                Dev_Cost3:req.body.Dev_Cost3,
                Srdev_Cost3:req.body.Srdev_Cost3,
                BA_Cost3:req.body.BA_Cost3,
                Arch_Cost3:req.body.Arch_Cost3,
                PM_Cost3:req.body.PM_Cost3,
                DUlead_Cost3:req.body.DUlead_Cost3,
                Bot_Creator_Cost3:req.body.Bot_Creator_Cost3,
                Bot_Run_Unatt_Cost3:req.body.Bot_Run_Unatt_Cost3,
                Bot_Run_Att_Cost3:req.body.Bot_Run_Att_Cost3,
                Cont_Room_Cost3:req.body.Cont_Room_Cost3,
                VM_Cost3:req.body.VM_Cost3,
                Server_Cost3:req.body.Server_Cost3,
                FTE_Cost3:req.body.FTE_Cost3,
                }}
            ConfigurationDetailsModel4.updateOne({Simple_Dev3:doc[0].Simple_Dev3},updated_doc,(err,doc)=>{
                if(!err)
                {
                   res.render("configurationDetailsInputBP",{viewtitle:"Updated Successfully"})
                }
                else{
                    console.log(err);
                    res.render("configurationDetailsInputBP",{viewerror:"error Occured in proceeding"})
                }
            });
        }
       
        else
        {
            configurationdetailsmodel4.save((err,doc)=>{
                if(!err)
                {
                    
                    res.render("defaultConfigurationDetails4",{viewtitle:"Details Saved Successfully"})
                }
                else
                {
                    console.log(err)
                    res.render("defaultConfigurationDetails4",{viewerror:"error Occured while Saving the details"});
                }
            });
        
        }
    }
    else{
        console.log(err)
        res.send("error")
    }
    });
});

//.........................................................//
router.post("/addSelectedProcess",(req,res)=>{
    var businessmodel= new BusinessModel();
    businessmodel.Selected_Process=req.body.Selected_Process; 
    businessmodel.Total_Count=businessmodel.Selected_Process.length;
    totalcount=businessmodel.Selected_Process.length;
    console.log(businessmodel.Total_Count);
    var simplecount=0;
    var mediumcount=0;
    var complexcount=0;
    
    for(i=0;i<businessmodel.Selected_Process.length;i++){
        if(businessmodel.Selected_Process[i].includes('Simple'))
             simplecount=simplecount+1;
        else if(businessmodel.Selected_Process[i].includes('Medium'))
            mediumcount=mediumcount+1;
        else
            complexcount=complexcount+1;
    }
    
    businessmodel.Simple_Count=simplecount;
    businessmodel.Medium_Count=mediumcount;
    businessmodel.Complex_Count=complexcount;
    BusinessModel.find((err,doc)=>{
        if(!err)
        {
        if(doc.length)
        {
            var updated_doc={$set: {Selected_Process:req.body.Selected_Process, Total_Count:totalcount,Simple_Count:simplecount,Medium_Count:mediumcount,Complex_Count:complexcount}}
            BusinessModel.updateOne({Total_Count:doc[0].Total_Count},updated_doc,(err,doc)=>{
                if(!err)
                {
                    BusinessModel.find((err,docs)=>{
                        if(!err)
                        {
                            console.log("Selected_Process");
                            // console.log(req.body.Selected_Process.Proc_Id);
                            res.render("selectedProcess",{list:docs[0], Selected_Process:req.body.Selected_Process})
                        }
                        else
                        {
                            res.send("error occured"+err)
                        }
                    });
                }
                else{
                    console.log(err);
                    res.send("error Occured in proceeding")
                }
            });
        }
        
        else
        {
            businessmodel.save((err,doc)=>{
                if(!err)
                {
                    console.log("..//......//..........//..........//");
                    console.log(req.body.Selected_Process);
                    res.render("selectedProcess",{list:doc, Selected_Process:req.body.Selected_Process})
                }
                else{
                    console.log(err)
                    res.send("error in Proceeding");
                }
            });
        
        }
    }
    else{
        console.log(err)
        res.send("error")
    }
    });
});
//try in one page.......................................................///
router.post("/effortcalculation",(req,res)=>{
    console.log("i am in effortcalculation")
    rtool=req.body.RPA_Tool;
    businesscaseid=req.body.Business_Case_Id;
    console.log(rtool)
    projectduration=req.body.Proj_Dura;
    simplecount=req.body.Simple_Count;
    mediumcount=req.body.Medium_Count;
    complexcount=req.body.Complex_Count;
    totalcount=req.body.Total_Count;
    processlist=req.body.Selected_Process;
   console.log(typeof  processlist);
   finalprocesslist=processlist.split(",");
//    finalprocesslistarray=processlist.toArray;

   rega=processlist.match(/Client Name\:\s[\w\s]*/gm);
   regb=rega.toString();
   console.log(regb);
   reg=regb.replace(/Client Name:/gm,'');
  // subStr = reg1.split(':').pop().split(',')[0];
//    mySubString = reg.toString().substring(
//     reg.toString().lastIndexOf("Client Name:") + 1, 
//     reg.toString().lastIndexOf(",")
// );
// console.log(subStr);
   processid=processlist.match(/ProcessId\:\s[\w\s]*/gm);
   console.log("*?????**********************"); 
  // console.log(finalprocesslist1);
  console.log(reg);
  console.log(typeof  finalprocesslist);
   console.log(finalprocesslist);
   console.log(finalprocesslist.length); 
//    SearchIndex = finalprocesslist.indexOf("Client Name");
//    console.log(SearchIndex);
//    function search(nameKey, myArray){
//     for (var i=0; i < myArray.length; i++) {
//         if (myArray[i].name === nameKey) {
//             return myArray[i];
//         }
//     }
// }
//  resultObject = search("Client Name", finalprocesslist);
//  console.log("....*...*.......*");
//  console.log( resultObject);

//    console.log(finalprocesslist.Client Name);
    
    // console.log(typeof(processlist));
    // processlist1=req.query.Selected_Process;
    // processlist2=req.params.Selected_Process;
    console.log("...........//.............//.............//")
    console.log( processlist);
    // console.log( processlist1);
    // console.log( processlist2);
    //.....................switch...........................//
    // switch(thirdPartySites_str){
    //     case "Yes":
    //       thirdPartySites_int = 1;
    //       break;
    //     case "No":
    //       thirdPartySites_int = 0;
    //       break;
        
    //   }
    //................................................................//
switch(rtool){
    case "Automation Anywhere":
    ConfigurationDetailsModel.find((err,docs)=>{
        if(!err)
        {
           console.log("in aa")

         
            console.log(docs)
            Simple=simplecount;
            Complex=complexcount;
            Medium=mediumcount;
            Total=totalcount;
            rpatool=rtool;
            pd=projectduration;
            pl=processlist;
            fpl=finalprocesslist;
            BI=businesscaseid;
            rx=reg;
            pid=processid;
            Simple_Dev_Effort=docs[0].Simple_Dev*simplecount;
            Simple_Srdev_Effort=docs[0].Simple_Srdev*simplecount;
            Simple_BA_Effort=docs[0].Simple_BA*simplecount;
            Simple_Arch_Effort=docs[0].Simple_Arch*simplecount;
            Simple_PM_Effort=docs[0].Simple_PM*simplecount;
            Simple_DM_Effort=docs[0].Simple_DM*simplecount;
            Total_Simple_Effort=Simple_Dev_Effort+Simple_Srdev_Effort+Simple_BA_Effort+Simple_Arch_Effort+Simple_PM_Effort+Simple_DM_Effort;
            Total_Simple_Effort=Total_Simple_Effort.toFixed(2);
            Total_Simple_Effort=Number(Total_Simple_Effort);

            Medium_Dev_Effort=docs[0].Medium_Dev*mediumcount;
            Medium_Srdev_Effort=docs[0].Medium_Srdev*mediumcount;
            Medium_BA_Effort=docs[0].Medium_BA*mediumcount;
            
            Medium_Arch_Effort=docs[0].Medium_Arch*mediumcount;
            
            Medium_PM_Effort=docs[0].Medium_PM*mediumcount;
            Medium_PM_Effort=Math.round(Medium_PM_Effort);
            
            Medium_DM_Effort=docs[0].Medium_DM*mediumcount;
            Medium_DM_Effort=Math.round(Medium_DM_Effort);
            
            Total_Medium_Effort=Medium_Dev_Effort+Medium_Srdev_Effort+Medium_BA_Effort+Medium_Arch_Effort+Medium_PM_Effort+Medium_DM_Effort;
            Total_Medium_Effort=Total_Medium_Effort.toFixed(2);
            Total_Medium_Effort=Number(Total_Medium_Effort);


            Complex_Dev_Effort=docs[0].Complex_Dev*complexcount;
            Complex_Srdev_Effort=docs[0].Complex_Srdev*complexcount;
            Complex_BA_Effort=docs[0].Complex_BA*complexcount;
            
            Complex_Arch_Effort=docs[0].Complex_Arch*complexcount;
            
            Complex_PM_Effort=Math.round(docs[0].Complex_PM*complexcount);
           // Complex_PM_Effort= Complex_PM_Effort.toFixed(2);
            Complex_DM_Effort=Math.round(docs[0].Complex_DM*complexcount);
            //Complex_DM_Effort=Complex_DM_Effort.toFixed(2);
            Total_Complex_Effort=Complex_Dev_Effort+Complex_Srdev_Effort+Complex_BA_Effort+Complex_Arch_Effort+Complex_PM_Effort+Complex_DM_Effort;
            Total_Complex_Effort=Total_Complex_Effort.toFixed(2);
            Total_Complex_Effort=Number(Total_Complex_Effort);


            Total_Dev_Effort=Simple_Dev_Effort+Medium_Dev_Effort+Complex_Dev_Effort;
            Total_Srdev_Effort=Simple_Srdev_Effort+Medium_Srdev_Effort+Complex_Srdev_Effort;
            Total_BA_Effort=Simple_BA_Effort+Medium_BA_Effort+Complex_BA_Effort;
            Total_BA_Effort=Total_BA_Effort.toFixed(2)
            Total_Arch_Effort=Simple_Arch_Effort+Medium_Arch_Effort+Complex_Arch_Effort;
            Total_Arch_Effort=Total_Arch_Effort.toFixed(2);
            Total_PM_Effort=Simple_PM_Effort+Medium_PM_Effort+Complex_PM_Effort;
            Total_PM_Effort=Total_PM_Effort.toFixed(2);
            Total_DM_Effort=Simple_DM_Effort+Medium_DM_Effort+Complex_DM_Effort;
            Total_DM_Effort=Total_DM_Effort.toFixed(2);
            Total_Of_Total_Effort=Total_Simple_Effort+Total_Medium_Effort+Total_Complex_Effort;
            Total_Of_Total_Effort=Total_Of_Total_Effort.toFixed(2);

            Dev_Roundoff=Math.ceil(Total_Dev_Effort/projectduration);
            Srdev_Roundoff=Math.ceil(Total_Srdev_Effort/projectduration);
            BA_Roundoff=Math.round((Total_BA_Effort/projectduration)*100)/100;
            BA_Roundoff=Math.round((BA_Roundoff)*10)/10;
            BA_Roundoff=BA_Roundoff.toFixed(2);
            Arch_Roundoff=Math.round((Total_Arch_Effort/projectduration)*100)/100;
            Arch_Roundoff=Math.round((Arch_Roundoff)*10)/10;
            Arch_Roundoff=Arch_Roundoff.toFixed(2);
            PM_Roundoff=Math.round((Total_PM_Effort/projectduration)*100)/100;
            PM_Roundoff=Math.round((PM_Roundoff)*10)/10;
            PM_Roundoff=PM_Roundoff.toFixed(2);
            
            DM_Roundoff=Math.round((Total_DM_Effort/projectduration)*100)/100;
           
            DM_Roundoff=Math.round((DM_Roundoff)*10)/10;
            DM_Roundoff=DM_Roundoff.toFixed(2);
            DM_Roundoff=(Total_DM_Effort/projectduration).toFixed(2);
            Total_Rounoff=Total_Of_Total_Effort/projectduration;
            Total_Rounoff=Total_Rounoff.toFixed(2);
            

            Bot_Creator_Count=Dev_Roundoff+Srdev_Roundoff;
            Botrunner_Unatt_Count=totalcount;
            Botrunner_Att_Count=0;
            Controlroom_Count=1;
            Bot_Creator_Price=docs[0].Bot_Creator_Cost;
            Botrunner_Unatt_Price=docs[0].Bot_Run_Unatt_Cost;
            Botrunner_Att_Price=docs[0].Bot_Run_Att_Cost;
            Controlroom_Price=docs[0].Cont_Room_Cost;
            Total_Bot_Creator_Cost=Bot_Creator_Count*Bot_Creator_Price;
            Total_Botrunner_Unatt_Cost=Botrunner_Unatt_Count*Botrunner_Unatt_Price;
            Total_Botrunner_Att_Cost=Botrunner_Att_Count*Botrunner_Att_Price;
            Total_Controlroom_Cost=Controlroom_Price*Controlroom_Count;
            Totalof_Total_Lisc_Price=Total_Controlroom_Cost+Total_Botrunner_Att_Cost+Total_Botrunner_Unatt_Cost+Total_Bot_Creator_Cost;

            VM_Count=Dev_Roundoff+Srdev_Roundoff;
            Server_Count=1;
            VM_Price=docs[0].VM_Cost;
            Server_Price=docs[0].Server_Cost;
            FTE_Price=docs[0].FTE_Cost;
            Total_VM_Price=VM_Count*VM_Price;
            Total_Server_Price=Server_Count*Server_Price;
            Totalof_Total_Infra_Price=Total_VM_Price+Total_Server_Price;

            Dev_Cost=Total_Dev_Effort*docs[0].Dev_Cost*168;
            Srdev_Cost=Total_Srdev_Effort*docs[0].Srdev_Cost*168;
            BA_Cost=Total_BA_Effort*docs[0].BA_Cost*168;
            Arch_Cost=Total_Arch_Effort*docs[0].Arch_Cost*168;
            PM_Cost=Math.round(Total_PM_Effort*docs[0].PM_Cost*168);
            
            DUlead_Cost=Total_DM_Effort*docs[0].DUlead_Cost*168;
            Total_Imp_Cost=Dev_Cost+Srdev_Cost+BA_Cost+Arch_Cost+PM_Cost+DUlead_Cost;
            Total_Imp_Cost_Two=Total_Imp_Cost.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            
           
            console.log(Total_Imp_Cost);
            Maint_Cost=Math.ceil(totalcount/7*30000);
            FTE_Savings_Count=Math.round(simplecount*0.5+mediumcount*1+complexcount*2);
            FTE_Savings_USD=FTE_Price*FTE_Savings_Count;
            Net_Savings=Math.round(FTE_Savings_USD-(Total_Imp_Cost+Totalof_Total_Lisc_Price+Totalof_Total_Infra_Price+Maint_Cost));
            Net_Savings_Two=Math.round(FTE_Savings_USD-(0+Totalof_Total_Lisc_Price+Totalof_Total_Infra_Price+Maint_Cost));
            Total_Net_Savings=Net_Savings+(4*Net_Savings_Two);
            Total_Net_Savings_Two=Total_Net_Savings.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            Total_TCO=Total_Imp_Cost+(5*Totalof_Total_Lisc_Price)+(5*Totalof_Total_Infra_Price)+(5*Maint_Cost);
            Total_TCO_Two=Total_TCO.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            res.render("effortEstimation",
            {Simple_Dev_Effort:Simple_Dev_Effort,
                Total:Total,
                Total_Net_Savings_Two:Total_Net_Savings_Two,
                Total_Imp_Cost_Two:Total_Imp_Cost_Two,
                Total_TCO_Two:Total_TCO_Two,
                Simple:Simple,
                Medium:Medium,
                Complex:Complex,
                rpatool:rpatool,
                pd:pd,
                pid:pid,
                pl:pl,
                BI:BI,
                fpl:fpl,
                rx:rx,
                Total_TCO:Total_TCO,
                Simple_Srdev_Effort:Simple_Srdev_Effort,
                Simple_BA_Effort:Simple_BA_Effort,
                Simple_Arch_Effort:Simple_Arch_Effort,
                Simple_PM_Effort:Simple_PM_Effort,
                Simple_DM_Effort:Simple_DM_Effort,
                Total_Simple_Effort:Total_Simple_Effort,

                Medium_Dev_Effort:Medium_Dev_Effort,
                Medium_Srdev_Effort:Medium_Srdev_Effort,
                Medium_BA_Effort:Medium_BA_Effort,
                Medium_Arch_Effort:Medium_Arch_Effort,
                Medium_PM_Effort:Medium_PM_Effort,
                Medium_DM_Effort:Medium_DM_Effort,
                Total_Medium_Effort:Total_Medium_Effort,

                
                Complex_Dev_Effort:Complex_Dev_Effort,
                Complex_Srdev_Effort:Complex_Srdev_Effort,
                Complex_BA_Effort:Complex_BA_Effort,
                Complex_Arch_Effort:Complex_Arch_Effort,
                Complex_PM_Effort:Complex_PM_Effort,
                Complex_DM_Effort:Complex_DM_Effort,
                Total_Complex_Effort:Total_Complex_Effort,


                 Total_Dev_Effort:Total_Dev_Effort,
            Total_Srdev_Effort:Total_Srdev_Effort,
            Total_BA_Effort:Total_BA_Effort,
            Total_Arch_Effort:Total_Arch_Effort,
            Total_PM_Effort:Total_PM_Effort,
            Total_DM_Effort:Total_DM_Effort,
            Total_Of_Total_Effort:Total_Of_Total_Effort,

            Dev_Roundoff:Dev_Roundoff,
            Srdev_Roundoff:Srdev_Roundoff,
            BA_Roundoff:BA_Roundoff,
            
            Arch_Roundoff:Arch_Roundoff,
            PM_Roundoff:PM_Roundoff,
            DM_Roundoff:DM_Roundoff,
            Total_Rounoff:Total_Rounoff,

            Bot_Creator_Count:Bot_Creator_Count,
            Botrunner_Unatt_Count:Botrunner_Unatt_Count,
            Botrunner_Att_Count:Botrunner_Att_Count,
            Controlroom_Count:Controlroom_Count,
            Bot_Creator_Price:Bot_Creator_Price,
            Botrunner_Unatt_Price:Botrunner_Unatt_Price,
            Botrunner_Att_Price:Botrunner_Att_Price,
            Controlroom_Price:Controlroom_Price,
            Total_Bot_Creator_Cost:Total_Bot_Creator_Cost,
            Total_Botrunner_Unatt_Cost:Total_Botrunner_Unatt_Cost,
            Total_Botrunner_Att_Cost:Total_Botrunner_Att_Cost,
            Total_Controlroom_Cost:Total_Controlroom_Cost,
            Totalof_Total_Lisc_Price:Totalof_Total_Lisc_Price,

            VM_Count:VM_Count,
            Server_Count:Server_Count,
            VM_Price:VM_Price,
            Server_Price:Server_Price,
            FTE_Price:FTE_Price,
            Total_VM_Price:Total_VM_Price,
            Total_Server_Price:Total_Server_Price,
            Totalof_Total_Infra_Price:Totalof_Total_Infra_Price,

            Dev_Cost:Dev_Cost,
            Srdev_Cost:Srdev_Cost,
            BA_Cost:BA_Cost,
            Arch_Cost:Arch_Cost,
            PM_Cost:PM_Cost,
            DUlead_Cost:DUlead_Cost,
            Total_Imp_Cost:Total_Imp_Cost,
            Maint_Cost:Maint_Cost,
            FTE_Savings_Count:FTE_Savings_Count,
            FTE_Savings_USD:FTE_Savings_USD,
            Net_Savings:Net_Savings,
            Net_Savings_Two:Net_Savings_Two,
            Total_Net_Savings:Total_Net_Savings,

            
            });
           
            
        }
        else{
            res.send(err)
            console.log(err)
        }
    });
break;
//...............................................................//

case "UiPath":
    ConfigurationDetailsModel2.find((err,docs)=>{
        if(!err)
        {
           console.log("in up")

         
            console.log(docs)
            Simple=simplecount;
            rx=reg;
            Complex=complexcount;
            Medium=mediumcount;
            Total=totalcount;
            rpatool=rtool;
            pid=processid;
            pd=projectduration;
            pl=processlist;
            BI=businesscaseid;
            fpl=finalprocesslist;
            Simple_Dev_Effort=docs[0].Simple_Dev1*simplecount;
            Simple_Srdev_Effort=docs[0].Simple_Srdev1*simplecount;
            Simple_BA_Effort=docs[0].Simple_BA1*simplecount;
            Simple_Arch_Effort=docs[0].Simple_Arch1*simplecount;
            Simple_PM_Effort=docs[0].Simple_PM1*simplecount;
            Simple_DM_Effort=docs[0].Simple_DM1*simplecount;
            Total_Simple_Effort=Simple_Dev_Effort+Simple_Srdev_Effort+Simple_BA_Effort+Simple_Arch_Effort+Simple_PM_Effort+Simple_DM_Effort;
            Total_Simple_Effort=Total_Simple_Effort.toFixed(2);
            Total_Simple_Effort=Number(Total_Simple_Effort);

            Medium_Dev_Effort=docs[0].Medium_Dev1*mediumcount;
            Medium_Srdev_Effort=docs[0].Medium_Srdev1*mediumcount;
            Medium_BA_Effort=docs[0].Medium_BA1*mediumcount;
            
            Medium_Arch_Effort=docs[0].Medium_Arch1*mediumcount;
            
            Medium_PM_Effort=docs[0].Medium_PM1*mediumcount;
            Medium_PM_Effort=Math.round(Medium_PM_Effort);
            
            Medium_DM_Effort=docs[0].Medium_DM1*mediumcount;
            Medium_DM_Effort=Math.round(Medium_DM_Effort);
            
            Total_Medium_Effort=Medium_Dev_Effort+Medium_Srdev_Effort+Medium_BA_Effort+Medium_Arch_Effort+Medium_PM_Effort+Medium_DM_Effort;
            Total_Medium_Effort=Total_Medium_Effort.toFixed(2);
            Total_Medium_Effort=Number(Total_Medium_Effort);


            Complex_Dev_Effort=docs[0].Complex_Dev1*complexcount;
            Complex_Srdev_Effort=docs[0].Complex_Srdev1*complexcount;
            Complex_BA_Effort=docs[0].Complex_BA1*complexcount;
            
            Complex_Arch_Effort=docs[0].Complex_Arch1*complexcount;
            
            Complex_PM_Effort=Math.round(docs[0].Complex_PM1*complexcount);
            
            Complex_DM_Effort=Math.round(docs[0].Complex_DM1*complexcount);
            
            Total_Complex_Effort=Complex_Dev_Effort+Complex_Srdev_Effort+Complex_BA_Effort+Complex_Arch_Effort+Complex_PM_Effort+Complex_DM_Effort;
            Total_Complex_Effort=Total_Complex_Effort.toFixed(2);
            Total_Complex_Effort=Number(Total_Complex_Effort);


            Total_Dev_Effort=Simple_Dev_Effort+Medium_Dev_Effort+Complex_Dev_Effort;
            Total_Srdev_Effort=Simple_Srdev_Effort+Medium_Srdev_Effort+Complex_Srdev_Effort;
            Total_BA_Effort=Simple_BA_Effort+Medium_BA_Effort+Complex_BA_Effort;
            Total_BA_Effort=Total_BA_Effort.toFixed(2)
            Total_Arch_Effort=Simple_Arch_Effort+Medium_Arch_Effort+Complex_Arch_Effort;
            Total_Arch_Effort=Total_Arch_Effort.toFixed(2);
            Total_PM_Effort=Simple_PM_Effort+Medium_PM_Effort+Complex_PM_Effort;
            Total_PM_Effort=Total_PM_Effort.toFixed(2);
            Total_DM_Effort=Simple_DM_Effort+Medium_DM_Effort+Complex_DM_Effort;
            Total_DM_Effort=Total_DM_Effort.toFixed(2);
            Total_Of_Total_Effort=Total_Simple_Effort+Total_Medium_Effort+Total_Complex_Effort;
            Total_Of_Total_Effort=Total_Of_Total_Effort.toFixed(2);

            Dev_Roundoff=Math.ceil(Total_Dev_Effort/projectduration);
            Srdev_Roundoff=Math.ceil(Total_Srdev_Effort/projectduration);
            BA_Roundoff=Math.round((Total_BA_Effort/projectduration)*100)/100;
            BA_Roundoff=Math.round((BA_Roundoff)*10)/10;
            BA_Roundoff=BA_Roundoff.toFixed(2);
            Arch_Roundoff=Math.round((Total_Arch_Effort/projectduration)*100)/100;
            Arch_Roundoff=Math.round((Arch_Roundoff)*10)/10;
            Arch_Roundoff=Arch_Roundoff.toFixed(2);
            PM_Roundoff=Math.round((Total_PM_Effort/projectduration)*100)/100;
            PM_Roundoff=Math.round((PM_Roundoff)*10)/10;
            PM_Roundoff=PM_Roundoff.toFixed(2);
            
            DM_Roundoff=Math.round((Total_DM_Effort/projectduration)*100)/100;
           
            DM_Roundoff=Math.round((DM_Roundoff)*10)/10;
            DM_Roundoff=DM_Roundoff.toFixed(2);
            DM_Roundoff=(Total_DM_Effort/projectduration).toFixed(2);
            Total_Rounoff=Total_Of_Total_Effort/projectduration;
            Total_Rounoff=Total_Rounoff.toFixed(2);
            

            Bot_Creator_Count=Dev_Roundoff+Srdev_Roundoff;
            Botrunner_Unatt_Count=totalcount;
            Botrunner_Att_Count=0;
            Controlroom_Count=1;
            Bot_Creator_Price=docs[0].Bot_Creator_Cost1;
            Botrunner_Unatt_Price=docs[0].Bot_Run_Unatt_Cost1;
            Botrunner_Att_Price=docs[0].Bot_Run_Att_Cost1;
            Controlroom_Price=docs[0].Cont_Room_Cost1;
            Total_Bot_Creator_Cost=Bot_Creator_Count*Bot_Creator_Price;
            Total_Botrunner_Unatt_Cost=Botrunner_Unatt_Count*Botrunner_Unatt_Price;
            Total_Botrunner_Att_Cost=Botrunner_Att_Count*Botrunner_Att_Price;
            Total_Controlroom_Cost=Controlroom_Price*Controlroom_Count;
            Totalof_Total_Lisc_Price=Total_Controlroom_Cost+Total_Botrunner_Att_Cost+Total_Botrunner_Unatt_Cost+Total_Bot_Creator_Cost;

            VM_Count=Dev_Roundoff+Srdev_Roundoff;
            Server_Count=1;
            VM_Price=docs[0].VM_Cost1;
            Server_Price=docs[0].Server_Cost1;
            FTE_Price=docs[0].FTE_Cost1;
            Total_VM_Price=VM_Count*VM_Price;
            Total_Server_Price=Server_Count*Server_Price;
            Totalof_Total_Infra_Price=Total_VM_Price+Total_Server_Price;

            Dev_Cost1=Total_Dev_Effort*docs[0].Dev_Cost1*168;
            console.log("....................................");
            console.log(Dev_Cost1);
            Srdev_Cost1=Total_Srdev_Effort*docs[0].Srdev_Cost1*168;
            BA_Cost1=Total_BA_Effort*docs[0].BA_Cost1*168;
            Arch_Cost1=Total_Arch_Effort*docs[0].Arch_Cost1*168;
            PM_Cost1=Math.round(Total_PM_Effort*docs[0].PM_Cost1*168);
            
            DUlead_Cost1=Total_DM_Effort*docs[0].DUlead_Cost1*168;
            Total_Imp_Cost=Dev_Cost1+Srdev_Cost1+BA_Cost1+Arch_Cost1+PM_Cost1+DUlead_Cost1;
            Total_Imp_Cost_Two=Total_Imp_Cost.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            
           
            console.log(Total_Imp_Cost);
            Maint_Cost=Math.ceil(totalcount/7*30000);
            FTE_Savings_Count=Math.round(simplecount*0.5+mediumcount*1+complexcount*2);
            FTE_Savings_USD=FTE_Price*FTE_Savings_Count;
            Net_Savings=Math.round(FTE_Savings_USD-(Total_Imp_Cost+Totalof_Total_Lisc_Price+Totalof_Total_Infra_Price+Maint_Cost));
            Net_Savings_Two=Math.round(FTE_Savings_USD-(0+Totalof_Total_Lisc_Price+Totalof_Total_Infra_Price+Maint_Cost));
            Total_Net_Savings=Net_Savings+(4*Net_Savings_Two);
            Total_Net_Savings_Two=Total_Net_Savings.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            Total_TCO=Total_Imp_Cost+(5*Totalof_Total_Lisc_Price)+(5*Totalof_Total_Infra_Price)+(5*Maint_Cost);
            Total_TCO_Two=Total_TCO.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            res.render("effortEstimation",
            {Simple_Dev_Effort:Simple_Dev_Effort,
                Total:Total,
                Total_Net_Savings_Two:Total_Net_Savings_Two,
                Total_Imp_Cost_Two:Total_Imp_Cost_Two,
                Total_TCO_Two:Total_TCO_Two,
                Simple:Simple,
                Medium:Medium,
                Complex:Complex,
                rpatool:rpatool,
                pd:pd,
                pid:pid,
                pl:pl,
                BI:BI,
                fpl:fpl,
                rx:rx,
                Total_TCO:Total_TCO,
                Simple_Srdev_Effort:Simple_Srdev_Effort,
                Simple_BA_Effort:Simple_BA_Effort,
                Simple_Arch_Effort:Simple_Arch_Effort,
                Simple_PM_Effort:Simple_PM_Effort,
                Simple_DM_Effort:Simple_DM_Effort,
                Total_Simple_Effort:Total_Simple_Effort,

                Medium_Dev_Effort:Medium_Dev_Effort,
                Medium_Srdev_Effort:Medium_Srdev_Effort,
                Medium_BA_Effort:Medium_BA_Effort,
                Medium_Arch_Effort:Medium_Arch_Effort,
                Medium_PM_Effort:Medium_PM_Effort,
                Medium_DM_Effort:Medium_DM_Effort,
                Total_Medium_Effort:Total_Medium_Effort,

                
                Complex_Dev_Effort:Complex_Dev_Effort,
                Complex_Srdev_Effort:Complex_Srdev_Effort,
                Complex_BA_Effort:Complex_BA_Effort,
                Complex_Arch_Effort:Complex_Arch_Effort,
                Complex_PM_Effort:Complex_PM_Effort,
                Complex_DM_Effort:Complex_DM_Effort,
                Total_Complex_Effort:Total_Complex_Effort,


                 Total_Dev_Effort:Total_Dev_Effort,
            Total_Srdev_Effort:Total_Srdev_Effort,
            Total_BA_Effort:Total_BA_Effort,
            Total_Arch_Effort:Total_Arch_Effort,
            Total_PM_Effort:Total_PM_Effort,
            Total_DM_Effort:Total_DM_Effort,
            Total_Of_Total_Effort:Total_Of_Total_Effort,

            Dev_Roundoff:Dev_Roundoff,
            Srdev_Roundoff:Srdev_Roundoff,
            BA_Roundoff:BA_Roundoff,
            
            Arch_Roundoff:Arch_Roundoff,
            PM_Roundoff:PM_Roundoff,
            DM_Roundoff:DM_Roundoff,
            Total_Rounoff:Total_Rounoff,

            Bot_Creator_Count:Bot_Creator_Count,
            Botrunner_Unatt_Count:Botrunner_Unatt_Count,
            Botrunner_Att_Count:Botrunner_Att_Count,
            Controlroom_Count:Controlroom_Count,
            Bot_Creator_Price:Bot_Creator_Price,
            Botrunner_Unatt_Price:Botrunner_Unatt_Price,
            Botrunner_Att_Price:Botrunner_Att_Price,
            Controlroom_Price:Controlroom_Price,
            Total_Bot_Creator_Cost:Total_Bot_Creator_Cost,
            Total_Botrunner_Unatt_Cost:Total_Botrunner_Unatt_Cost,
            Total_Botrunner_Att_Cost:Total_Botrunner_Att_Cost,
            Total_Controlroom_Cost:Total_Controlroom_Cost,
            Totalof_Total_Lisc_Price:Totalof_Total_Lisc_Price,

            VM_Count:VM_Count,
            Server_Count:Server_Count,
            VM_Price:VM_Price,
            Server_Price:Server_Price,
            FTE_Price:FTE_Price,
            Total_VM_Price:Total_VM_Price,
            Total_Server_Price:Total_Server_Price,
            Totalof_Total_Infra_Price:Totalof_Total_Infra_Price,

            Dev_Cost:Dev_Cost1,
            Srdev_Cost:Srdev_Cost1,
            BA_Cost:BA_Cost1,
            Arch_Cost:Arch_Cost1,
            PM_Cost:PM_Cost1,
            DUlead_Cost:DUlead_Cost1,
            Total_Imp_Cost:Total_Imp_Cost,
            Maint_Cost:Maint_Cost,
            FTE_Savings_Count:FTE_Savings_Count,
            FTE_Savings_USD:FTE_Savings_USD,
            Net_Savings:Net_Savings,
            Net_Savings_Two:Net_Savings_Two,
            Total_Net_Savings:Total_Net_Savings,

            
            });
           
            
        }
        else{
            res.send(err)
            console.log(err)
        }
    });




break;

case "Pega Robotics":
    ConfigurationDetailsModel3.find((err,docs)=>{
        if(!err)
        {
           console.log("in pr")

         
            console.log(docs)
            Simple=simplecount;
            rx=reg;
            Complex=complexcount;
            Medium=mediumcount;
            Total=totalcount;
            rpatool=rtool;
            pid=processid;
            pd=projectduration;
            BI=businesscaseid;
            pl=processlist;
            Simple_Dev_Effort=docs[0].Simple_Dev2*simplecount;
            Simple_Srdev_Effort=docs[0].Simple_Srdev2*simplecount;
            Simple_BA_Effort=docs[0].Simple_BA2*simplecount;
            Simple_Arch_Effort=docs[0].Simple_Arch2*simplecount;
            Simple_PM_Effort=docs[0].Simple_PM2*simplecount;
            Simple_DM_Effort=docs[0].Simple_DM2*simplecount;
            Total_Simple_Effort=Simple_Dev_Effort+Simple_Srdev_Effort+Simple_BA_Effort+Simple_Arch_Effort+Simple_PM_Effort+Simple_DM_Effort;
            Total_Simple_Effort=Total_Simple_Effort.toFixed(2);
            Total_Simple_Effort=Number(Total_Simple_Effort);

            Medium_Dev_Effort=docs[0].Medium_Dev2*mediumcount;
            Medium_Srdev_Effort=docs[0].Medium_Srdev2*mediumcount;
            Medium_BA_Effort=docs[0].Medium_BA2*mediumcount;
            
            Medium_Arch_Effort=docs[0].Medium_Arch2*mediumcount;
            
            Medium_PM_Effort=docs[0].Medium_PM2*mediumcount;
            Medium_PM_Effort=Math.round(Medium_PM_Effort);
            
            Medium_DM_Effort=docs[0].Medium_DM2*mediumcount;
            Medium_DM_Effort=Math.round(Medium_DM_Effort);
            
            Total_Medium_Effort=Medium_Dev_Effort+Medium_Srdev_Effort+Medium_BA_Effort+Medium_Arch_Effort+Medium_PM_Effort+Medium_DM_Effort;
            Total_Medium_Effort=Total_Medium_Effort.toFixed(2);
            Total_Medium_Effort=Number(Total_Medium_Effort);


            Complex_Dev_Effort=docs[0].Complex_Dev2*complexcount;
            Complex_Srdev_Effort=docs[0].Complex_Srdev2*complexcount;
            Complex_BA_Effort=docs[0].Complex_BA2*complexcount;
            
            Complex_Arch_Effort=docs[0].Complex_Arch2*complexcount;
            
            Complex_PM_Effort=Math.round(docs[0].Complex_PM2*complexcount);
            
            Complex_DM_Effort=Math.round(docs[0].Complex_DM2*complexcount);
            
            Total_Complex_Effort=Complex_Dev_Effort+Complex_Srdev_Effort+Complex_BA_Effort+Complex_Arch_Effort+Complex_PM_Effort+Complex_DM_Effort;
            Total_Complex_Effort=Total_Complex_Effort.toFixed(2);
            Total_Complex_Effort=Number(Total_Complex_Effort);


            Total_Dev_Effort=Simple_Dev_Effort+Medium_Dev_Effort+Complex_Dev_Effort;
            Total_Srdev_Effort=Simple_Srdev_Effort+Medium_Srdev_Effort+Complex_Srdev_Effort;
            Total_BA_Effort=Simple_BA_Effort+Medium_BA_Effort+Complex_BA_Effort;
            Total_BA_Effort=Total_BA_Effort.toFixed(2)
            Total_Arch_Effort=Simple_Arch_Effort+Medium_Arch_Effort+Complex_Arch_Effort;
            Total_Arch_Effort=Total_Arch_Effort.toFixed(2);
            Total_PM_Effort=Simple_PM_Effort+Medium_PM_Effort+Complex_PM_Effort;
            Total_PM_Effort=Total_PM_Effort.toFixed(2);
            Total_DM_Effort=Simple_DM_Effort+Medium_DM_Effort+Complex_DM_Effort;
            Total_DM_Effort=Total_DM_Effort.toFixed(2);
            Total_Of_Total_Effort=Total_Simple_Effort+Total_Medium_Effort+Total_Complex_Effort;
            Total_Of_Total_Effort=Total_Of_Total_Effort.toFixed(2);

            Dev_Roundoff=Math.ceil(Total_Dev_Effort/projectduration);
            Srdev_Roundoff=Math.ceil(Total_Srdev_Effort/projectduration);
            BA_Roundoff=Math.round((Total_BA_Effort/projectduration)*100)/100;
            BA_Roundoff=Math.round((BA_Roundoff)*10)/10;
            BA_Roundoff=BA_Roundoff.toFixed(2);
            Arch_Roundoff=Math.round((Total_Arch_Effort/projectduration)*100)/100;
            Arch_Roundoff=Math.round((Arch_Roundoff)*10)/10;
            Arch_Roundoff=Arch_Roundoff.toFixed(2);
            PM_Roundoff=Math.round((Total_PM_Effort/projectduration)*100)/100;
            PM_Roundoff=Math.round((PM_Roundoff)*10)/10;
            PM_Roundoff=PM_Roundoff.toFixed(2);
            
            DM_Roundoff=Math.round((Total_DM_Effort/projectduration)*100)/100;
           
            DM_Roundoff=Math.round((DM_Roundoff)*10)/10;
            DM_Roundoff=DM_Roundoff.toFixed(2);
            DM_Roundoff=(Total_DM_Effort/projectduration).toFixed(2);
            Total_Rounoff=Total_Of_Total_Effort/projectduration;
            Total_Rounoff=Total_Rounoff.toFixed(2);
            

            Bot_Creator_Count=Dev_Roundoff+Srdev_Roundoff;
            Botrunner_Unatt_Count=totalcount;
            Botrunner_Att_Count=0;
            Controlroom_Count=2;
            Bot_Creator_Price=docs[0].Bot_Creator_Cost2;
            Botrunner_Unatt_Price=docs[0].Bot_Run_Unatt_Cost2;
            Botrunner_Att_Price=docs[0].Bot_Run_Att_Cost2;
            Controlroom_Price=docs[0].Cont_Room_Cost2;
            Total_Bot_Creator_Cost=Bot_Creator_Count*Bot_Creator_Price;
            Total_Botrunner_Unatt_Cost=Botrunner_Unatt_Count*Botrunner_Unatt_Price;
            Total_Botrunner_Att_Cost=Botrunner_Att_Count*Botrunner_Att_Price;
            Total_Controlroom_Cost=Controlroom_Price*Controlroom_Count;
            Totalof_Total_Lisc_Price=Total_Controlroom_Cost+Total_Botrunner_Att_Cost+Total_Botrunner_Unatt_Cost+Total_Bot_Creator_Cost;

            VM_Count=Dev_Roundoff+Srdev_Roundoff;
            Server_Count=2;
            VM_Price=docs[0].VM_Cost2;
            Server_Price=docs[0].Server_Cost2;
            FTE_Price=docs[0].FTE_Cost2;
            Total_VM_Price=VM_Count*VM_Price;
            Total_Server_Price=Server_Count*Server_Price;
            Totalof_Total_Infra_Price=Total_VM_Price+Total_Server_Price;

            Dev_Cost2=Total_Dev_Effort*docs[0].Dev_Cost2*168;
            Srdev_Cost2=Total_Srdev_Effort*docs[0].Srdev_Cost2*168;
            BA_Cost2=Total_BA_Effort*docs[0].BA_Cost2*168;
            Arch_Cost2=Total_Arch_Effort*docs[0].Arch_Cost2*168;
            PM_Cost2=Math.round(Total_PM_Effort*docs[0].PM_Cost2*168);
            
            DUlead_Cost2=Total_DM_Effort*docs[0].DUlead_Cost2*168;
            Total_Imp_Cost=Dev_Cost2+Srdev_Cost2+BA_Cost2+Arch_Cost2+PM_Cost2+DUlead_Cost2;
            Total_Imp_Cost_Two=Total_Imp_Cost.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            
           
            console.log(Total_Imp_Cost);
            Maint_Cost=Math.ceil(totalcount/7*30000);
            FTE_Savings_Count=Math.round(simplecount*0.5+mediumcount*1+complexcount*2);
            FTE_Savings_USD=FTE_Price*FTE_Savings_Count;
            Net_Savings=Math.round(FTE_Savings_USD-(Total_Imp_Cost+Totalof_Total_Lisc_Price+Totalof_Total_Infra_Price+Maint_Cost));
            Net_Savings_Two=Math.round(FTE_Savings_USD-(0+Totalof_Total_Lisc_Price+Totalof_Total_Infra_Price+Maint_Cost));
            Total_Net_Savings=Net_Savings+(4*Net_Savings_Two);
            Total_Net_Savings_Two=Total_Net_Savings.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            Total_TCO=Total_Imp_Cost+(5*Totalof_Total_Lisc_Price)+(5*Totalof_Total_Infra_Price)+(5*Maint_Cost);
            Total_TCO_Two=Total_TCO.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            res.render("effortEstimation",
            {Simple_Dev_Effort:Simple_Dev_Effort,
                Total:Total,
                Total_Net_Savings_Two:Total_Net_Savings_Two,
                Total_Imp_Cost_Two:Total_Imp_Cost_Two,
                Total_TCO_Two:Total_TCO_Two,
                Simple:Simple,
                Medium:Medium,
                Complex:Complex,
                rpatool:rpatool,
                pd:pd,
                pid:pid,
                pl:pl,
                BI:BI,
                rx:rx,
                Total_TCO:Total_TCO,
                Simple_Srdev_Effort:Simple_Srdev_Effort,
                Simple_BA_Effort:Simple_BA_Effort,
                Simple_Arch_Effort:Simple_Arch_Effort,
                Simple_PM_Effort:Simple_PM_Effort,
                Simple_DM_Effort:Simple_DM_Effort,
                Total_Simple_Effort:Total_Simple_Effort,

                Medium_Dev_Effort:Medium_Dev_Effort,
                Medium_Srdev_Effort:Medium_Srdev_Effort,
                Medium_BA_Effort:Medium_BA_Effort,
                Medium_Arch_Effort:Medium_Arch_Effort,
                Medium_PM_Effort:Medium_PM_Effort,
                Medium_DM_Effort:Medium_DM_Effort,
                Total_Medium_Effort:Total_Medium_Effort,

                
                Complex_Dev_Effort:Complex_Dev_Effort,
                Complex_Srdev_Effort:Complex_Srdev_Effort,
                Complex_BA_Effort:Complex_BA_Effort,
                Complex_Arch_Effort:Complex_Arch_Effort,
                Complex_PM_Effort:Complex_PM_Effort,
                Complex_DM_Effort:Complex_DM_Effort,
                Total_Complex_Effort:Total_Complex_Effort,


                 Total_Dev_Effort:Total_Dev_Effort,
            Total_Srdev_Effort:Total_Srdev_Effort,
            Total_BA_Effort:Total_BA_Effort,
            Total_Arch_Effort:Total_Arch_Effort,
            Total_PM_Effort:Total_PM_Effort,
            Total_DM_Effort:Total_DM_Effort,
            Total_Of_Total_Effort:Total_Of_Total_Effort,

            Dev_Roundoff:Dev_Roundoff,
            Srdev_Roundoff:Srdev_Roundoff,
            BA_Roundoff:BA_Roundoff,
            
            Arch_Roundoff:Arch_Roundoff,
            PM_Roundoff:PM_Roundoff,
            DM_Roundoff:DM_Roundoff,
            Total_Rounoff:Total_Rounoff,

            Bot_Creator_Count:Bot_Creator_Count,
            Botrunner_Unatt_Count:Botrunner_Unatt_Count,
            Botrunner_Att_Count:Botrunner_Att_Count,
            Controlroom_Count:Controlroom_Count,
            Bot_Creator_Price:Bot_Creator_Price,
            Botrunner_Unatt_Price:Botrunner_Unatt_Price,
            Botrunner_Att_Price:Botrunner_Att_Price,
            Controlroom_Price:Controlroom_Price,
            Total_Bot_Creator_Cost:Total_Bot_Creator_Cost,
            Total_Botrunner_Unatt_Cost:Total_Botrunner_Unatt_Cost,
            Total_Botrunner_Att_Cost:Total_Botrunner_Att_Cost,
            Total_Controlroom_Cost:Total_Controlroom_Cost,
            Totalof_Total_Lisc_Price:Totalof_Total_Lisc_Price,

            VM_Count:VM_Count,
            Server_Count:Server_Count,
            VM_Price:VM_Price,
            Server_Price:Server_Price,
            FTE_Price:FTE_Price,
            Total_VM_Price:Total_VM_Price,
            Total_Server_Price:Total_Server_Price,
            Totalof_Total_Infra_Price:Totalof_Total_Infra_Price,

            Dev_Cost:Dev_Cost2,
            Srdev_Cost:Srdev_Cost2,
            BA_Cost:BA_Cost2,
            Arch_Cost:Arch_Cost2,
            PM_Cost:PM_Cost2,
            DUlead_Cost:DUlead_Cost2,
            Total_Imp_Cost:Total_Imp_Cost,
            Maint_Cost:Maint_Cost,
            FTE_Savings_Count:FTE_Savings_Count,
            FTE_Savings_USD:FTE_Savings_USD,
            Net_Savings:Net_Savings,
            Net_Savings_Two:Net_Savings_Two,
            Total_Net_Savings:Total_Net_Savings,

            
            });
           
            
        }
        else{
            res.send(err)
            console.log(err)
        }
    });




break;

case "Blue Prism":
    ConfigurationDetailsModel4.find((err,docs)=>{
        if(!err)
        {
           console.log("in bp")

         
            console.log(docs)
            Simple=simplecount;
            rx=reg;
            Complex=complexcount;
            Medium=mediumcount;
            Total=totalcount;
            rpatool=rtool;
            pid=processid;
            pd=projectduration;
            BI=businesscaseid;
            pl=processlist;
            Simple_Dev_Effort=docs[0].Simple_Dev3*simplecount;
            Simple_Srdev_Effort=docs[0].Simple_Srdev3*simplecount;
            Simple_BA_Effort=docs[0].Simple_BA3*simplecount;
            Simple_Arch_Effort=docs[0].Simple_Arch3*simplecount;
            Simple_PM_Effort=docs[0].Simple_PM3*simplecount;
            Simple_DM_Effort=docs[0].Simple_DM3*simplecount;
            Total_Simple_Effort=Simple_Dev_Effort+Simple_Srdev_Effort+Simple_BA_Effort+Simple_Arch_Effort+Simple_PM_Effort+Simple_DM_Effort;
            Total_Simple_Effort=Total_Simple_Effort.toFixed(2);
            Total_Simple_Effort=Number(Total_Simple_Effort);

            Medium_Dev_Effort=docs[0].Medium_Dev3*mediumcount;
            Medium_Srdev_Effort=docs[0].Medium_Srdev3*mediumcount;
            Medium_BA_Effort=docs[0].Medium_BA3*mediumcount;
            
            Medium_Arch_Effort=docs[0].Medium_Arch3*mediumcount;
            
            Medium_PM_Effort=docs[0].Medium_PM3*mediumcount;
            Medium_PM_Effort=Math.round(Medium_PM_Effort);
            
            Medium_DM_Effort=docs[0].Medium_DM3*mediumcount;
            Medium_DM_Effort=Math.round(Medium_DM_Effort);
            
            Total_Medium_Effort=Medium_Dev_Effort+Medium_Srdev_Effort+Medium_BA_Effort+Medium_Arch_Effort+Medium_PM_Effort+Medium_DM_Effort;
            Total_Medium_Effort=Total_Medium_Effort.toFixed(2);
            Total_Medium_Effort=Number(Total_Medium_Effort);


            Complex_Dev_Effort=docs[0].Complex_Dev3*complexcount;
            Complex_Srdev_Effort=docs[0].Complex_Srdev3*complexcount;
            Complex_BA_Effort=docs[0].Complex_BA3*complexcount;
            
            Complex_Arch_Effort=docs[0].Complex_Arch3*complexcount;
            
            Complex_PM_Effort=Math.round(docs[0].Complex_PM3*complexcount);
            
            Complex_DM_Effort=Math.round(docs[0].Complex_DM3*complexcount);
            
            Total_Complex_Effort=Complex_Dev_Effort+Complex_Srdev_Effort+Complex_BA_Effort+Complex_Arch_Effort+Complex_PM_Effort+Complex_DM_Effort;
            Total_Complex_Effort=Total_Complex_Effort.toFixed(2);
            Total_Complex_Effort=Number(Total_Complex_Effort);


            Total_Dev_Effort=Simple_Dev_Effort+Medium_Dev_Effort+Complex_Dev_Effort;
            Total_Srdev_Effort=Simple_Srdev_Effort+Medium_Srdev_Effort+Complex_Srdev_Effort;
            Total_BA_Effort=Simple_BA_Effort+Medium_BA_Effort+Complex_BA_Effort;
            Total_BA_Effort=Total_BA_Effort.toFixed(2)
            Total_Arch_Effort=Simple_Arch_Effort+Medium_Arch_Effort+Complex_Arch_Effort;
            Total_Arch_Effort=Total_Arch_Effort.toFixed(2);
            Total_PM_Effort=Simple_PM_Effort+Medium_PM_Effort+Complex_PM_Effort;
            Total_PM_Effort=Total_PM_Effort.toFixed(2);
            Total_DM_Effort=Simple_DM_Effort+Medium_DM_Effort+Complex_DM_Effort;
            Total_DM_Effort=Total_DM_Effort.toFixed(2);
            Total_Of_Total_Effort=Total_Simple_Effort+Total_Medium_Effort+Total_Complex_Effort;
            Total_Of_Total_Effort=Total_Of_Total_Effort.toFixed(2);

            Dev_Roundoff=Math.ceil(Total_Dev_Effort/projectduration);
            Srdev_Roundoff=Math.ceil(Total_Srdev_Effort/projectduration);
            BA_Roundoff=Math.round((Total_BA_Effort/projectduration)*100)/100;
            BA_Roundoff=Math.round((BA_Roundoff)*10)/10;
            BA_Roundoff=BA_Roundoff.toFixed(2);
            Arch_Roundoff=Math.round((Total_Arch_Effort/projectduration)*100)/100;
            Arch_Roundoff=Math.round((Arch_Roundoff)*10)/10;
            Arch_Roundoff=Arch_Roundoff.toFixed(2);
            PM_Roundoff=Math.round((Total_PM_Effort/projectduration)*100)/100;
            PM_Roundoff=Math.round((PM_Roundoff)*10)/10;
            PM_Roundoff=PM_Roundoff.toFixed(2);
            
            DM_Roundoff=Math.round((Total_DM_Effort/projectduration)*100)/100;
           
            DM_Roundoff=Math.round((DM_Roundoff)*10)/10;
            DM_Roundoff=DM_Roundoff.toFixed(2);
            DM_Roundoff=(Total_DM_Effort/projectduration).toFixed(2);
            Total_Rounoff=Total_Of_Total_Effort/projectduration;
            Total_Rounoff=Total_Rounoff.toFixed(2);
            

            Bot_Creator_Count=Dev_Roundoff+Srdev_Roundoff;
            Botrunner_Unatt_Count=totalcount;
            Botrunner_Att_Count=0;
            Controlroom_Count=3;
            Bot_Creator_Price=docs[0].Bot_Creator_Cost3;
            Botrunner_Unatt_Price=docs[0].Bot_Run_Unatt_Cost3;
            Botrunner_Att_Price=docs[0].Bot_Run_Att_Cost3;
            Controlroom_Price=docs[0].Cont_Room_Cost3;
            Total_Bot_Creator_Cost=Bot_Creator_Count*Bot_Creator_Price;
            Total_Botrunner_Unatt_Cost=Botrunner_Unatt_Count*Botrunner_Unatt_Price;
            Total_Botrunner_Att_Cost=Botrunner_Att_Count*Botrunner_Att_Price;
            Total_Controlroom_Cost=Controlroom_Price*Controlroom_Count;
            Totalof_Total_Lisc_Price=Total_Controlroom_Cost+Total_Botrunner_Att_Cost+Total_Botrunner_Unatt_Cost+Total_Bot_Creator_Cost;

            VM_Count=Dev_Roundoff+Srdev_Roundoff;
            Server_Count=3;
            VM_Price=docs[0].VM_Cost3;
            Server_Price=docs[0].Server_Cost3;
            FTE_Price=docs[0].FTE_Cost3;
            Total_VM_Price=VM_Count*VM_Price;
            Total_Server_Price=Server_Count*Server_Price;
            Totalof_Total_Infra_Price=Total_VM_Price+Total_Server_Price;

            Dev_Cost3=Total_Dev_Effort*docs[0].Dev_Cost3*168;
            Srdev_Cost3=Total_Srdev_Effort*docs[0].Srdev_Cost3*168;
            BA_Cost3=Total_BA_Effort*docs[0].BA_Cost3*168;
            Arch_Cost3=Total_Arch_Effort*docs[0].Arch_Cost3*168;
            PM_Cost3=Math.round(Total_PM_Effort*docs[0].PM_Cost3*168);
            
            DUlead_Cost3=Total_DM_Effort*docs[0].DUlead_Cost3*168;
            Total_Imp_Cost=Dev_Cost3+Srdev_Cost3+BA_Cost3+Arch_Cost3+PM_Cost3+DUlead_Cost3;
            Total_Imp_Cost_Two=Total_Imp_Cost.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            
           
            console.log(Total_Imp_Cost);
            Maint_Cost=Math.ceil(totalcount/7*30000);
            FTE_Savings_Count=Math.round(simplecount*0.5+mediumcount*1+complexcount*2);
            FTE_Savings_USD=FTE_Price*FTE_Savings_Count;
            Net_Savings=Math.round(FTE_Savings_USD-(Total_Imp_Cost+Totalof_Total_Lisc_Price+Totalof_Total_Infra_Price+Maint_Cost));
            Net_Savings_Two=Math.round(FTE_Savings_USD-(0+Totalof_Total_Lisc_Price+Totalof_Total_Infra_Price+Maint_Cost));
            Total_Net_Savings=Net_Savings+(4*Net_Savings_Two);
            Total_Net_Savings_Two=Total_Net_Savings.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            Total_TCO=Total_Imp_Cost+(5*Totalof_Total_Lisc_Price)+(5*Totalof_Total_Infra_Price)+(5*Maint_Cost);
            Total_TCO_Two=Total_TCO.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            res.render("effortEstimation",
            {Simple_Dev_Effort:Simple_Dev_Effort,
                Total:Total,
                Total_Net_Savings_Two:Total_Net_Savings_Two,
                Total_Imp_Cost_Two:Total_Imp_Cost_Two,
                Total_TCO_Two:Total_TCO_Two,
                Simple:Simple,
                Medium:Medium,
                Complex:Complex,
                rpatool:rpatool,
                pd:pd,
                pl:pl,
                BI:BI,
                rx:rx,
                pid:pid,
                Total_TCO:Total_TCO,
                Simple_Srdev_Effort:Simple_Srdev_Effort,
                Simple_BA_Effort:Simple_BA_Effort,
                Simple_Arch_Effort:Simple_Arch_Effort,
                Simple_PM_Effort:Simple_PM_Effort,
                Simple_DM_Effort:Simple_DM_Effort,
                Total_Simple_Effort:Total_Simple_Effort,

                Medium_Dev_Effort:Medium_Dev_Effort,
                Medium_Srdev_Effort:Medium_Srdev_Effort,
                Medium_BA_Effort:Medium_BA_Effort,
                Medium_Arch_Effort:Medium_Arch_Effort,
                Medium_PM_Effort:Medium_PM_Effort,
                Medium_DM_Effort:Medium_DM_Effort,
                Total_Medium_Effort:Total_Medium_Effort,

                
                Complex_Dev_Effort:Complex_Dev_Effort,
                Complex_Srdev_Effort:Complex_Srdev_Effort,
                Complex_BA_Effort:Complex_BA_Effort,
                Complex_Arch_Effort:Complex_Arch_Effort,
                Complex_PM_Effort:Complex_PM_Effort,
                Complex_DM_Effort:Complex_DM_Effort,
                Total_Complex_Effort:Total_Complex_Effort,


                 Total_Dev_Effort:Total_Dev_Effort,
            Total_Srdev_Effort:Total_Srdev_Effort,
            Total_BA_Effort:Total_BA_Effort,
            Total_Arch_Effort:Total_Arch_Effort,
            Total_PM_Effort:Total_PM_Effort,
            Total_DM_Effort:Total_DM_Effort,
            Total_Of_Total_Effort:Total_Of_Total_Effort,

            Dev_Roundoff:Dev_Roundoff,
            Srdev_Roundoff:Srdev_Roundoff,
            BA_Roundoff:BA_Roundoff,
            
            Arch_Roundoff:Arch_Roundoff,
            PM_Roundoff:PM_Roundoff,
            DM_Roundoff:DM_Roundoff,
            Total_Rounoff:Total_Rounoff,

            Bot_Creator_Count:Bot_Creator_Count,
            Botrunner_Unatt_Count:Botrunner_Unatt_Count,
            Botrunner_Att_Count:Botrunner_Att_Count,
            Controlroom_Count:Controlroom_Count,
            Bot_Creator_Price:Bot_Creator_Price,
            Botrunner_Unatt_Price:Botrunner_Unatt_Price,
            Botrunner_Att_Price:Botrunner_Att_Price,
            Controlroom_Price:Controlroom_Price,
            Total_Bot_Creator_Cost:Total_Bot_Creator_Cost,
            Total_Botrunner_Unatt_Cost:Total_Botrunner_Unatt_Cost,
            Total_Botrunner_Att_Cost:Total_Botrunner_Att_Cost,
            Total_Controlroom_Cost:Total_Controlroom_Cost,
            Totalof_Total_Lisc_Price:Totalof_Total_Lisc_Price,

            VM_Count:VM_Count,
            Server_Count:Server_Count,
            VM_Price:VM_Price,
            Server_Price:Server_Price,
            FTE_Price:FTE_Price,
            Total_VM_Price:Total_VM_Price,
            Total_Server_Price:Total_Server_Price,
            Totalof_Total_Infra_Price:Totalof_Total_Infra_Price,

            Dev_Cost:Dev_Cost3,
            Srdev_Cost:Srdev_Cost3,
            BA_Cost:BA_Cost3,
            Arch_Cost:Arch_Cost3,
            PM_Cost:PM_Cost3,
            DUlead_Cost:DUlead_Cost3,
            Total_Imp_Cost:Total_Imp_Cost,
            Maint_Cost:Maint_Cost,
            FTE_Savings_Count:FTE_Savings_Count,
            FTE_Savings_USD:FTE_Savings_USD,
            Net_Savings:Net_Savings,
            Net_Savings_Two:Net_Savings_Two,
            Total_Net_Savings:Total_Net_Savings,

            
            });
           
            
        }
        else{
            res.send(err)
            console.log(err)
        }
    });




break;



}

//.................new...........................................................//


// else{
//     // res.send("success")
//     console.log("success")
// }

//...............................................................................//


});









//....................................//

router.post("/effortcalculationtry",(req,res)=>{
    console.log("i am in effortcalculation")
    rtool=req.body.RPA_Tool;
    console.log(rtool)
    projectduration=req.body.Proj_Dura;
    simplecount=req.body.Simple_Count;
    mediumcount=req.body.Medium_Count;
    complexcount=req.body.Complex_Count;
    totalcount=req.body.Total_Count;
    
switch(rtool){
    case "Automation Anywhere":
    ConfigurationDetailsModel.find((err,docs)=>{
        if(!err)
        {
           console.log("in aa")

         
            console.log(docs)
            Simple=simplecount;
            Complex=complexcount;
            Medium=mediumcount;
            Total=totalcount;
            Simple_Dev_Effort=docs[0].Simple_Dev*simplecount;
            Simple_Srdev_Effort=docs[0].Simple_Srdev*simplecount;
            Simple_BA_Effort=docs[0].Simple_BA*simplecount;
            Simple_Arch_Effort=docs[0].Simple_Arch*simplecount;
            Simple_PM_Effort=docs[0].Simple_PM*simplecount;
            Simple_DM_Effort=docs[0].Simple_DM*simplecount;
            Total_Simple_Effort=Simple_Dev_Effort+Simple_Srdev_Effort+Simple_BA_Effort+Simple_Arch_Effort+Simple_PM_Effort+Simple_DM_Effort;
            Total_Simple_Effort=Total_Simple_Effort.toFixed(2);
            Total_Simple_Effort=Number(Total_Simple_Effort);

            Medium_Dev_Effort=docs[0].Medium_Dev*mediumcount;
            Medium_Srdev_Effort=docs[0].Medium_Srdev*mediumcount;
            Medium_BA_Effort=docs[0].Medium_BA*mediumcount;
            
            Medium_Arch_Effort=docs[0].Medium_Arch*mediumcount;
            
            Medium_PM_Effort=docs[0].Medium_PM*mediumcount;
            Medium_PM_Effort=Math.round(Medium_PM_Effort);
            
            Medium_DM_Effort=docs[0].Medium_DM*mediumcount;
            Medium_DM_Effort=Math.round(Medium_DM_Effort);
            
            Total_Medium_Effort=Medium_Dev_Effort+Medium_Srdev_Effort+Medium_BA_Effort+Medium_Arch_Effort+Medium_PM_Effort+Medium_DM_Effort;
            Total_Medium_Effort=Total_Medium_Effort.toFixed(2);
            Total_Medium_Effort=Number(Total_Medium_Effort);


            Complex_Dev_Effort=docs[0].Complex_Dev*complexcount;
            Complex_Srdev_Effort=docs[0].Complex_Srdev*complexcount;
            Complex_BA_Effort=docs[0].Complex_BA*complexcount;
            
            Complex_Arch_Effort=docs[0].Complex_Arch*complexcount;
            
            Complex_PM_Effort=Math.round(docs[0].Complex_PM*complexcount);
           // Complex_PM_Effort= Complex_PM_Effort.toFixed(2);
            Complex_DM_Effort=Math.round(docs[0].Complex_DM*complexcount);
            //Complex_DM_Effort=Complex_DM_Effort.toFixed(2);
            Total_Complex_Effort=Complex_Dev_Effort+Complex_Srdev_Effort+Complex_BA_Effort+Complex_Arch_Effort+Complex_PM_Effort+Complex_DM_Effort;
            Total_Complex_Effort=Total_Complex_Effort.toFixed(2);
            Total_Complex_Effort=Number(Total_Complex_Effort);


            Total_Dev_Effort=Simple_Dev_Effort+Medium_Dev_Effort+Complex_Dev_Effort;
            Total_Srdev_Effort=Simple_Srdev_Effort+Medium_Srdev_Effort+Complex_Srdev_Effort;
            Total_BA_Effort=Simple_BA_Effort+Medium_BA_Effort+Complex_BA_Effort;
            Total_BA_Effort=Total_BA_Effort.toFixed(2)
            Total_Arch_Effort=Simple_Arch_Effort+Medium_Arch_Effort+Complex_Arch_Effort;
            Total_Arch_Effort=Total_Arch_Effort.toFixed(2);
            Total_PM_Effort=Simple_PM_Effort+Medium_PM_Effort+Complex_PM_Effort;
            Total_PM_Effort=Total_PM_Effort.toFixed(2);
            Total_DM_Effort=Simple_DM_Effort+Medium_DM_Effort+Complex_DM_Effort;
            Total_DM_Effort=Total_DM_Effort.toFixed(2);
            Total_Of_Total_Effort=Total_Simple_Effort+Total_Medium_Effort+Total_Complex_Effort;
            Total_Of_Total_Effort=Total_Of_Total_Effort.toFixed(2);

            Dev_Roundoff=Math.ceil(Total_Dev_Effort/projectduration);
            Srdev_Roundoff=Math.ceil(Total_Srdev_Effort/projectduration);
            BA_Roundoff=Math.round((Total_BA_Effort/projectduration)*100)/100;
            BA_Roundoff=Math.round((BA_Roundoff)*10)/10;
            BA_Roundoff=BA_Roundoff.toFixed(2);
            Arch_Roundoff=Math.round((Total_Arch_Effort/projectduration)*100)/100;
            Arch_Roundoff=Math.round((Arch_Roundoff)*10)/10;
            Arch_Roundoff=Arch_Roundoff.toFixed(2);
            PM_Roundoff=Math.round((Total_PM_Effort/projectduration)*100)/100;
            PM_Roundoff=Math.round((PM_Roundoff)*10)/10;
            PM_Roundoff=PM_Roundoff.toFixed(2);
            
            DM_Roundoff=Math.round((Total_DM_Effort/projectduration)*100)/100;
           
            DM_Roundoff=Math.round((DM_Roundoff)*10)/10;
            DM_Roundoff=DM_Roundoff.toFixed(2);
            DM_Roundoff=(Total_DM_Effort/projectduration).toFixed(2);
            Total_Rounoff=Total_Of_Total_Effort/projectduration;
            Total_Rounoff=Total_Rounoff.toFixed(2);
            

            Bot_Creator_Count=Dev_Roundoff+Srdev_Roundoff;
            Botrunner_Unatt_Count=totalcount;
            Botrunner_Att_Count=0;
            Controlroom_Count=1;
            Bot_Creator_Price=docs[0].Bot_Creator_Cost;
            Botrunner_Unatt_Price=docs[0].Bot_Run_Unatt_Cost;
            Botrunner_Att_Price=docs[0].Bot_Run_Att_Cost;
            Controlroom_Price=docs[0].Cont_Room_Cost;
            Total_Bot_Creator_Cost=Bot_Creator_Count*Bot_Creator_Price;
            Total_Botrunner_Unatt_Cost=Botrunner_Unatt_Count*Botrunner_Unatt_Price;
            Total_Botrunner_Att_Cost=Botrunner_Att_Count*Botrunner_Att_Price;
            Total_Controlroom_Cost=Controlroom_Price*Controlroom_Count;
            Totalof_Total_Lisc_Price=Total_Controlroom_Cost+Total_Botrunner_Att_Cost+Total_Botrunner_Unatt_Cost+Total_Bot_Creator_Cost;

            VM_Count=Dev_Roundoff+Srdev_Roundoff;
            Server_Count=1;
            VM_Price=docs[0].VM_Cost;
            Server_Price=docs[0].Server_Cost;
            FTE_Price=docs[0].FTE_Cost;
            Total_VM_Price=VM_Count*VM_Price;
            Total_Server_Price=Server_Count*Server_Price;
            Totalof_Total_Infra_Price=Total_VM_Price+Total_Server_Price;

            Dev_Cost=Total_Dev_Effort*docs[0].Dev_Cost*168;
            Srdev_Cost=Total_Srdev_Effort*docs[0].Srdev_Cost*168;
            BA_Cost=Total_BA_Effort*docs[0].BA_Cost*168;
            Arch_Cost=Total_Arch_Effort*docs[0].Arch_Cost*168;
            PM_Cost=Math.round(Total_PM_Effort*docs[0].PM_Cost*168);
            
            DUlead_Cost=Total_DM_Effort*docs[0].DUlead_Cost*168;
            Total_Imp_Cost=Dev_Cost+Srdev_Cost+BA_Cost+Arch_Cost+PM_Cost+DUlead_Cost;
            Total_Imp_Cost_Two=Total_Imp_Cost.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            
           
            console.log(Total_Imp_Cost);
            Maint_Cost=Math.ceil(totalcount/7*30000);
            FTE_Savings_Count=Math.round(simplecount*0.5+mediumcount*1+complexcount*2);
            FTE_Savings_USD=FTE_Price*FTE_Savings_Count;
            Net_Savings=Math.round(FTE_Savings_USD-(Total_Imp_Cost+Totalof_Total_Lisc_Price+Totalof_Total_Infra_Price+Maint_Cost));
            Net_Savings_Two=Math.round(FTE_Savings_USD-(0+Totalof_Total_Lisc_Price+Totalof_Total_Infra_Price+Maint_Cost));
            Total_Net_Savings=Net_Savings+(4*Net_Savings_Two);
            Total_Net_Savings_Two=Total_Net_Savings.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            Total_TCO=Total_Imp_Cost+(5*Totalof_Total_Lisc_Price)+(5*Totalof_Total_Infra_Price)+(5*Maint_Cost);
            Total_TCO_Two=Total_TCO.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            res.render("effortEstimation AA",
            {Simple_Dev_Effort:Simple_Dev_Effort,
                Total:Total,
                Total_Net_Savings_Two:Total_Net_Savings_Two,
                Total_Imp_Cost_Two:Total_Imp_Cost_Two,
                Total_TCO_Two:Total_TCO_Two,
                Simple:Simple,
                Medium:Medium,
                Complex:Complex,
                Total_TCO:Total_TCO,
                Simple_Srdev_Effort:Simple_Srdev_Effort,
                Simple_BA_Effort:Simple_BA_Effort,
                Simple_Arch_Effort:Simple_Arch_Effort,
                Simple_PM_Effort:Simple_PM_Effort,
                Simple_DM_Effort:Simple_DM_Effort,
                Total_Simple_Effort:Total_Simple_Effort,

                Medium_Dev_Effort:Medium_Dev_Effort,
                Medium_Srdev_Effort:Medium_Srdev_Effort,
                Medium_BA_Effort:Medium_BA_Effort,
                Medium_Arch_Effort:Medium_Arch_Effort,
                Medium_PM_Effort:Medium_PM_Effort,
                Medium_DM_Effort:Medium_DM_Effort,
                Total_Medium_Effort:Total_Medium_Effort,

                
                Complex_Dev_Effort:Complex_Dev_Effort,
                Complex_Srdev_Effort:Complex_Srdev_Effort,
                Complex_BA_Effort:Complex_BA_Effort,
                Complex_Arch_Effort:Complex_Arch_Effort,
                Complex_PM_Effort:Complex_PM_Effort,
                Complex_DM_Effort:Complex_DM_Effort,
                Total_Complex_Effort:Total_Complex_Effort,


                 Total_Dev_Effort:Total_Dev_Effort,
            Total_Srdev_Effort:Total_Srdev_Effort,
            Total_BA_Effort:Total_BA_Effort,
            Total_Arch_Effort:Total_Arch_Effort,
            Total_PM_Effort:Total_PM_Effort,
            Total_DM_Effort:Total_DM_Effort,
            Total_Of_Total_Effort:Total_Of_Total_Effort,

            Dev_Roundoff:Dev_Roundoff,
            Srdev_Roundoff:Srdev_Roundoff,
            BA_Roundoff:BA_Roundoff,
            
            Arch_Roundoff:Arch_Roundoff,
            PM_Roundoff:PM_Roundoff,
            DM_Roundoff:DM_Roundoff,
            Total_Rounoff:Total_Rounoff,

            Bot_Creator_Count:Bot_Creator_Count,
            Botrunner_Unatt_Count:Botrunner_Unatt_Count,
            Botrunner_Att_Count:Botrunner_Att_Count,
            Controlroom_Count:Controlroom_Count,
            Bot_Creator_Price:Bot_Creator_Price,
            Botrunner_Unatt_Price:Botrunner_Unatt_Price,
            Botrunner_Att_Price:Botrunner_Att_Price,
            Controlroom_Price:Controlroom_Price,
            Total_Bot_Creator_Cost:Total_Bot_Creator_Cost,
            Total_Botrunner_Unatt_Cost:Total_Botrunner_Unatt_Cost,
            Total_Botrunner_Att_Cost:Total_Botrunner_Att_Cost,
            Total_Controlroom_Cost:Total_Controlroom_Cost,
            Totalof_Total_Lisc_Price:Totalof_Total_Lisc_Price,

            VM_Count:VM_Count,
            Server_Count:Server_Count,
            VM_Price:VM_Price,
            Server_Price:Server_Price,
            FTE_Price:FTE_Price,
            Total_VM_Price:Total_VM_Price,
            Total_Server_Price:Total_Server_Price,
            Totalof_Total_Infra_Price:Totalof_Total_Infra_Price,

            Dev_Cost:Dev_Cost,
            Srdev_Cost:Srdev_Cost,
            BA_Cost:BA_Cost,
            Arch_Cost:Arch_Cost,
            PM_Cost:PM_Cost,
            DUlead_Cost:DUlead_Cost,
            Total_Imp_Cost:Total_Imp_Cost,
            Maint_Cost:Maint_Cost,
            FTE_Savings_Count:FTE_Savings_Count,
            FTE_Savings_USD:FTE_Savings_USD,
            Net_Savings:Net_Savings,
            Net_Savings_Two:Net_Savings_Two,
            Total_Net_Savings:Total_Net_Savings,

            
            });
           
            
        }
        else{
            res.send(err)
            console.log(err)
        }
    });
break;
//...............................................................//

case "UiPath":
    ConfigurationDetailsModel2.find((err,docs)=>{
        if(!err)
        {
           console.log("in up")

         
            console.log(docs)
            Simple2=simplecount;
            Complex2=complexcount;
            Medium2=mediumcount;
            Total2=totalcount;
            Simple_Dev_Effort2=docs[0].Simple_Dev1*simplecount;
            Simple_Srdev_Effort2=docs[0].Simple_Srdev1*simplecount;
            Simple_BA_Effort2=docs[0].Simple_BA1*simplecount;
            Simple_Arch_Effort2=docs[0].Simple_Arch1*simplecount;
            Simple_PM_Effort2=docs[0].Simple_PM1*simplecount;
            Simple_DM_Effort2=docs[0].Simple_DM1*simplecount;
            Total_Simple_Effort2=Simple_Dev_Effort2+Simple_Srdev_Effort2+Simple_BA_Effort2+Simple_Arch_Effort2+Simple_PM_Effort2+Simple_DM_Effort2;
            Total_Simple_Effort2=Total_Simple_Effort2.toFixed(2);
            Total_Simple_Effort2=Number(Total_Simple_Effort2);

            Medium_Dev_Effort2=docs[0].Medium_Dev1*mediumcount;
            Medium_Srdev_Effort2=docs[0].Medium_Srdev1*mediumcount;
            Medium_BA_Effort2=docs[0].Medium_BA1*mediumcount;
            
            Medium_Arch_Effort2=docs[0].Medium_Arch1*mediumcount;
            
            Medium_PM_Effort2=docs[0].Medium_PM1*mediumcount;
            Medium_PM_Effort2=Math.round(Medium_PM_Effort2);
            
            Medium_DM_Effort2=docs[0].Medium_DM1*mediumcount;
            Medium_DM_Effort2=Math.round(Medium_DM_Effort2);
            
            Total_Medium_Effort2=Medium_Dev_Effort2+Medium_Srdev_Effort2+Medium_BA_Effort2+Medium_Arch_Effort2+Medium_PM_Effort2+Medium_DM_Effort2;
            Total_Medium_Effort2=Total_Medium_Effort2.toFixed(2);
            Total_Medium_Effort2=Number(Total_Medium_Effort2);


            Complex_Dev_Effort2=docs[0].Complex_Dev1*complexcount;
            Complex_Srdev_Effort2=docs[0].Complex_Srdev1*complexcount;
            Complex_BA_Effort2=docs[0].Complex_BA1*complexcount;
            
            Complex_Arch_Effort2=docs[0].Complex_Arch1*complexcount;
            
            Complex_PM_Effort2=Math.round(docs[0].Complex_PM1*complexcount);
            
            Complex_DM_Effort2=Math.round(docs[0].Complex_DM1*complexcount);
            
            Total_Complex_Effort2=Complex_Dev_Effort2+Complex_Srdev_Effort2+Complex_BA_Effort2+Complex_Arch_Effort2+Complex_PM_Effort2+Complex_DM_Effort2;
            Total_Complex_Effort2=Total_Complex_Effort2.toFixed(2);
            Total_Complex_Effort2=Number(Total_Complex_Effort2);


            Total_Dev_Effort2=Simple_Dev_Effort2+Medium_Dev_Effort2+Complex_Dev_Effort2;
            Total_Srdev_Effort2=Simple_Srdev_Effort2+Medium_Srdev_Effort2+Complex_Srdev_Effort2;
            Total_BA_Effort2=Simple_BA_Effort2+Medium_BA_Effort2+Complex_BA_Effort2;
            Total_BA_Effort2=Total_BA_Effort2.toFixed(2)
            Total_Arch_Effort2=Simple_Arch_Effort2+Medium_Arch_Effort2+Complex_Arch_Effort2;
            Total_Arch_Effort2=Total_Arch_Effort2.toFixed(2);
            Total_PM_Effort2=Simple_PM_Effort2+Medium_PM_Effort2+Complex_PM_Effort2;
            Total_PM_Effort2=Total_PM_Effort2.toFixed(2);
            Total_DM_Effort2=Simple_DM_Effort2+Medium_DM_Effort2+Complex_DM_Effort2;
            Total_DM_Effort2=Total_DM_Effort2.toFixed(2);
            Total_Of_Total_Effort2=Total_Simple_Effort2+Total_Medium_Effort2+Total_Complex_Effort2;
            Total_Of_Total_Effort2=Total_Of_Total_Effort2.toFixed(2);

            Dev_Roundoff2=Math.ceil(Total_Dev_Effort2/projectduration);
            Srdev_Roundoff2=Math.ceil(Total_Srdev_Effort2/projectduration);
            BA_Roundoff2=Math.round((Total_BA_Effort2/projectduration)*100)/100;
            BA_Roundoff2=Math.round((BA_Roundoff2)*10)/10;
            BA_Roundoff2=BA_Roundoff2.toFixed(2);
            Arch_Roundoff2=Math.round((Total_Arch_Effort2/projectduration)*100)/100;
            Arch_Roundoff2=Math.round((Arch_Roundoff2)*10)/10;
            Arch_Roundoff2=Arch_Roundoff2.toFixed(2);
            PM_Roundoff2=Math.round((Total_PM_Effort2/projectduration)*100)/100;
            PM_Roundoff2=Math.round((PM_Roundoff2)*10)/10;
            PM_Roundoff2=PM_Roundoff2.toFixed(2);
            
            DM_Roundoff2=Math.round((Total_DM_Effort2/projectduration)*100)/100;
           
            DM_Roundoff2=Math.round((DM_Roundoff2)*10)/10;
            DM_Roundoff2=DM_Roundoff2.toFixed(2);
            DM_Roundoff2=(Total_DM_Effort2/projectduration).toFixed(2);
            Total_Rounoff2=Total_Of_Total_Effort2/projectduration;
            Total_Rounoff2=Total_Rounoff2.toFixed(2);
            

            Bot_Creator_Count2=Dev_Roundoff2+Srdev_Roundoff2;
            Botrunner_Unatt_Count2=totalcount;
            Botrunner_Att_Count2=0;
            Controlroom_Count2=1;
            Bot_Creator_Price2=docs[0].Bot_Creator_Cost1;
            Botrunner_Unatt_Price2=docs[0].Bot_Run_Unatt_Cost1;
            Botrunner_Att_Price2=docs[0].Bot_Run_Att_Cost1;
            Controlroom_Price2=docs[0].Cont_Room_Cost1;
            Total_Bot_Creator_Cost2=Bot_Creator_Count2*Bot_Creator_Price2;
            Total_Botrunner_Unatt_Cost2=Botrunner_Unatt_Count2*Botrunner_Unatt_Price2;
            Total_Botrunner_Att_Cost2=Botrunner_Att_Count2*Botrunner_Att_Price2;
            Total_Controlroom_Cost2=Controlroom_Price2*Controlroom_Count2;
            Totalof_Total_Lisc_Price2=Total_Controlroom_Cost2+Total_Botrunner_Att_Cost2+Total_Botrunner_Unatt_Cost2+Total_Bot_Creator_Cost2;

            VM_Count2=Dev_Roundoff2+Srdev_Roundoff2;
            Server_Count2=1;
            VM_Price2=docs[0].VM_Cost1;
            Server_Price2=docs[0].Server_Cost1;
            FTE_Price2=docs[0].FTE_Cost1;
            Total_VM_Price2=VM_Count2*VM_Price2;
            Total_Server_Price2=Server_Count2*Server_Price2;
            Totalof_Total_Infra_Price2=Total_VM_Price2+Total_Server_Price2;

            Dev_Cost1=Total_Dev_Effort2*docs[0].Dev_Cost1*168;
            console.log("....................................");
            console.log(Dev_Cost1);
            Srdev_Cost1=Total_Srdev_Effort2*docs[0].Srdev_Cost1*168;
            BA_Cost1=Total_BA_Effort2*docs[0].BA_Cost1*168;
            Arch_Cost1=Total_Arch_Effort2*docs[0].Arch_Cost1*168;
            PM_Cost1=Math.round(Total_PM_Effort2*docs[0].PM_Cost1*168);
            
            DUlead_Cost1=Total_DM_Effort2*docs[0].DUlead_Cost1*168;
            Total_Imp_Cost2=Dev_Cost1+Srdev_Cost1+BA_Cost1+Arch_Cost1+PM_Cost1+DUlead_Cost1;
            Total_Imp_Cost_Two2=Total_Imp_Cost2.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            
           
            console.log(Total_Imp_Cost2);
            Maint_Cost2=Math.ceil(totalcount/7*30000);
            FTE_Savings_Count2=Math.round(simplecount*0.5+mediumcount*1+complexcount*2);
            FTE_Savings_USD2=FTE_Price2*FTE_Savings_Count2;
            Net_Savings2=Math.round(FTE_Savings_USD2-(Total_Imp_Cost2+Totalof_Total_Lisc_Price2+Totalof_Total_Infra_Price2+Maint_Cost2));
            Net_Savings_Two2=Math.round(FTE_Savings_USD2-(0+Totalof_Total_Lisc_Price2+Totalof_Total_Infra_Price2+Maint_Cost2));
            Total_Net_Savings2=Net_Savings2+(4*Net_Savings_Two2);
            Total_Net_Savings_Two2=Total_Net_Savings2.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            Total_TCO2=Total_Imp_Cost2+(5*Totalof_Total_Lisc_Price2)+(5*Totalof_Total_Infra_Price2)+(5*Maint_Cost2);
            Total_TCO_Two2=Total_TCO2.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            res.render("effortEstimation UI",
            {Simple_Dev_Effort2:Simple_Dev_Effort2,
                Total2:Total2,
                Total_Net_Savings_Two2:Total_Net_Savings_Two2,
                Total_Imp_Cost_Two2:Total_Imp_Cost_Two2,
                Total_TCO_Two2:Total_TCO_Two2,
                Simple2:Simple2,
                Medium2:Medium2,
                Complex2:Complex2,
                Total_TCO2:Total_TCO2,
                Simple_Srdev_Effort2:Simple_Srdev_Effort2,
                Simple_BA_Effort2:Simple_BA_Effort2,
                Simple_Arch_Effort2:Simple_Arch_Effort2,
                Simple_PM_Effort2:Simple_PM_Effort2,
                Simple_DM_Effort2:Simple_DM_Effort2,
                Total_Simple_Effort2:Total_Simple_Effort2,

                Medium_Dev_Effort2:Medium_Dev_Effort2,
                Medium_Srdev_Effort2:Medium_Srdev_Effort2,
                Medium_BA_Effort2:Medium_BA_Effort2,
                Medium_Arch_Effort2:Medium_Arch_Effort2,
                Medium_PM_Effort2:Medium_PM_Effort2,
                Medium_DM_Effort2:Medium_DM_Effort2,
                Total_Medium_Effort2:Total_Medium_Effort2,

                
                Complex_Dev_Effort2:Complex_Dev_Effort2,
                Complex_Srdev_Effort2:Complex_Srdev_Effort2,
                Complex_BA_Effort2:Complex_BA_Effort2,
                Complex_Arch_Effort2:Complex_Arch_Effort2,
                Complex_PM_Effort2:Complex_PM_Effort2,
                Complex_DM_Effort2:Complex_DM_Effort2,
                Total_Complex_Effort2:Total_Complex_Effort2,


                 Total_Dev_Effort2:Total_Dev_Effort2,
            Total_Srdev_Effort2:Total_Srdev_Effort2,
            Total_BA_Effort2:Total_BA_Effort2,
            Total_Arch_Effort2:Total_Arch_Effort2,
            Total_PM_Effort2:Total_PM_Effort2,
            Total_DM_Effort2:Total_DM_Effort2,
            Total_Of_Total_Effort2:Total_Of_Total_Effort2,

            Dev_Roundoff2:Dev_Roundoff2,
            Srdev_Roundoff2:Srdev_Roundoff2,
            BA_Roundoff2:BA_Roundoff2,
            
            Arch_Roundoff2:Arch_Roundoff2,
            PM_Roundoff2:PM_Roundoff2,
            DM_Roundoff2:DM_Roundoff2,
            Total_Rounoff2:Total_Rounoff2,

            Bot_Creator_Count2:Bot_Creator_Count2,
            Botrunner_Unatt_Count2:Botrunner_Unatt_Count2,
            Botrunner_Att_Count2:Botrunner_Att_Count2,
            Controlroom_Count2:Controlroom_Count2,
            Bot_Creator_Price2:Bot_Creator_Price2,
            Botrunner_Unatt_Price2:Botrunner_Unatt_Price2,
            Botrunner_Att_Price2:Botrunner_Att_Price2,
            Controlroom_Price2:Controlroom_Price2,
            Total_Bot_Creator_Cost2:Total_Bot_Creator_Cost2,
            Total_Botrunner_Unatt_Cost2:Total_Botrunner_Unatt_Cost2,
            Total_Botrunner_Att_Cost2:Total_Botrunner_Att_Cost2,
            Total_Controlroom_Cost2:Total_Controlroom_Cost2,
            Totalof_Total_Lisc_Price2:Totalof_Total_Lisc_Price2,

            VM_Count2:VM_Count2,
            Server_Count2:Server_Count2,
            VM_Price2:VM_Price2,
            Server_Price2:Server_Price2,
            FTE_Price2:FTE_Price2,
            Total_VM_Price2:Total_VM_Price2,
            Total_Server_Price2:Total_Server_Price2,
            Totalof_Total_Infra_Price2:Totalof_Total_Infra_Price2,

            Dev_Cost1:Dev_Cost1,
            Srdev_Cost1:Srdev_Cost1,
            BA_Cost1:BA_Cost1,
            Arch_Cost1:Arch_Cost1,
            PM_Cost1:PM_Cost1,
            DUlead_Cost1:DUlead_Cost1,
            Total_Imp_Cost2:Total_Imp_Cost2,
            Maint_Cost2:Maint_Cost2,
            FTE_Savings_Count2:FTE_Savings_Count2,
            FTE_Savings_USD2:FTE_Savings_USD2,
            Net_Savings2:Net_Savings2,
            Net_Savings_Two2:Net_Savings_Two2,
            Total_Net_Savings2:Total_Net_Savings2,

            
            });
           
            
        }
        else{
            res.send(err)
            console.log(err)
        }
    });




break;

case "Pega Robotics":
    ConfigurationDetailsModel3.find((err,docs)=>{
        if(!err)
        {
           console.log("in pr")

         
            console.log(docs)
            Simple3=simplecount;
            Complex3=complexcount;
            Medium3=mediumcount;
            Total3=totalcount;
            Simple_Dev_Effort3=docs[0].Simple_Dev2*simplecount;
            Simple_Srdev_Effort3=docs[0].Simple_Srdev2*simplecount;
            Simple_BA_Effort3=docs[0].Simple_BA2*simplecount;
            Simple_Arch_Effort3=docs[0].Simple_Arch2*simplecount;
            Simple_PM_Effort3=docs[0].Simple_PM2*simplecount;
            Simple_DM_Effort3=docs[0].Simple_DM2*simplecount;
            Total_Simple_Effort3=Simple_Dev_Effort3+Simple_Srdev_Effort3+Simple_BA_Effort3+Simple_Arch_Effort3+Simple_PM_Effort3+Simple_DM_Effort3;
            Total_Simple_Effort3=Total_Simple_Effort3.toFixed(2);
            Total_Simple_Effort3=Number(Total_Simple_Effort3);

            Medium_Dev_Effort3=docs[0].Medium_Dev2*mediumcount;
            Medium_Srdev_Effort3=docs[0].Medium_Srdev2*mediumcount;
            Medium_BA_Effort3=docs[0].Medium_BA2*mediumcount;
            
            Medium_Arch_Effort3=docs[0].Medium_Arch2*mediumcount;
            
            Medium_PM_Effort3=docs[0].Medium_PM2*mediumcount;
            Medium_PM_Effort3=Math.round(Medium_PM_Effort3);
            
            Medium_DM_Effort3=docs[0].Medium_DM2*mediumcount;
            Medium_DM_Effort3=Math.round(Medium_DM_Effort3);
            
            Total_Medium_Effort3=Medium_Dev_Effort3+Medium_Srdev_Effort3+Medium_BA_Effort3+Medium_Arch_Effort3+Medium_PM_Effort3+Medium_DM_Effort3;
            Total_Medium_Effort3=Total_Medium_Effort3.toFixed(2);
            Total_Medium_Effort3=Number(Total_Medium_Effort3);


            Complex_Dev_Effort3=docs[0].Complex_Dev2*complexcount;
            Complex_Srdev_Effort3=docs[0].Complex_Srdev2*complexcount;
            Complex_BA_Effort3=docs[0].Complex_BA2*complexcount;
            
            Complex_Arch_Effort3=docs[0].Complex_Arch2*complexcount;
            
            Complex_PM_Effort3=Math.round(docs[0].Complex_PM2*complexcount);
            
            Complex_DM_Effort3=Math.round(docs[0].Complex_DM2*complexcount);
            
            Total_Complex_Effort3=Complex_Dev_Effort3+Complex_Srdev_Effort3+Complex_BA_Effort3+Complex_Arch_Effort3+Complex_PM_Effort3+Complex_DM_Effort3;
            Total_Complex_Effort3=Total_Complex_Effort3.toFixed(2);
            Total_Complex_Effort3=Number(Total_Complex_Effort3);


            Total_Dev_Effort3=Simple_Dev_Effort3+Medium_Dev_Effort3+Complex_Dev_Effort3;
            Total_Srdev_Effort3=Simple_Srdev_Effort3+Medium_Srdev_Effort3+Complex_Srdev_Effort3;
            Total_BA_Effort3=Simple_BA_Effort3+Medium_BA_Effort3+Complex_BA_Effort3;
            Total_BA_Effort3=Total_BA_Effort3.toFixed(2)
            Total_Arch_Effort3=Simple_Arch_Effort3+Medium_Arch_Effort3+Complex_Arch_Effort3;
            Total_Arch_Effort3=Total_Arch_Effort3.toFixed(2);
            Total_PM_Effort3=Simple_PM_Effort3+Medium_PM_Effort3+Complex_PM_Effort3;
            Total_PM_Effort3=Total_PM_Effort3.toFixed(2);
            Total_DM_Effort3=Simple_DM_Effort3+Medium_DM_Effort3+Complex_DM_Effort3;
            Total_DM_Effort3=Total_DM_Effort3.toFixed(2);
            Total_Of_Total_Effort3=Total_Simple_Effort3+Total_Medium_Effort3+Total_Complex_Effort3;
            Total_Of_Total_Effort3=Total_Of_Total_Effort3.toFixed(2);

            Dev_Roundoff3=Math.ceil(Total_Dev_Effort3/projectduration);
            Srdev_Roundoff3=Math.ceil(Total_Srdev_Effort3/projectduration);
            BA_Roundoff3=Math.round((Total_BA_Effort3/projectduration)*200)/200;
            BA_Roundoff3=Math.round((BA_Roundoff3)*20)/20;
            BA_Roundoff3=BA_Roundoff3.toFixed(2);
            Arch_Roundoff3=Math.round((Total_Arch_Effort3/projectduration)*200)/200;
            Arch_Roundoff3=Math.round((Arch_Roundoff3)*20)/20;
            Arch_Roundoff3=Arch_Roundoff3.toFixed(2);
            PM_Roundoff3=Math.round((Total_PM_Effort3/projectduration)*200)/200;
            PM_Roundoff3=Math.round((PM_Roundoff3)*20)/20;
            PM_Roundoff3=PM_Roundoff3.toFixed(2);
            
            DM_Roundoff3=Math.round((Total_DM_Effort3/projectduration)*200)/200;
           
            DM_Roundoff3=Math.round((DM_Roundoff3)*20)/20;
            DM_Roundoff3=DM_Roundoff3.toFixed(2);
            DM_Roundoff3=(Total_DM_Effort3/projectduration).toFixed(2);
            Total_Rounoff3=Total_Of_Total_Effort3/projectduration;
            Total_Rounoff3=Total_Rounoff3.toFixed(2);
            

            Bot_Creator_Count3=Dev_Roundoff3+Srdev_Roundoff3;
            Botrunner_Unatt_Count3=totalcount;
            Botrunner_Att_Count3=0;
            Controlroom_Count3=2;
            Bot_Creator_Price3=docs[0].Bot_Creator_Cost2;
            Botrunner_Unatt_Price3=docs[0].Bot_Run_Unatt_Cost2;
            Botrunner_Att_Price3=docs[0].Bot_Run_Att_Cost2;
            Controlroom_Price3=docs[0].Cont_Room_Cost2;
            Total_Bot_Creator_Cost3=Bot_Creator_Count3*Bot_Creator_Price3;
            Total_Botrunner_Unatt_Cost3=Botrunner_Unatt_Count3*Botrunner_Unatt_Price3;
            Total_Botrunner_Att_Cost3=Botrunner_Att_Count3*Botrunner_Att_Price3;
            Total_Controlroom_Cost3=Controlroom_Price3*Controlroom_Count3;
            Totalof_Total_Lisc_Price3=Total_Controlroom_Cost3+Total_Botrunner_Att_Cost3+Total_Botrunner_Unatt_Cost3+Total_Bot_Creator_Cost3;

            VM_Count3=Dev_Roundoff3+Srdev_Roundoff3;
            Server_Count3=2;
            VM_Price3=docs[0].VM_Cost2;
            Server_Price3=docs[0].Server_Cost2;
            FTE_Price3=docs[0].FTE_Cost2;
            Total_VM_Price3=VM_Count3*VM_Price3;
            Total_Server_Price3=Server_Count3*Server_Price3;
            Totalof_Total_Infra_Price3=Total_VM_Price3+Total_Server_Price3;

            Dev_Cost2=Total_Dev_Effort3*docs[0].Dev_Cost2*268;
            Srdev_Cost2=Total_Srdev_Effort3*docs[0].Srdev_Cost2*268;
            BA_Cost2=Total_BA_Effort3*docs[0].BA_Cost2*268;
            Arch_Cost2=Total_Arch_Effort3*docs[0].Arch_Cost2*268;
            PM_Cost2=Math.round(Total_PM_Effort3*docs[0].PM_Cost2*268);
            
            DUlead_Cost2=Total_DM_Effort3*docs[0].DUlead_Cost2*268;
            Total_Imp_Cost3=Dev_Cost2+Srdev_Cost2+BA_Cost2+Arch_Cost2+PM_Cost2+DUlead_Cost2;
            Total_Imp_Cost_Two3=Total_Imp_Cost3.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            
           
            console.log(Total_Imp_Cost3);
            Maint_Cost3=Math.ceil(totalcount/7*30000);
            FTE_Savings_Count3=Math.round(simplecount*0.5+mediumcount*2+complexcount*3);
            FTE_Savings_USD3=FTE_Price3*FTE_Savings_Count3;
            Net_Savings3=Math.round(FTE_Savings_USD3-(Total_Imp_Cost3+Totalof_Total_Lisc_Price3+Totalof_Total_Infra_Price3+Maint_Cost3));
            Net_Savings_Two3=Math.round(FTE_Savings_USD3-(0+Totalof_Total_Lisc_Price3+Totalof_Total_Infra_Price3+Maint_Cost3));
            Total_Net_Savings3=Net_Savings3+(4*Net_Savings_Two3);
            Total_Net_Savings_Two3=Total_Net_Savings3.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            Total_TCO3=Total_Imp_Cost3+(5*Totalof_Total_Lisc_Price3)+(5*Totalof_Total_Infra_Price3)+(5*Maint_Cost3);
            Total_TCO_Two3=Total_TCO3.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            res.render("effortEstimation PR",
            {Simple_Dev_Effort3:Simple_Dev_Effort3,
                Total3:Total3,
                Total_Net_Savings_Two3:Total_Net_Savings_Two3,
                Total_Imp_Cost_Two3:Total_Imp_Cost_Two3,
                Total_TCO_Two3:Total_TCO_Two3,
                Simple3:Simple3,
                Medium3:Medium3,
                Complex3:Complex3,
                Total_TCO3:Total_TCO3,
                Simple_Srdev_Effort3:Simple_Srdev_Effort3,
                Simple_BA_Effort3:Simple_BA_Effort3,
                Simple_Arch_Effort3:Simple_Arch_Effort3,
                Simple_PM_Effort3:Simple_PM_Effort3,
                Simple_DM_Effort3:Simple_DM_Effort3,
                Total_Simple_Effort3:Total_Simple_Effort3,

                Medium_Dev_Effort3:Medium_Dev_Effort3,
                Medium_Srdev_Effort3:Medium_Srdev_Effort3,
                Medium_BA_Effort3:Medium_BA_Effort3,
                Medium_Arch_Effort3:Medium_Arch_Effort3,
                Medium_PM_Effort3:Medium_PM_Effort3,
                Medium_DM_Effort3:Medium_DM_Effort3,
                Total_Medium_Effort3:Total_Medium_Effort3,

                
                Complex_Dev_Effort3:Complex_Dev_Effort3,
                Complex_Srdev_Effort3:Complex_Srdev_Effort3,
                Complex_BA_Effort3:Complex_BA_Effort3,
                Complex_Arch_Effort3:Complex_Arch_Effort3,
                Complex_PM_Effort3:Complex_PM_Effort3,
                Complex_DM_Effort3:Complex_DM_Effort3,
                Total_Complex_Effort3:Total_Complex_Effort3,


                 Total_Dev_Effort3:Total_Dev_Effort3,
            Total_Srdev_Effort3:Total_Srdev_Effort3,
            Total_BA_Effort3:Total_BA_Effort3,
            Total_Arch_Effort3:Total_Arch_Effort3,
            Total_PM_Effort3:Total_PM_Effort3,
            Total_DM_Effort3:Total_DM_Effort3,
            Total_Of_Total_Effort3:Total_Of_Total_Effort3,

            Dev_Roundoff3:Dev_Roundoff3,
            Srdev_Roundoff3:Srdev_Roundoff3,
            BA_Roundoff3:BA_Roundoff3,
            
            Arch_Roundoff3:Arch_Roundoff3,
            PM_Roundoff3:PM_Roundoff3,
            DM_Roundoff3:DM_Roundoff3,
            Total_Rounoff3:Total_Rounoff3,

            Bot_Creator_Count3:Bot_Creator_Count3,
            Botrunner_Unatt_Count3:Botrunner_Unatt_Count3,
            Botrunner_Att_Count3:Botrunner_Att_Count3,
            Controlroom_Count3:Controlroom_Count3,
            Bot_Creator_Price3:Bot_Creator_Price3,
            Botrunner_Unatt_Price3:Botrunner_Unatt_Price3,
            Botrunner_Att_Price3:Botrunner_Att_Price3,
            Controlroom_Price3:Controlroom_Price3,
            Total_Bot_Creator_Cost3:Total_Bot_Creator_Cost3,
            Total_Botrunner_Unatt_Cost3:Total_Botrunner_Unatt_Cost3,
            Total_Botrunner_Att_Cost3:Total_Botrunner_Att_Cost3,
            Total_Controlroom_Cost3:Total_Controlroom_Cost3,
            Totalof_Total_Lisc_Price3:Totalof_Total_Lisc_Price3,

            VM_Count3:VM_Count3,
            Server_Count3:Server_Count3,
            VM_Price3:VM_Price3,
            Server_Price3:Server_Price3,
            FTE_Price3:FTE_Price3,
            Total_VM_Price3:Total_VM_Price3,
            Total_Server_Price3:Total_Server_Price3,
            Totalof_Total_Infra_Price3:Totalof_Total_Infra_Price3,

            Dev_Cost2:Dev_Cost2,
            Srdev_Cost2:Srdev_Cost2,
            BA_Cost2:BA_Cost2,
            Arch_Cost2:Arch_Cost2,
            PM_Cost2:PM_Cost2,
            DUlead_Cost2:DUlead_Cost2,
            Total_Imp_Cost3:Total_Imp_Cost3,
            Maint_Cost3:Maint_Cost3,
            FTE_Savings_Count3:FTE_Savings_Count3,
            FTE_Savings_USD3:FTE_Savings_USD3,
            Net_Savings3:Net_Savings3,
            Net_Savings_Two3:Net_Savings_Two3,
            Total_Net_Savings3:Total_Net_Savings3,

            
            });
           
            
        }
        else{
            res.send(err)
            console.log(err)
        }
    });




break;

case "Blue Prism":
    ConfigurationDetailsModel4.find((err,docs)=>{
        if(!err)
        {
           console.log("in bp")

         
            console.log(docs)
            Simple4=simplecount;
            Complex4=complexcount;
            Medium4=mediumcount;
            Total4=totalcount;
            Simple_Dev_Effort4=docs[0].Simple_Dev3*simplecount;
            Simple_Srdev_Effort4=docs[0].Simple_Srdev3*simplecount;
            Simple_BA_Effort4=docs[0].Simple_BA3*simplecount;
            Simple_Arch_Effort4=docs[0].Simple_Arch3*simplecount;
            Simple_PM_Effort4=docs[0].Simple_PM3*simplecount;
            Simple_DM_Effort4=docs[0].Simple_DM3*simplecount;
            Total_Simple_Effort4=Simple_Dev_Effort4+Simple_Srdev_Effort4+Simple_BA_Effort4+Simple_Arch_Effort4+Simple_PM_Effort4+Simple_DM_Effort4;
            Total_Simple_Effort4=Total_Simple_Effort4.toFixed(2);
            Total_Simple_Effort4=Number(Total_Simple_Effort4);

            Medium_Dev_Effort4=docs[0].Medium_Dev3*mediumcount;
            Medium_Srdev_Effort4=docs[0].Medium_Srdev3*mediumcount;
            Medium_BA_Effort4=docs[0].Medium_BA3*mediumcount;
            
            Medium_Arch_Effort4=docs[0].Medium_Arch3*mediumcount;
            
            Medium_PM_Effort4=docs[0].Medium_PM3*mediumcount;
            Medium_PM_Effort4=Math.round(Medium_PM_Effort4);
            
            Medium_DM_Effort4=docs[0].Medium_DM3*mediumcount;
            Medium_DM_Effort4=Math.round(Medium_DM_Effort4);
            
            Total_Medium_Effort4=Medium_Dev_Effort4+Medium_Srdev_Effort4+Medium_BA_Effort4+Medium_Arch_Effort4+Medium_PM_Effort4+Medium_DM_Effort4;
            Total_Medium_Effort4=Total_Medium_Effort4.toFixed(2);
            Total_Medium_Effort4=Number(Total_Medium_Effort4);


            Complex_Dev_Effort4=docs[0].Complex_Dev3*complexcount;
            Complex_Srdev_Effort4=docs[0].Complex_Srdev3*complexcount;
            Complex_BA_Effort4=docs[0].Complex_BA3*complexcount;
            
            Complex_Arch_Effort4=docs[0].Complex_Arch3*complexcount;
            
            Complex_PM_Effort4=Math.round(docs[0].Complex_PM3*complexcount);
            
            Complex_DM_Effort4=Math.round(docs[0].Complex_DM3*complexcount);
            
            Total_Complex_Effort4=Complex_Dev_Effort4+Complex_Srdev_Effort4+Complex_BA_Effort4+Complex_Arch_Effort4+Complex_PM_Effort4+Complex_DM_Effort4;
            Total_Complex_Effort4=Total_Complex_Effort4.toFixed(2);
            Total_Complex_Effort4=Number(Total_Complex_Effort4);


            Total_Dev_Effort4=Simple_Dev_Effort4+Medium_Dev_Effort4+Complex_Dev_Effort4;
            Total_Srdev_Effort4=Simple_Srdev_Effort4+Medium_Srdev_Effort4+Complex_Srdev_Effort4;
            Total_BA_Effort4=Simple_BA_Effort4+Medium_BA_Effort4+Complex_BA_Effort4;
            Total_BA_Effort4=Total_BA_Effort4.toFixed(2)
            Total_Arch_Effort4=Simple_Arch_Effort4+Medium_Arch_Effort4+Complex_Arch_Effort4;
            Total_Arch_Effort4=Total_Arch_Effort4.toFixed(2);
            Total_PM_Effort4=Simple_PM_Effort4+Medium_PM_Effort4+Complex_PM_Effort4;
            Total_PM_Effort4=Total_PM_Effort4.toFixed(2);
            Total_DM_Effort4=Simple_DM_Effort4+Medium_DM_Effort4+Complex_DM_Effort4;
            Total_DM_Effort4=Total_DM_Effort4.toFixed(2);
            Total_Of_Total_Effort4=Total_Simple_Effort4+Total_Medium_Effort4+Total_Complex_Effort4;
            Total_Of_Total_Effort4=Total_Of_Total_Effort4.toFixed(2);

            Dev_Roundoff4=Math.ceil(Total_Dev_Effort4/projectduration);
            Srdev_Roundoff4=Math.ceil(Total_Srdev_Effort4/projectduration);
            BA_Roundoff4=Math.round((Total_BA_Effort4/projectduration)*300)/300;
            BA_Roundoff4=Math.round((BA_Roundoff4)*30)/30;
            BA_Roundoff4=BA_Roundoff4.toFixed(2);
            Arch_Roundoff4=Math.round((Total_Arch_Effort4/projectduration)*300)/300;
            Arch_Roundoff4=Math.round((Arch_Roundoff4)*30)/30;
            Arch_Roundoff4=Arch_Roundoff4.toFixed(2);
            PM_Roundoff4=Math.round((Total_PM_Effort4/projectduration)*300)/300;
            PM_Roundoff4=Math.round((PM_Roundoff4)*30)/30;
            PM_Roundoff4=PM_Roundoff4.toFixed(2);
            
            DM_Roundoff4=Math.round((Total_DM_Effort4/projectduration)*300)/300;
           
            DM_Roundoff4=Math.round((DM_Roundoff4)*30)/30;
            DM_Roundoff4=DM_Roundoff4.toFixed(2);
            DM_Roundoff4=(Total_DM_Effort4/projectduration).toFixed(2);
            Total_Rounoff4=Total_Of_Total_Effort4/projectduration;
            Total_Rounoff4=Total_Rounoff4.toFixed(2);
            

            Bot_Creator_Count4=Dev_Roundoff4+Srdev_Roundoff4;
            Botrunner_Unatt_Count4=totalcount;
            Botrunner_Att_Count4=0;
            Controlroom_Count4=3;
            Bot_Creator_Price4=docs[0].Bot_Creator_Cost3;
            Botrunner_Unatt_Price4=docs[0].Bot_Run_Unatt_Cost3;
            Botrunner_Att_Price4=docs[0].Bot_Run_Att_Cost3;
            Controlroom_Price4=docs[0].Cont_Room_Cost3;
            Total_Bot_Creator_Cost4=Bot_Creator_Count4*Bot_Creator_Price4;
            Total_Botrunner_Unatt_Cost4=Botrunner_Unatt_Count4*Botrunner_Unatt_Price4;
            Total_Botrunner_Att_Cost4=Botrunner_Att_Count4*Botrunner_Att_Price4;
            Total_Controlroom_Cost4=Controlroom_Price4*Controlroom_Count4;
            Totalof_Total_Lisc_Price4=Total_Controlroom_Cost4+Total_Botrunner_Att_Cost4+Total_Botrunner_Unatt_Cost4+Total_Bot_Creator_Cost4;

            VM_Count4=Dev_Roundoff4+Srdev_Roundoff4;
            Server_Count4=3;
            VM_Price4=docs[0].VM_Cost3;
            Server_Price4=docs[0].Server_Cost3;
            FTE_Price4=docs[0].FTE_Cost3;
            Total_VM_Price4=VM_Count4*VM_Price4;
            Total_Server_Price4=Server_Count4*Server_Price4;
            Totalof_Total_Infra_Price4=Total_VM_Price4+Total_Server_Price4;

            Dev_Cost3=Total_Dev_Effort4*docs[0].Dev_Cost3*368;
            Srdev_Cost3=Total_Srdev_Effort4*docs[0].Srdev_Cost3*368;
            BA_Cost3=Total_BA_Effort4*docs[0].BA_Cost3*368;
            Arch_Cost3=Total_Arch_Effort4*docs[0].Arch_Cost3*368;
            PM_Cost3=Math.round(Total_PM_Effort4*docs[0].PM_Cost3*368);
            
            DUlead_Cost3=Total_DM_Effort4*docs[0].DUlead_Cost3*368;
            Total_Imp_Cost4=Dev_Cost3+Srdev_Cost3+BA_Cost3+Arch_Cost3+PM_Cost3+DUlead_Cost3;
            Total_Imp_Cost_Two4=Total_Imp_Cost4.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            
           
            console.log(Total_Imp_Cost4);
            Maint_Cost4=Math.ceil(totalcount/7*40000);
            FTE_Savings_Count4=Math.round(simplecount*0.5+mediumcount*3+complexcount*4);
            FTE_Savings_USD4=FTE_Price4*FTE_Savings_Count4;
            Net_Savings4=Math.round(FTE_Savings_USD4-(Total_Imp_Cost4+Totalof_Total_Lisc_Price4+Totalof_Total_Infra_Price4+Maint_Cost4));
            Net_Savings_Two4=Math.round(FTE_Savings_USD4-(0+Totalof_Total_Lisc_Price4+Totalof_Total_Infra_Price4+Maint_Cost4));
            Total_Net_Savings4=Net_Savings4+(4*Net_Savings_Two4);
            Total_Net_Savings_Two4=Total_Net_Savings4.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            Total_TCO4=Total_Imp_Cost4+(5*Totalof_Total_Lisc_Price4)+(5*Totalof_Total_Infra_Price4)+(5*Maint_Cost4);
            Total_TCO_Two4=Total_TCO4.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            res.render("effortEstimation BP",
            {Simple_Dev_Effort4:Simple_Dev_Effort4,
                Total4:Total4,
                Total_Net_Savings_Two4:Total_Net_Savings_Two4,
                Total_Imp_Cost_Two4:Total_Imp_Cost_Two4,
                Total_TCO_Two4:Total_TCO_Two4,
                Simple4:Simple4,
                Medium4:Medium4,
                Complex4:Complex4,
                Total_TCO4:Total_TCO4,
                Simple_Srdev_Effort4:Simple_Srdev_Effort4,
                Simple_BA_Effort4:Simple_BA_Effort4,
                Simple_Arch_Effort4:Simple_Arch_Effort4,
                Simple_PM_Effort4:Simple_PM_Effort4,
                Simple_DM_Effort4:Simple_DM_Effort4,
                Total_Simple_Effort4:Total_Simple_Effort4,

                Medium_Dev_Effort4:Medium_Dev_Effort4,
                Medium_Srdev_Effort4:Medium_Srdev_Effort4,
                Medium_BA_Effort4:Medium_BA_Effort4,
                Medium_Arch_Effort4:Medium_Arch_Effort4,
                Medium_PM_Effort4:Medium_PM_Effort4,
                Medium_DM_Effort4:Medium_DM_Effort4,
                Total_Medium_Effort4:Total_Medium_Effort4,

                
                Complex_Dev_Effort4:Complex_Dev_Effort4,
                Complex_Srdev_Effort4:Complex_Srdev_Effort4,
                Complex_BA_Effort4:Complex_BA_Effort4,
                Complex_Arch_Effort4:Complex_Arch_Effort4,
                Complex_PM_Effort4:Complex_PM_Effort4,
                Complex_DM_Effort4:Complex_DM_Effort4,
                Total_Complex_Effort4:Total_Complex_Effort4,


                 Total_Dev_Effort4:Total_Dev_Effort4,
            Total_Srdev_Effort4:Total_Srdev_Effort4,
            Total_BA_Effort4:Total_BA_Effort4,
            Total_Arch_Effort4:Total_Arch_Effort4,
            Total_PM_Effort4:Total_PM_Effort4,
            Total_DM_Effort4:Total_DM_Effort4,
            Total_Of_Total_Effort4:Total_Of_Total_Effort4,

            Dev_Roundoff4:Dev_Roundoff4,
            Srdev_Roundoff4:Srdev_Roundoff4,
            BA_Roundoff4:BA_Roundoff4,
            
            Arch_Roundoff4:Arch_Roundoff4,
            PM_Roundoff4:PM_Roundoff4,
            DM_Roundoff4:DM_Roundoff4,
            Total_Rounoff4:Total_Rounoff4,

            Bot_Creator_Count4:Bot_Creator_Count4,
            Botrunner_Unatt_Count4:Botrunner_Unatt_Count4,
            Botrunner_Att_Count4:Botrunner_Att_Count4,
            Controlroom_Count4:Controlroom_Count4,
            Bot_Creator_Price4:Bot_Creator_Price4,
            Botrunner_Unatt_Price4:Botrunner_Unatt_Price4,
            Botrunner_Att_Price4:Botrunner_Att_Price4,
            Controlroom_Price4:Controlroom_Price4,
            Total_Bot_Creator_Cost4:Total_Bot_Creator_Cost4,
            Total_Botrunner_Unatt_Cost4:Total_Botrunner_Unatt_Cost4,
            Total_Botrunner_Att_Cost4:Total_Botrunner_Att_Cost4,
            Total_Controlroom_Cost4:Total_Controlroom_Cost4,
            Totalof_Total_Lisc_Price4:Totalof_Total_Lisc_Price4,

            VM_Count4:VM_Count4,
            Server_Count4:Server_Count4,
            VM_Price4:VM_Price4,
            Server_Price4:Server_Price4,
            FTE_Price4:FTE_Price4,
            Total_VM_Price4:Total_VM_Price4,
            Total_Server_Price4:Total_Server_Price4,
            Totalof_Total_Infra_Price4:Totalof_Total_Infra_Price4,

            Dev_Cost3:Dev_Cost3,
            Srdev_Cost3:Srdev_Cost3,
            BA_Cost3:BA_Cost3,
            Arch_Cost3:Arch_Cost3,
            PM_Cost3:PM_Cost3,
            DUlead_Cost3:DUlead_Cost3,
            Total_Imp_Cost4:Total_Imp_Cost4,
            Maint_Cost4:Maint_Cost4,
            FTE_Savings_Count4:FTE_Savings_Count4,
            FTE_Savings_USD4:FTE_Savings_USD4,
            Net_Savings4:Net_Savings4,
            Net_Savings_Two4:Net_Savings_Two4,
            Total_Net_Savings4:Total_Net_Savings4,

            
            });
           
            
        }
        else{
            res.send(err)
            console.log(err)
        }
    });




break;



}

//.................new...........................................................//


// else{
//     // res.send("success")
//     console.log("success")
// }

//...............................................................................//


});
router.get("/liscenseCost",(res,req)=>{
    res.render("liscenseCost")
});
router.get("/liscenceCostCalculation",(req,res)=>{
    ConfigurationDetailsModel.find((err,doc)=>{
        if(!err)
        {
            BusinessModel.find((err,docs)=>{
                if(!err){
                    var length=docs[0].Selected_Process.length
                    console.log(length)
                    var count=0
                    for(i=0;i<length;i++)
                     { 
                        
                    var selected=docs[0].Selected_Process[i].split(',')
                    var SelectedId=[];
                    if(i!=0)
                    {
                        SelectedId.concat(selected[0])
                    }
                    else{
                        SelectedId.push(selected[0])
                    }
                    
                    
                    
                        console.log(SelectedId)
                    }
                   
                    
                    for(i=0;i<SelectedId.length;i++){
                        console.log(SelectedId[i])
                    }
                    

                    res.render("liscenseCost",{list:docs[0],lists:doc[0]})
                }
                else{
                    res.send(err)
                    console.log(err)
                }
            });
        }
        else
        {
            res.send(err)
            console.log(err)
        }
    });
});
router.get("/adminViewById", (req, res)=>{
     res.render("adminViewById")
 });
 router.get("/approveProcess", (req, res)=>{
    ProcessModel.find({Status:"REQUESTED"},(err, docs) => {
        if(!err){
        res.render("approveProcess", {list: docs});
      
        console.log(docs);
        }
        else {
        console.log('Failed to retrieve the Course List: '+ err);
        }
        });
});
router.get("/processPrioritization", (req, res)=>{
    res.render("processPrioritization")
});
 router.get("/userManagement", (req, res)=>{
    res.render("userManagement")
});
router.get("/userManagement2", (req, res)=>{
    res.render("userManagement2")
});
router.get("/register", (req, res)=>{
    res.render("register")
});
router.get("/approved", (req, res)=>{
    res.render("approved")
});
router.get("/secondProcess", (req, res)=>{
    res.render("secondProcess")
});
router.get("/About", (req, res)=>{
    res.render("About")
});
router.get("/Contact", (req, res)=>{
    res.render("Contact")
});
router.post("/checkUser",(req,res) => {
   
    if(req.body.userName=="ADMIN"&&req.body.password=="ADMIN$1"){
        res.render("Home",{viewtitle:"ADMIN"});
    }
    else{
    UserModel.findOne({
        userName:req.body.userName,
        password: req.body.password
      })
      .exec(function (err, result) {
        if(result) { // auth was successful
          req.session.user = result; // so writing user document to session
          console.log(result.userName);
          return res.render("Home",{viewtitle:result.userName}); // redirecting user to interface
        }
  
        // auth not successful, because result is null
        res.render("index",{viewtitle :"Invalid User"}) // redirect to login page
    });
    }
});
router.post("/adduser", (req, res)=>{
    if(req.body.password==req.body.cpassword){
    var usermodel = new UserModel();
    usermodel.userName = req.body.userName;
   usermodel.email = req.body.email;
    usermodel. employeeId = req.body.employeeId;
    usermodel.password = req.body.password;
    usermodel.save((err, doc) => {
        if (!err){
        res.send("Registerd Successfully");
        
    }
        else{
        console.log('Error during record insertion : ' + err);
        res.send("Error Occured");
    }
});
    }
    else
    res.render("register",{viewtitle:"Password not matched.."});
});
//....................................save effortestimation............................................//
router.post("/addEffort", (req, res)=>{
    try{
        console.log("in addEffort");
    var effortmodel = new effortEstimationModel();
    effortmodel.pd = req.body.pd;
    effortmodel.pid = req.body.pid;
    effortmodel.rx = req.body.rx;
    effortmodel.BI = req.body.BI;
    effortmodel.rpatool = req.body.rpatool;
    effortmodel.Simple = req.body.Simple;
    effortmodel.Medium = req.body.Medium;
    effortmodel.Complex = req.body.Complex;
    effortmodel.Total = req.body.Total;
    effortmodel.Simple_Dev_Effort = req.body.Simple_Dev_Effort;
    effortmodel.Simple_Srdev_Effort = req.body.Simple_Srdev_Effort;
    effortmodel.Simple_BA_Effort = req.body.Simple_BA_Effort;
    effortmodel.Simple_Arch_Effort = req.body.Simple_Arch_Effort;
    effortmodel.Simple_PM_Effort = req.body.Simple_PM_Effort;
    effortmodel.Simple_DM_Effort = req.body.Simple_DM_Effort;
    effortmodel.Total_Simple_Effort = req.body.Total_Simple_Effort;
    effortmodel.Medium_Dev_Effort = req.body.Medium_Dev_Effort;
    effortmodel.Medium_Srdev_Effort = req.body.Medium_Srdev_Effort;
    effortmodel.Medium_BA_Effort = req.body.Medium_BA_Effort;
    effortmodel.Medium_Arch_Effort = req.body.Medium_Arch_Effort;
    effortmodel.Medium_PM_Effort = req.body.Medium_PM_Effort;
    effortmodel.Medium_DM_Effort = req.body.Medium_DM_Effort;
    effortmodel.Total_Medium_Effort = req.body.Total_Medium_Effort;
    effortmodel.Complex_Dev_Effort = req.body.Complex_Dev_Effort;
    effortmodel.Complex_Srdev_Effort = req.body.Complex_Srdev_Effort;
    effortmodel.Complex_BA_Effort = req.body.Complex_BA_Effort;
    effortmodel.Complex_Arch_Effort = req.body.Complex_Arch_Effort;
    effortmodel.Complex_PM_Effort = req.body.Complex_PM_Effort;
    effortmodel.Complex_DM_Effort = req.body.Complex_DM_Effort;
    effortmodel.Total_Complex_Effort = req.body.Total_Complex_Effort;
    effortmodel.Total_Dev_Effort = req.body.Total_Dev_Effort;
    effortmodel.Total_Srdev_Effort = req.body.Total_Srdev_Effort;
    effortmodel.Total_BA_Effort = req.body.Total_BA_Effort;
    effortmodel.Total_Arch_Effort = req.body.Total_Arch_Effort;
    effortmodel.Total_PM_Effort = req.body.Total_PM_Effort;
    effortmodel.Total_DM_Effort = req.body.Total_DM_Effort;
    effortmodel.Total_Of_Total_Effort = req.body.Total_Of_Total_Effort;
    effortmodel.Dev_Roundoff = req.body.Dev_Roundoff;
    effortmodel.Srdev_Roundoff = req.body.Srdev_Roundoff;
    effortmodel.BA_Roundoff = req.body.BA_Roundoff;
    effortmodel.Arch_Roundoff = req.body.Arch_Roundoff;
    effortmodel.PM_Roundoff = req.body.PM_Roundoff;
    effortmodel.DM_Roundoff = req.body.DM_Roundoff;
    effortmodel.Dev_Cost = req.body.Dev_Cost;
    effortmodel.Srdev_Cost = req.body.Srdev_Cost;
    effortmodel.BA_Cost = req.body.BA_Cost;
    effortmodel.Arch_Cost = req.body.Arch_Cost;
    effortmodel.PM_Cost = req.body.PM_Cost;
    effortmodel.DUlead_Cost_ = req.body.DUlead_Cost_;
    effortmodel.Total_Imp_Cost = req.body.Total_Imp_Cost;
    effortmodel.Bot_Creator_Count = req.body.Bot_Creator_Count;
    effortmodel.Bot_Creator_Price = req.body.Bot_Creator_Price;
    effortmodel.Total_Bot_Creator_Cost = req.body.Total_Bot_Creator_Cost;
    effortmodel.Botrunner_Unatt_Count = req.body.Botrunner_Unatt_Count;
    effortmodel.Botrunner_Unatt_Price = req.body.Botrunner_Unatt_Price;
    effortmodel.Total_Botrunner_Unatt_Cost = req.body.Total_Botrunner_Unatt_Cost;
    effortmodel.Botrunner_Att_Count = req.body.Botrunner_Att_Count;
    effortmodel.Botrunner_Att_Price = req.body.Botrunner_Att_Price;
    effortmodel.Total_Botrunner_Att_Cost = req.body.Total_Botrunner_Att_Cost;
    effortmodel.Controlroom_Count = req.body.Controlroom_Count;
    effortmodel.Controlroom_Price = req.body.Controlroom_Price;
    effortmodel.Total_Controlroom_Cost = req.body.Total_Controlroom_Cost;
    effortmodel.Totalof_Total_Lisc_Price = req.body.Totalof_Total_Lisc_Price;
    effortmodel.VM_Count = req.body.VM_Count;
    effortmodel.VM_Price = req.body.VM_Price;
    effortmodel.Total_VM_Price = req.body.Total_VM_Price;
    effortmodel.Server_Count = req.body.Server_Count;
    effortmodel.Server_Price = req.body.Server_Price;
    effortmodel.Total_Server_Price = req.body. Total_Server_Price;
    effortmodel.Totalof_Total_Infra_Price = req.body.Totalof_Total_Infra_Price;
    effortmodel.Maint_Cost = req.body.Maint_Cost;
    effortmodel.FTE_Savings_Count = req.body.FTE_Savings_Count;
    effortmodel.Controlroom_Count = req.body.Controlroom_Count;
    effortmodel.FTE_Price = req.body.FTE_Price;
    effortmodel.FTE_Savings_USD = req.body.FTE_Savings_USD;
    effortmodel.Net_Savings = req.body.Net_Savings;
    effortmodel.Net_Savings_Two = req.body.Net_Savings_Two;
    effortmodel.Total_Imp_Cost_Two_ = req.body.Total_Imp_Cost_Two_;
    effortmodel.Total_TCO_Two_ = req.body.Total_TCO_Two_;
    effortmodel.Total_Net_Savings_Two_ = req.body.Total_Net_Savings_Two_;

    
    effortmodel.save((err, doc) => {
        if (err){
            if (err.name === 'MongoError' && err.code === 11000) {
                // Duplicate username
                return res.status(422).send({ success: false, message: 'Effort Estimation already exists!' });
              }
        
        return res.status(422).send(err);
    }
        else{
       res.render("effortEstimation",{viewtitle:"Saved Successfully"});
    }
});
}
catch(e){
    res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
}   
});
//....................................................................................................//

router.post("/addProcess", (req, res)=>{
    try{
    var processmodel = new ProcessModel();
    processmodel.clientName = req.body.clientName;
    processmodel.Buss_Unit = req.body.Buss_Unit;
    processmodel.Sub_Buss_Unit = req.body.Sub_Buss_Unit;
    processmodel.Proc_Name = req.body.Proc_Name;
    
    processmodel. Proc_Id = req.body.Proc_Id;
    processmodel.Proc_Desc = req.body.Proc_Desc;
    processmodel.Mon_Vol = req.body.Mon_Vol;
    processmodel.AHT = req.body.AHT;
    processmodel.FTE = req.body.FTE;
    processmodel.SLA = req.body.SLA;
    processmodel.TAT = req.body.TAT;
    processmodel.App_Used = req.body.App_Used;
    processmodel.Doc_Present = req.body.Doc_Present;
    processmodel.Rule_Based = req.body.Rule_Based;
    processmodel.Stuc_Data = req.body.Stuc_Data;
    processmodel.Inp_Data_Type = req.body.Inp_Data_Type;
    processmodel.Amenable_RPA = req.body.Amenable_RPA;
    processmodel.Amenable_Cognitive = req.body.Amenable_Cognitive;
    processmodel. Automation_Ready = req.body.Automation_Ready;
    processmodel.AP_Perc = req.body.AP_Perc;
    processmodel.FTE_Benefit = req.body.FTE_Benefit;
    processmodel.Num_of_apps = req.body.Num_of_apps;
    processmodel.Num_of_mainframe = req.body.Num_of_mainframe;
    processmodel.Num_of_Citrix = req.body.Num_of_Citrix;
    processmodel.Third_party_sites = req.body.Third_party_sites;
    processmodel.Num_of_scrs = req.body.Num_of_scrs;
    processmodel.Num_of_proccessteps = req.body.Num_of_proccessteps;
    processmodel.Num_of_Scenarios = req.body.Num_of_Scenarios;
    processmodel.Num_of_Decpoints = req.body.Num_of_Decpoints;
    processmodel.Num_of_standardinput = req.body.Num_of_standardinput;
    processmodel.Intr_dynamic_table = req.body.Intr_dynamic_table;
    processmodel.Num_of_basedcontrols = req.body.Num_of_basedcontrols;
    processmodel.Num_of_accessprofile = req.body.Num_of_accessprofile;
    processmodel.Num_of_browsersupp = req.body.Num_of_browsersupp;
    processmodel.Operation_stability = req.body.Operation_stability;
    processmodel.Freq_change = req.body.Freq_change;
    processmodel.Svc_lvl_agr = req.body.Svc_lvl_agr;
    processmodel.Num_of_getsignoff = req.body.Num_of_getsignoff;
    processmodel.Num_of_Envsetup = req.body.Num_of_Envsetup;
    processmodel.Func_point = req.body.Func_point;
    processmodel.Monthly_effsaving = req.body.Monthly_effsaving;
    processmodel.Effort = req.body.Effort;
    processmodel.Quadrant = req.body.Quadrant;
    processmodel.Status="REQUESTED";
    if(processmodel.Func_point <= 25)
    processmodel.Classification = "Simple";
    else if(processmodel.Func_point > 25 && processmodel.Func_point <= 50)
    processmodel.Classification = "Medium";
    else
    processmodel.Classification = "Complex";
    processmodel.save((err, doc) => {
        if (err){
            if (err.name === 'MongoError' && err.code === 11000) {
                // Duplicate username
                return res.status(422).send({ success: false, message: 'Process already exist!' });
              }
        
        return res.status(422).send(err);
    }
        else{
       res.render("CaptureProcess",{viewtitle:"Captured Successfully"});
    }
});
}
catch(e){
    res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
}   
});
router.post("/addProcessTwo", (req, res)=>{
    var secondprocessmodel = new SecondProcessModel();
    secondprocessmodel.Proc_Id = req.body.Proc_Id;
    secondprocessmodel.clientName = req.body.clientName;
    secondprocessmodel.Buss_Unit = req.body.Buss_Unit;
    secondprocessmodel.Sub_Buss_Unit = req.body.Sub_Buss_Unit;
    secondprocessmodel.Proc_Name = req.body.Proc_Name;
    secondprocessmodel.Mon_Vol = req.body.Mon_Vol;
    secondprocessmodel.AHT = req.body.AHT;
    secondprocessmodel.AP_Perc = req.body.AP_Perc;
    secondprocessmodel.Num_of_apps = req.body.Num_of_apps;
    secondprocessmodel.Num_of_mainframe = req.body.Num_of_mainframe;
    secondprocessmodel.Num_of_Citrix = req.body.Num_of_Citrix;
    secondprocessmodel.Third_party_sites = req.body.Third_party_sites;
    secondprocessmodel.Num_of_scrs = req.body.Num_of_scrs;
    secondprocessmodel.Num_of_proccessteps = req.body.Num_of_proccessteps;
    secondprocessmodel.Num_of_Scenarios = req.body.Num_of_Scenarios;
    secondprocessmodel.Num_of_Decpoints = req.body.Num_of_Decpoints;
    secondprocessmodel.Num_of_standardinput = req.body.Num_of_standardinput;
    secondprocessmodel.Intr_dynamic_table = req.body.Intr_dynamic_table;
    secondprocessmodel.Num_of_basedcontrols = req.body.Num_of_basedcontrols;
    secondprocessmodel.Num_of_accessprofile = req.body.Num_of_accessprofile;
    secondprocessmodel.Num_of_browsersupp = req.body.Num_of_browsersupp;
    secondprocessmodel.Operation_stability = req.body.Operation_stability;
    secondprocessmodel.Freq_change = req.body.Freq_change;
    secondprocessmodel.Svc_lvl_agr = req.body.Svc_lvl_agr;
    secondprocessmodel.Num_of_getsignoff = req.body.Num_of_getsignoff;
    secondprocessmodel.Num_of_Envsetup = req.body.Num_of_Envsetup;
    secondprocessmodel.Func_point = req.body.Func_point;
    secondprocessmodel.Monthly_effsaving = req.body.Monthly_effsaving;
    secondprocessmodel.Effort = req.body.Effort;
    secondprocessmodel.Quadrant = req.body.Quadrant;
    if(secondprocessmodel.Func_point <= 25)
    secondprocessmodel.Classification = "Simple";
    else if(secondprocessmodel.Func_point > 25 && secondprocessmodel.Func_point <= 50)
    secondprocessmodel.Classification = "Medium";
    else
    secondprocessmodel.Classification = "Complex";
    secondprocessmodel.save((err, doc) => {
        if (err){
            if (err.name === 'MongoError' && err.code === 11000) {
                // Duplicate username
                return res.status(422).send({ success: false, message: 'Process already exist!' });
              }
        
        return res.status(422).send(err);
    }
        else{
       res.render("secondProcess",{viewtitle:"Captured Successfully"});
    }

});
});


//.....................dropdown.......................//
function get_unique(myData ) {

    return Array.from(new Set(myData.map(JSON.stringify))).map(JSON.parse);
  
  }
  //....................................business.....................................//
 
  //.................................................................................//
  
  
  router.get('/list', (req, res) => {

    MongoClient.connect(url, function(err, db) {
    
      if (err) throw err;
    
      var dbo = db.db("Mydb");
     
    
      dbo.collection("Process").find({},{ projection: { _id: 0, clientName: 1} }).toArray(function(err, client_Name) {
    
        if (err) throw err;
    
        console.log(client_Name);
    
    
        console.log(get_unique(client_Name));
         
        res.render('processPrioritization', {client_list: get_unique(client_Name)});

      });




    
    });
    
    });
    //.........................//
    router.get('/listbusiness', (req, res) => {

        MongoClient.connect(url, function(err, db) {
        
          if (err) throw err;
        
          var dbo = db.db("Mydb");
         
        
          dbo.collection("Process").find({},{ projection: { _id: 0, clientName: 1} }).toArray(function(err, client_Name) {
        
            if (err) throw err;
        
            console.log(client_Name);
        
        
            console.log(get_unique(client_Name));
             
            res.render('businessCaseList', {Bus_list: get_unique(client_Name)});
    
          });
    
    
    
    
        
        });
        
        });
    //..........................//


//...................................original.....................................................//
// router.get('/list', (req,res) => {
//     ProcessModel.find((err, docs) => {
//     if(!err){
//     res.render("processPrioritization", {list: docs});
  
//     console.log(docs);
    
//     }
//     else {
//     console.log('Failed to retrieve the Course List: '+ err);
//     }
//     });
//     });
//....................................................................................//
//...............dropdown trigerring........................................................//

router.post('/showBussinessUnit', (req, res) => {

    MongoClient.connect(url, function(err, db) {
    
      if (err) throw err;
    
      var dbo = db.db("Mydb");
     var choice =  dbo.collection("Process").clientName = req.body.client_name;
    console.log("choice"+req.body.client_name);

      dbo.collection("Process").find({clientName:req.body.client_name},{ projection: { _id: 0, Buss_Unit: 1} }).toArray(function(err, BU_data) {
        console.log(BU_data);
    
        
    
        console.log(get_unique(BU_data));
        if(err){
             throw err;
        }
        
        
            else{
             res.render('processPrioritization', {Business_list: get_unique(BU_data), clientname: req.body.client_name});
            }
            
        

    
        

       
      });

    
    });
    
    });

//........................................................................................................//


//..............to get table.................................//
router.post('/showTable', (req, res) => {

    MongoClient.connect(url, function(err, db) {
    
      if (err) throw err;
    
      var dbo = db.db("Mydb");
      dbo.collection("Process").clientName = req.body.client_name;
      dbo.collection("Process").Buss_Unit = req.body.Business_Unit;
      console.log( req.body.client_name);
      console.log(req.body.Business_Unit);
    
      dbo.collection("Process").find({clientName:req.body.client_name},{ projection: { _id: 0,clientName:1, Buss_Unit: 1, Proc_Name: 1, Proc_Id:1, Mon_Vol: 1, AHT:1, FTE:1, AP_Perc:1, FTE_Benefit:1, Classification:1, Quadrant:1} }).toArray(function(err, process_table) {
    
        if (err) throw err;
    
        console.log(process_table);
    
        
        res.render('processPrioritization', {client_table: process_table, client: req.body.client_name, businessunit: req.body.Business_Unit});
      });




    
    });
    
    });
    //..................businesstable...........................//

    router.post('/showTablebusiness', (req, res) => {

        MongoClient.connect(url, function(err, db) {
        
          if (err) throw err;
        
          var dbo = db.db("Mydb");
          dbo.collection("Process").clientName = req.body.client_name_bus;
          
          console.log( req.body.client_name_bus);
          
          dbo.collection("Process").find({clientName:req.body.client_name_bus},{ projection: { _id: 0, clientName:1, Buss_Unit: 1,  Sub_Buss_Unit:1, Proc_Name: 1, Proc_Id:1, Classification:1} }).toArray(function(err, bus_table) {
        
            if (err) throw err;
        
            console.log(bus_table);
        
            
            res.render('businessCaseList', {business_table: bus_table});
          });
    
    
    
    
        
        });
        
        });
//..........................................................................//
    router.get('/userList', (req,res) => {
        UserModel.find((err, docs) => {
        if(!err){
        res.render("viewUser", {list: docs});
        console.log(docs);
        }
        else {
        console.log('Failed to retrieve the Course List: '+ err);
        }
        });
        });

    router.get('/viewbubblechart', (req,res) => {
        ProcessModel.find((err, docs) => {
            
            console.log(docs);
        if(!err){
        res.render("bubblechart" ,{list: docs});


        }
        else {
        console.log('Failed to retrieve the Course List: '+ err);
        }
        
        });
        });
         

    router.get('/viewById/:id', (req, res) => {
        console.log("Inside router")
        console.log(req.params.id);
    
        ProcessModel.find(req.params.id,(err, doc) => {
            console.log(doc)
            if(doc.length!=0){
        if (doc[0].Status=="APPROVED") {
        res.render("view&editProcess", {viewtitle:"Process",process:doc[0]
        });
        console.log(doc);
        }
        else
        res.render("viewProcessList",{viewtitle:"Process is not Approved wait for the admin approval"});
        }
        else{
            res.render("viewProcessList",{viewtitle : "Process is not captured!" })
        }
    });
    
        });
        ////////////...................effort.................///
        router.get('/viewEffortById/:id', (req, res) => {
            // console.log("Inside router")
            // console.log(req.params.id);
        
            effortEstimationModel.find(req.params.id,(err, doc) => {
                // console.log(doc)
                if(doc.length!=0){
            if (!err) {
            res.render("viewEffort", {process:doc[0]
            });
            console.log(doc);
            }
            else
            res.render("viewProcessList",{viewtitle:"Process is not Approved wait for the admin approval"});
            }
            else{
                res.render("viewProcessList",{viewtitle : "Process is not captured!" })
            }
        });
        
            });
        ////......................../////
        router.get("/approveProcessById",(req,res)=>{
     
            ProcessModel.findByIdAndUpdate({_id:req.query.Id},{Status:"APPROVED"}, (err,doc)=>{
                console.log(req.query.Id)
                console.log(doc)
                console.log("after doc")
              if (!err) {
                  res.render("approveProcess",{viewtitle:"Approved Successfully"}); 
                 }         
           else
             { res.send('Error during updating the record: ' + err);}
      
            });
       
      });

router.get('/delete/:id', (req, res) => {
    
    if(req.params.id.match(/^[0-9a-fA-F]{24}$/)){
    UserModel.findByIdAndRemove(req.params.Proc_Id, (err, doc) => {
    if (!err) {
    res.redirect('/user/list');
    }
    else { console.log('Failed to Delete Course Details: ' + err); }
    });
}
else
res.send('error: please provide correct id');
    });
    application.get('*', function(req, res){
        res.status(404).send('what???');
      });


router.get('/view', (req, res) => {
    ProcessModel.findById({_id:req.query.id}, (err, doc) => {
        console.log("in view")
        console.log(req.query.id)
        console.log(doc)
        console.log(doc.Status)
       
            if (doc.Status=="APPROVED") {
                console.log("in if")
            res.render("view&editProcess", {viewtitle:"Process Details",process:doc
            });
            
            }
            else
            res.render("viewProcessList",{viewtitle:"Process is not Approved wait for the admin approval"});
           
    });
    });
    //...............vieweffort................................//
    router.get('/viewEffort', (req, res) => {
        effortEstimationModel.findById({_id:req.query.id}, (err, doc) => {
            // console.log("in view")
            // console.log(req.query.id)
            // console.log(doc)
            // console.log(doc.Status)
            console.log("*&*&*&*&*&*&*&*&");
           
                if (!err) {
                    console.log("in if")
                res.render("viewEffort2", {effortestimation:doc
                });
                
                }
                else
                res.render("viewEffort2",{viewtitle:"Error"});
               
        });
        });
    
    
    //.......................................................//


   
        router.post("/updateDetails",(req,res)=>{

            var processmodel = new ProcessModel();
            
    processmodel.Proc_Desc = req.body.Proc_Desc;
    processmodel.Mon_Vol = req.body.Mon_Vol;
    processmodel.AHT = req.body.AHT;
    processmodel.FTE = req.body.FTE;
    processmodel.SLA = req.body.SLA;
    processmodel.TAT = req.body.TAT;
    processmodel.App_Used = req.body.App_Used;
    processmodel.Doc_Present = req.body.Doc_Present;
    processmodel.Rule_Based = req.body.Rule_Based;
    processmodel.Stuc_Data = req.body.Stuc_Data;
    processmodel.Inp_Data_Type = req.body.Inp_Data_Type;
    processmodel.Amenable_RPA = req.body.Amenable_RPA;
    processmodel.Amenable_Cognitive = req.body.Amenable_Cognitive;
    processmodel. Automation_Ready = req.body.Automation_Ready;
    processmodel.AP_Perc = req.body.AP_Perc;
    processmodel.FTE_Benefit = req.body.FTE_Benefit;
    processmodel.Num_of_apps = req.body.Num_of_apps;
    processmodel.Num_of_mainframe = req.body.Num_of_mainframe;
    processmodel.Num_of_Citrix = req.body.Num_of_Citrix;
    processmodel.Third_party_sites = req.body.Third_party_sites;
    processmodel.Num_of_scrs = req.body.Num_of_scrs;
    processmodel.Num_of_proccessteps = req.body.Num_of_proccessteps;
    processmodel.Num_of_Scenarios = req.body.Num_of_Scenarios;
    processmodel.Num_of_Decpoints = req.body.Num_of_Decpoints;
    processmodel.Num_of_standardinput = req.body.Num_of_standardinput;
    processmodel.Intr_dynamic_table = req.body.Intr_dynamic_table;
    processmodel.Num_of_basedcontrols = req.body.Num_of_basedcontrols;
    processmodel.Num_of_accessprofile = req.body.Num_of_accessprofile;
    processmodel.Num_of_browsersupp = req.body.Num_of_browsersupp;
    processmodel.Operation_stability = req.body.Operation_stability;
    processmodel.Freq_change = req.body.Freq_change;
    processmodel.Svc_lvl_agr = req.body.Svc_lvl_agr;
    processmodel.Num_of_getsignoff = req.body.Num_of_getsignoff;
    processmodel.Num_of_Envsetup = req.body.Num_of_Envsetup;
    processmodel.Func_point = req.body.Func_point;
    processmodel.Monthly_effsaving = req.body.Monthly_effsaving;
    processmodel.Effort = req.body.Effort;
    processmodel.Quadrant = req.body.Quadrant;
            
                    var updated_doc={$set: {Proc_Desc:req.body.Proc_Desc, 
                        Mon_Vol:req.body.Mon_Vol,
                        AHT:req.body.AHT,
                        FTE:req.body.FTE,

                        SLA:req.body.SLA,
                        TAT:req.body.TAT,
                        App_Used:req.body.App_Used,
                        Doc_Present:req.body.Doc_Present,
                        Rule_Based:req.body.Rule_Based,
                        Stuc_Data:req.body.Stuc_Data,
                        Inp_Data_Type:req.body.Inp_Data_Type,
                        Amenable_Cognitive:req.body.Amenable_Cognitive,
                        Automation_Ready:req.body.Automation_Ready,
                        Num_of_apps:req.body.Num_of_apps,
                        Num_of_mainframe:req.body.Num_of_mainframe,
                        Num_of_Citrix:req.body.Num_of_Citrix,
                        Third_party_sites:req.body.Third_party_sites,
                        Num_of_scrs:req.body.Num_of_scrs,
                       Num_of_proccessteps:req.body.Num_of_proccessteps,
                     Num_of_Scenarios:req.body.Num_of_Scenarios,
                    Num_of_Decpoints:req.body.Num_of_Decpoints,
                    Num_of_standardinput:req.body.Num_of_standardinput,
                   Intr_dynamic_table:req.body.Intr_dynamic_table,
                   Num_of_basedcontrols:req.body.Num_of_basedcontrols,
                  Num_of_accessprofile:req.body.Num_of_accessprofile,
                Num_of_browsersupp:req.body.Num_of_browsersupp,
                 Operation_stability:req.body.Operation_stability,
                 Freq_change:req.body.Freq_change,
                Svc_lvl_agr:req.body.Svc_lvl_agr,
                Num_of_getsignoff:req.body.Num_of_getsignoff,
                Num_of_Envsetup:req.body.Num_of_Envsetup,
                Func_point:req.body.Func_point,
               Monthly_effsaving:req.body.Monthly_effsaving,
               Effort:req.body.Effort,
               Quadrant:req.body.Quadrant,
                                                }}
                    ProcessModel.updateOne({Proc_Id:req.body.Proc_Id},updated_doc,(err,doc)=>{
                        console.log(updated_doc);
                        if (!err) 
                         {
                   res.render("CaptureProcess",{viewtitle:"Updated Successfully"})
                }
                        
                            else{
                                console.log(err);
                                res.render("CaptureProcess",{viewerror:"error Occured in proceeding"})
                            }
                    });
                
                
                
            
            
            
        });


        router.post("/updateDetailsTwo",(req,res)=>{

            var secondprocessmodel = new SecondProcessModel();
            secondprocessmodel.Num_of_apps = req.body.Num_of_apps;
    secondprocessmodel.Num_of_mainframe = req.body.Num_of_mainframe;
    secondprocessmodel.Num_of_Citrix = req.body.Num_of_Citrix;
    secondprocessmodel.Third_party_sites = req.body.Third_party_sites;
    secondprocessmodel.Num_of_scrs = req.body.Num_of_scrs;
    secondprocessmodel.Num_of_proccessteps = req.body.Num_of_proccessteps;
    secondprocessmodel.Num_of_Scenarios = req.body.Num_of_Scenarios;
    secondprocessmodel.Num_of_Decpoints = req.body.Num_of_Decpoints;
    secondprocessmodel.Num_of_standardinput = req.body.Num_of_standardinput;
    secondprocessmodel.Intr_dynamic_table = req.body.Intr_dynamic_table;
    secondprocessmodel.Num_of_basedcontrols = req.body.Num_of_basedcontrols;
    secondprocessmodel.Num_of_accessprofile = req.body.Num_of_accessprofile;
    secondprocessmodel.Num_of_browsersupp = req.body.Num_of_browsersupp;
    secondprocessmodel.Operation_stability = req.body.Operation_stability;
    secondprocessmodel.Freq_change = req.body.Freq_change;
    secondprocessmodel.Svc_lvl_agr = req.body.Svc_lvl_agr;
    secondprocessmodel.Num_of_getsignoff = req.body.Num_of_getsignoff;
    secondprocessmodel.Num_of_Envsetup = req.body.Num_of_Envsetup;
    secondprocessmodel.Func_point = req.body.Func_point;
    secondprocessmodel.Monthly_effsaving = req.body.Monthly_effsaving;
    secondprocessmodel.Effort = req.body.Effort;
    secondprocessmodel.Quadrant = req.body.Quadrant;
            
                    var updated_doc={$set: {Num_of_apps:req.body.Num_of_apps,
                        Num_of_mainframe:req.body.Num_of_mainframe,
                        Num_of_Citrix:req.body.Num_of_Citrix,
                        Third_party_sites:req.body.Third_party_sites,
                        Num_of_scrs:req.body.Num_of_scrs,
                        Num_of_proccessteps:req.body.Num_of_proccessteps,
                        Num_of_Scenarios:req.body.Num_of_Scenarios,
                        Num_of_Decpoints:req.body.Num_of_Decpoints,
                        Num_of_standardinput:req.body.Num_of_standardinput,
                        Intr_dynamic_table:req.body.Intr_dynamic_table,
                        Num_of_basedcontrols:req.body.Num_of_basedcontrols,
                        Num_of_accessprofile:req.body.Num_of_accessprofile,
                        Num_of_browsersupp:req.body.Num_of_browsersupp,
                        Operation_stability:req.body.Operation_stability,
                        Freq_change:req.body.Freq_change,
                        Svc_lvl_agr:req.body.Svc_lvl_agr,
                        Num_of_getsignoff:req.body.Num_of_getsignoff,
                        Num_of_Envsetup:req.body.Num_of_Envsetup,
                        Func_point:req.body.Func_point,
                        Monthly_effsaving:req.body.Monthly_effsaving,
                        Effort:req.body.Effort,
                        Quadrant:req.body.Quadrant,
                                                }}
                    SecondProcessModel.updateOne({Proc_Id:req.body.Proc_Id},updated_doc,(err,doc)=>{
                        console.log(updated_doc);
                        if(!err)
                {
                   res.render("CaptureProcess",{viewtitle:"Updated Successfully"})
                }
                else{
                    console.log(err);
                    res.render("CaptureProcess",{viewerror:"error Occured in proceeding"})
                }
                    });
                
                
                
            
            
            
        });

        router.post("/saveprocessFlow",(req,res)=>{
           
            let db = mongoose.connection;
            var a = JSON.parse(req.body.data);
            a.Proc_Id = req.body.Proc_Id;
            db.collection("processFlow").insertOne(a);
            
            res.render("processFlowDocumentation",{viewtitle:"Work Flow Captured Successfully"})
                
    });
    router.get("/viewWorkflow", (req, res)=>{
       
        ProcessFlowModel.find((err, docs) => {
            if(!err){
                
                console.log("Docs"+docs);
            res.render("viewProcessFlowList", {list: docs});
          
            
            }
            else {
            console.log('Failed to retrieve the Course List: '+ err);
            }
            });
    });
    router.get("/viewflow", (req, res)=>{
        ProcessFlowModel.Proc_Id = req.body.Proc_Id;
        ProcessFlowModel.findById({_id:req.query.id}, (err, docs) => {
            if(!err){
            console.log("in view");
                 var id = docs.Proc_Id;
                var data = JSON.stringify(docs);
                
                res.render("view&editProcessFlow", {list: data,id:id});
            }
            else{
                console.log(err);
            }
                
        });
         });

         router.post("/updateprocessFlow",(req,res)=>{
            let db = mongoose.connection;
            
            var a = JSON.parse(req.body.data);
            a.Proc_Id = req.body.Proc_Idura;
           
            db.collection("processFlow").updateOne({Proc_Id:req.body.Proc_Idura},{$set:a},(err)=>{
                console.log(a);
                if(!err)
        {
           res.render("processFlowDocumentation",{viewtitle:"Updated Successfully"})
        }
        else{
            console.log(err);
            res.render("processFlowDocumentation",{viewerror:"error Occured in proceeding"})
        }
            });
            
    });

    router.get('/excelSubmit',(req,res)=>{
        excelModel.find((err,data)=>{
            if(err){
                console.log(err)
                
            }else{
                if(data!=''){
                    res.render('home',{result:data});
                }else{
                    res.render('home',{result:{}});
                }
            }
        });
     });
    
       
     router.post('/excelSubmit',upload.single('excel'),(req,res)=>{
       var workbook =  XLSX.readFile(req.file.path);
      
       var sheet_namelist = workbook.SheetNames;
       var x=0;
       sheet_namelist.forEach(element => {
           var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]]);
     
           console.log(xlData);
           
           excelModel.insertMany(xlData,(err,data)=>{
               if(err){
                   console.log(err);
                 
              
               }else{
                   console.log(data);
                   
               }
           })
           x++;
       });
       res.render("uploadDownload",{viewtitle:"Uploaded Successfully"})
       
     });
     
     
     router.get('/download',(req,res)=>{
       var wb = XLSX.utils.book_new(); 
       excelModel.find((err,data)=>{
           if(err){
               console.log(err)
           }else{
               var temp = JSON.stringify(data);
               temp = JSON.parse(temp);
               var ws = XLSX.utils.json_to_sheet(temp);
               var down = __dirname+'/output.xlsx'
              XLSX.utils.book_append_sheet(wb,ws,"sheet1");
              XLSX.writeFile(wb,down);
              res.download(down);
           }
       });
      
     });



        


module.exports = router;