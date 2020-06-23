$(document).ready(function(){

    $("#save_btn").click(function(){

      console.log("save button clicked");

      $("#myForm" ).submit();

    });

 

    $(".btnNext").click(function(){

      console.log("next button clicked");

      $('a[href="#tab1"]').click(function(){

      alert('Success! Selected link starting with # in href.');

      });

    });

 

    $(".btnPrevious").click(function(){

      console.log("previous button clicked");

    });

  });




