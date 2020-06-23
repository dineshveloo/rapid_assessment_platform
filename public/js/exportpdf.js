function createPDF() {
    var sTable1 = document.getElementById('T1').innerHTML;
    // var try1 = document.getElementById("T1").style.marginLeft = "50px";
    var sTable2 = document.getElementById('T2').innerHTML;
    var sTable3 = document.getElementById('T3').innerHTML;
    var sTable4 = document.getElementById('T4').innerHTML;
    var sTable5 = document.getElementById('T5').innerHTML;
    var sTable6 = document.getElementById('T6').innerHTML;
    var sTable7 = document.getElementById('T7').innerHTML;
    var sTable8 = document.getElementById('T8').innerHTML;
    var sTable9 = document.getElementById('T9').innerHTML;
    var imagelogo =  document.getElementById('image').innerHTML;

    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Calibri;}";

    // style = style + "table {width: 100%;font: 17px Calibri;}";
    // style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    // style = style + "padding: 2px 3px;text-align: center;}";
    // style = style + "</style>";

    // CREATE A WINDOW OBJECT.
    var win = window.open('', '', 'height=700,width=700');

    win.document.write('<html><head>');
    win.document.write('<title>Business Case Details</title>');   // <title> FOR PDF HEADER.
    //win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(imagelogo);
    
   
    win.document.write(sTable1.fontcolor("green"));
    win.document.write(sTable2.fontcolor("green"));
    win.document.write(sTable3.fontcolor("green"));
    win.document.write(sTable4.fontcolor("green"));
    win.document.write(sTable5.fontcolor("green"));
    win.document.write(sTable6.fontcolor("green"));
    win.document.write(sTable7.fontcolor("green"));
    win.document.write(sTable8.fontcolor("green"));
    win.document.write(sTable9.fontcolor("green"));         // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write('</body></html>');

    win.document.close(); 	// CLOSE THE CURRENT WINDOW.

    win.print();    // PRINT THE CONTENTS.
};

function createPDF2() {
    var Table = document.getElementById('pptzn').innerHTML;
    // var sTable2 = document.getElementById('T2').innerHTML;
    // var sTable3 = document.getElementById('T3').innerHTML;
    // var sTable4 = document.getElementById('T4').innerHTML;
    // var sTable5 = document.getElementById('T5').innerHTML;
    // var sTable6 = document.getElementById('T6').innerHTML;
    // var sTable7 = document.getElementById('T7').innerHTML;
    // var sTable8 = document.getElementById('T8').innerHTML;
    // var sTable9 = document.getElementById('T9').innerHTML;
  
    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";

    // CREATE A WINDOW OBJECT.
    var win = window.open('', '', 'height=700,width=700');

    win.document.write('<html><head>');
    win.document.write('<title>Process Prioritization</title>');   // <title> FOR PDF HEADER.
    //win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(Table);
    // win.document.write(sTable2);
    // win.document.write(sTable3);
    // win.document.write(sTable4);
    // win.document.write(sTable5);
    // win.document.write(sTable6);
    // win.document.write(sTable7);
    // win.document.write(sTable8);
    // win.document.write(sTable9);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write('</body></html>');

    win.document.close(); 	// CLOSE THE CURRENT WINDOW.

    win.print();    // PRINT THE CONTENTS.
};