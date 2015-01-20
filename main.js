$(document).on('ready', function() {


  $("#thisButton").click(function (){
  	console.log("button works");
  	$(".newText").append("You clicked it!");
  });

  $("#secondButton").click(function(){
  	console.log("2nd button works");
  	$("#li").append("<li>listicles</li>");
  });


});