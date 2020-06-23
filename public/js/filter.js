$(document).on('click','.selectAll', function(e){
    var table= $( this ).closest('table');
    table.find(':checkbox').not( this ).prop('checked',this.checked);
    
  });





$(document).ready(function(){
    $('#btnClear').click(function(){        
    
     $('#myTable input[type="text"]').val('');
      $('#myTable #clientnameinput').val('');
      clientName();
       businessunit();
       subbusinessunit();
       processname();
       processid();
              
    });
  });

  $(document).ready(function(){
    $('#btnClearbusinessCase').click(function(){        
    $('#processes input[type="text"]').val('');
        $('#processes #myInput').val('');
        clientName2();
       businessunit2();
       subbusinessunit2();
       processname2();
       processid2();
       classification();
              
    });
  });


  
  $(document).ready(function(){
    $('#btnClearflow').click(function(){        
  $('#myTable input[type="text"]').val('');
   $('#myTable #processidinput').val('');
       
       processid3();
     
  
});
  });


  
  $(document).ready(function(){
    $('#btnClearview').click(function(){        
  $('#myTable input[type="text"]').val('');
   $('#myTable #clientnameinput').val('');
       clientName();
       businessunit();
       subbusinessunit();
       processname();
       processid();
     
  
});
  });

