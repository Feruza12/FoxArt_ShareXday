$(document).ready(function(){
  $.mask.definitions['9']='';
  $.mask.definitions['d']='[0-9]';
  $("#phone").mask("+998 (dd) ddd-dd-dd");


  $('.loader').css({
  	width: "100%"
  });

  setTimeout(function(){
  	$('.preloader').css({
  		left: "100vw"
  	});
  }, 2000);
});
