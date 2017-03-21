$(document).ready(function() {

  $("#hidetext1").click(function(){
    $("#front-card1").toggle();
    $("#back-card1").toggle();

  });
  $("#front-card1").click(function(){
    $("#back-card1").toggle();
    $("#front-card1").toggle();
  });
  $("#hidetext2").click(function(){
    $("#front-card2").toggle();
    $("#back-card2").toggle();

  });
  $("#front-card2").click(function(){
    $("#back-card2").toggle();
    $("#front-card2").toggle();
  });
 $("#hidetext3").click(function(){
   $("#front-card3").toggle();
   $("#back-card3").toggle();

 });
 $("#front-card3").click(function(){
   $("#back-card3").toggle();
   $("#front-card3").toggle();
 });






});
