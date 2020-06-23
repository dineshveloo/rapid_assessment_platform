const ProcessModel = mongoose.model('Process');
const ProcessFlowModel = mongoose.model('processFlow');



function calculate() {
    var myBox1 = document.getElementById('mv').value; 
    var myBox2 = document.getElementById('aht').value;
    var result = document.getElementById('fte');  
    var myResult = myBox1 * myBox2;
    var myyResult = myResult/10080;
    var myyyResult = Math.ceil(myyResult);
    result.value = myyyResult;
    fte_benifit();
  };
function automation(){
    var selObj  = document.getElementById('docpre');
    var selValue = selObj.options[selObj.selectedIndex].value;
    var documentation_value;
    switch(selValue) {
      case "No Documenation":
        documentation_value = 0.4;
        break;
      case "Partial Documentation":
        documentation_value = 0.6;
        break;
      case "Detailed Documentation":
        documentation_value = 0.8;
        break;
    }
    document.getElementById("Ar").value = documentation_value*100;
    fte_benifit();

};



function ap(){
    var selObj1  = document.getElementById("rbased");
    var rulebased_value_str = selObj1.options[selObj1.selectedIndex].value;
    var rulebased_value_int;
    switch(rulebased_value_str) {
      case "Low":
        rulebased_value_int = 0.2;
        break;
      case "Medium":
        rulebased_value_int = 0.5;
        break;
      case "High":
        rulebased_value_int = 0.8;
        break;
    }
    var arpa = document.getElementById('arpa').value;
    var arpa1 = arpa/100;
    var crpa = document.getElementById('crpa').value;
    var crpa1 = crpa/100;
    var apot = document.getElementById("apot");
    var result1 = (arpa1*rulebased_value_int*100)+(crpa1*(crpa/2));
    result2 = result1.toFixed(2);
    apot.value = result2;
    fte_benifit();
    y_axis();
   

};
function fte_benifit(){
    var ap = document.getElementById('apot').value/100;
    var fte = document.getElementById('fte').value;
    var resulta = document.getElementById('fteb');
    var result2 = ap*fte;
    var final = Math.ceil(result2);
    resulta.value = final;  

};



function ValidateRange() {
    var value = parseInt(document.getElementById("arpa").value);
    if (value < 0 || value > 100) {
        alert("Please enter number between 0 and 100");
        return false;
    }
    return true;
};
function ValidateRange1() {
    var value = parseInt(document.getElementById("crpa").value);
    if (value < 0 || value > 100) {
        alert("Please enter number between 0 and 100");
        return false;
    }
    return true;
};

function isNumberKey(evt){
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)){
            alert("Please enter an integer")
        
        
            return false;
            return true;
        
    }
        
    }; 
    function isAlphabet(evt){
        var charCode = (evt.which) ? evt.which : evt.keyCode
          if (!(charCode > 31 && (charCode < 48 || charCode > 57))){
              alert("Please enter valid text")
          
          
              return false;
              
          return true;
      }
      
      } ;
      function GetSelected() {
        //Create an Array.
        console.log("i am in get selcted func")
        var selectedProcess = new Array();
    console.log("i am inside getselected function")
        //Reference the Table.
        var processes = document.getElementById("processes");
    
        //Reference all the CheckBoxes in Table.
        var chks = processes.getElementsByTagName("INPUT");
    
        // Loop and push the checked CheckBox value in Array.
        for (var i = 0; i < chks.length; i++) {
            if (chks[i].checked) {
                selectedProcess.push(chks[i].value);
            }
        }
    
        //Display the selected CheckBox values.
        if (selectedProcess.length > 0) {
            fetch('/addSelectedProcess', {method : 'POST'})
            .then(function(response) {
                if(response.ok) {
                  console.log('Process was recorded');
                  return;
                }
                throw new Error('Request failed.');
              })
              .catch(function(error) {
                console.log(error);
              });
        }
    window.history.back();
    };
      function goBack() {
          
        window.history.back();
      };
      
      function validnum(a) { 
        if(a < 0 || a > 100) 
            return false;
        else 
            return true;
    } ;
    function validOrPunchTheUser(inputElement) {
        if(!validnum(inputElement.value)) {
            window.alert('Please enter the value between 0 to 100'); // punch the user
            inputElement.value = ""; // take away their things
        }
    };

    function getprocessid(){
        var cname  = document.getElementById('clientName').value;
        var subbusunit  = document.getElementById('sub_buss_unit').value;
        console.log(cname);
        var query={clientName:cname,Sub_Buss_Unit:subbusunit}
        ProcessModel.find({query},(err,doc)=>{
            console.log("i am in getprocessid function")
           
            if(doc.length!=0){
                if(!err)
                {
                    
                    document.getElementById('procid').value=doc[0].Proc_Id;
                }
            }
            else
            {
                res.render("processviewById",{viewtitle:"there is no proccess id with the above values"});
            }
        });
    };
    
    function clientName() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("clientnameinput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      };
    
      function clientName2() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput1");
        filter = input.value.toUpperCase();
        table = document.getElementById("processes");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      };
    


      function businessunit() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("businessunitinput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      };

      function businessunit2() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("businessunitinput2");
        filter = input.value.toUpperCase();
        table = document.getElementById("processes");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      };


      function subbusinessunit() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("subbusinessunitinput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[2];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      };

      function subbusinessunit2() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("subbusinessunitinput2");
        filter = input.value.toUpperCase();
        table = document.getElementById("processes");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[2];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      };


      function processname() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("processnameinput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[3];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      };

      function processname2() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("processnameinput2");
        filter = input.value.toUpperCase();
        table = document.getElementById("processes");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[3];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      };


      function processid() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("processidinput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[4];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      };

      //....................//
      function processid3() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("processidinput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      };
//...............................................//

      function processid2() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("processidinput2");
        filter = input.value.toUpperCase();
        table = document.getElementById("processes");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[4];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      };
     
    
          function classification() {
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("classificationinput");
            filter = input.value.toUpperCase();
            table = document.getElementById("processes");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[5];
              if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }       
            }
          };


         

          function funtional_point(){
            var a = 2;
            var b = 4;
            var c = 4;
            var d = 5;
            var e = 0.5;
            var f = 0.2;
            var g = 4;
            var h = 0.5;
            var i = 4;
            var j = 1;
            var k = 0.5;
            var l = 4;
            var m = 2.5;
            var n = 2.5;
            var o = 10;
            var p = 4;
            var q = 2.5;
            var r = 2.5;
            var numOfApps = document.getElementById('noa').value;
            var numOfMainframe = document.getElementById('nom').value;
            var numOfCitrix = document.getElementById('noc').value;
            var thirdPartySites = document.getElementById('tps');
            var thirdPartySites_str = thirdPartySites.options[thirdPartySites.selectedIndex].value;
            var thirdPartySites_int;
            switch(thirdPartySites_str){
              case "Yes":
                thirdPartySites_int = 1;
                break;
              case "No":
                thirdPartySites_int = 0;
                break;
              
            }
            var numOfScrs = document.getElementById('nos').value;
            var numOfProccessteps = document.getElementById('subject').value;
            var numOfScenarios = document.getElementById('nosc').value;
            var numOfDecpoints = document.getElementById('nod').value;
            var numOfStandardinput = document.getElementById('nost').value;
            var intrDynamicTable = document.getElementById('indt');
            var intrDynamicTable_str = intrDynamicTable.options[intrDynamicTable.selectedIndex].value;
            var intrDynamicTable_int;
            switch(intrDynamicTable_str){
              case "Yes":
                intrDynamicTable_int = 1;
                break;
              case "No":
                intrDynamicTable_int = 0;
                break;
              
            }
            var numOfBasedcontrols = document.getElementById('nob').value;
            var numOfAccessprofiles = document.getElementById('noap').value;
            var numOfBrowsersupp = document.getElementById('nbs').value;
            var operationStability = document.getElementById('opst');
            var operationStability_str = operationStability.options[operationStability.selectedIndex].value;
            var operationStability_int;
            switch(operationStability_str){
              case "Planned Downtime":
                operationStability_int = 0;
                break;
              case "Once in a month":
                operationStability_int = 1;
                break;
              
            }
          
            var freqChange = document.getElementById('freqch');
            var freqChange_str =freqChange.options[freqChange.selectedIndex].value;
            var freqChange_int;
            switch(freqChange_str){
              case "Frequently":
                freqChange_int = 1;
                break;
              case "Infrequently":
                freqChange_int = 0;
                break;
              
            }
            var svcLvlAgr = document.getElementById('svc');
            var svcLvlAgr_str =svcLvlAgr.options[svcLvlAgr.selectedIndex].value;
            var svcLvlAgr_int;
            switch(svcLvlAgr_str){
              case "Less than 8 hrs":
                svcLvlAgr_int = 2;
                break;
              case "Less than or equal to 24 hrs":
                svcLvlAgr_int = 1;
                break;
              case "More than 24 hrs":
                  svcLvlAgr_int = 0;
            }
            var numOfGetsignoff = document.getElementById('nog').value;
            var numOfEnvsetup = document.getElementById('noes').value;
            var funcPoint = document.getElementById('funp');
            var A = a * numOfApps;
            var B = b * numOfMainframe;
            var C = c * numOfCitrix;
            var D = d * thirdPartySites_int;
            var E = e * numOfScrs;
            var F = f * numOfProccessteps;
            var G = g * numOfScenarios;
            var H = h * numOfDecpoints;
            var I = i * numOfStandardinput;
            var J = j * intrDynamicTable_int;
            var K = k * numOfBasedcontrols;
            var L = l * numOfAccessprofiles;
            var M = m * numOfBrowsersupp;
            var N = n * operationStability_int;
            var O = o * freqChange_int;
            var P = p * svcLvlAgr_int;
            var Q = q * numOfGetsignoff;
            var R = r * numOfEnvsetup;
            var output = A + B + C + D + E + F + G + H + I + J + K + L + M + N + O + P + Q + R;
            funcPoint.value = output;
            effort();
            quadrant();
            // y_axis();
          }; 
    
 
        function y_axis(){
          var monthlyvolume = document.getElementById('mv').value; 
          var aht = document.getElementById('aht').value;
          var apot = document.getElementById("apot").value;
          var mes = document.getElementById('meffs');
          var output = aht * apot/100 * monthlyvolume;
          var output1 = output/60;
          var output2 = Math.ceil(output1);
          mes.value = output2;
          quadrant();
        };
        
        function effort(){
          var funcPoint = document.getElementById('funp').value;
          var efforts = document.getElementById('effo');
          var yout;
          if ((funcPoint >= 0) || (funcPoint <= 10)){
            yout = 4;
          }
          if ((funcPoint >= 11) || (funcPoint <= 20)){
            yout = 8;
          }
          if ((funcPoint >= 21) || (funcPoint <= 40)){
            yout = 12;
          }
          if ((funcPoint >= 41) || (funcPoint <= 60)){
            yout = 16;
          }
          if ((funcPoint >= 61) || (funcPoint <= 110)){
            yout = 20;
          }
          
          efforts.value = yout;
          
         
        };
        
        function quadrant(){
          var funcPoint = document.getElementById('funp').value;
          var mes = document.getElementById('meffs').value;
          
          var qua = document.getElementById('qua');
          var quaout; 
          if ((funcPoint >= 55) && (mes >= 1500)) {
            quaout = "Big Bets";
          }
          if ((funcPoint >= 55) && (mes <= 1500)) {
            quaout = "Defer";
          }
          if ((funcPoint <= 55) && (mes <= 1500)) {
            quaout = "Low Hanging Fruits";
          }
          if ((funcPoint <= 55) && (mes >= 1500)) {
            quaout = "Quick Wins";
          }
          
        qua.value = quaout;
        
        
        };

        // function get_unique(myData ) {

        //   return Array.from(new Set(myData.map(JSON.stringify))).map(JSON.parse);
        
        // };


        
      
      
        
        
        
        
      
           


 