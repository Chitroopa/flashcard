$(document).ready(function() {
 $(".front").click(function(){
   $(".front").hide();
   $(".back").show();
 });
 $(".back").click(function(){
   $(".back").hide();
   $(".front").show();
 });
});
