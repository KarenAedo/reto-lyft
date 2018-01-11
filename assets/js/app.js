$(document).ready(function(){
	}); //.ready


  $(function(){
   setTimeout(function() {
     $('#splash').fadeOut(500);
   }, 1000);
  });
  $(function(){
    setTimeout(function() {
      $('.firstSection').removeClass('hidden');
    }, 1000);
  });

 	$('#btn-singup').click(function(){
  	$('.firstSection').addClass('hidden');
  	$('.signUp').removeClass('hidden');
  });

 	$('#btn-singup-2').click(function(){
  	$('.signUp').addClass('hidden');
  	$('.verifyPhone').removeClass('hidden');
  });

  $('#btn-verify').click(function(){
  	$('.verifyPhone').addClass('hidden');
  	$('.signUpTwo').removeClass('hidden');
  });

  $('#btn-signUpTwo').click(function(){
  	$('.signUpTwo').addClass('hidden');
  	$('.finalOk').removeClass('hidden');
  });




