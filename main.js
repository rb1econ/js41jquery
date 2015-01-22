$(document).on('ready', function() {


  $("#thisButton").click(function (){
  	console.log("button works");
  	$(".newText").append("You clicked it!");
  });

  $("#secondButton").click(function(){
  	console.log("2nd button works");
  	$("#li").append("<li>listicles</li>");
  });

  $("p").hover(function (){
  	$("p").addClass("peach");},	
  function() {
  	$("p").removeClass("peach")
  });

  $("h2").click(function() {
	  	$("h2").append("!!!");
	  });
  $("h2").click(function() {
	  	$("h2").remove("!!!");
	  });

  $('a').click(function() {
  	$('.confirmBox').show(2000);
  });


});