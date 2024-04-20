var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;

	if (currentScrollPos==0) {
		document.getElementById("header").style.boxShadow = "0px 0px 0px 0px";
	}

	else{
		document.getElementById("header").style.boxShadow = "0px 0px 0px 2.2px #181B1D";
	}
}

$(document).ready(function(){
  $(window).scroll(function () {
	  if ($(this).scrollTop() > 50) {
		  $('.back-to-top').fadeIn();
	  }
	  else {
		  $('.back-to-top').fadeOut();
	  }
	});
  $('#back-to-top').click(function () {
	  $('body,html').animate({
	  scrollTop: 0
	  }, 400);
		  return false;
	  });
 });

  $(document).ready(function(){
	$(".footer-subscribe-button").click(function(){
	  $(".footer-subscribe-button").css("margin-top", "-4px");
	});
  });

  $('.footer-subscribe-button').click(function() {
	var email=$('.footer-subscribe-input').val();
   if(email==""){
	   $('.footer-subscribe-error').html(" Enter Your Email Address !");
	   $('.footer-subscribe-error').show();
	   $('.footer-subscribe-error').css("color", "#FF3547");
   }
   else {
	   $('.footer-subscribe-error').html("Thanks <br> The form was sent successfully!");
	   $('.footer-subscribe-error').css("color", "#00C851");
	   $('.footer-subscribe-error').show();
   }
  });

  $('.login-btn').click(function() {
	var loginInput=$('.login-input').val();
   if(loginInput==""){
	   $('.login-input').css("border-color", "#FF3547");
   }
   else {
	$('.login-input').css("border-color", "#CED4DA");
   }
  });

  $('.register-btn').click(function() {
	var loginInput=$('.register-input').val();
   if(loginInput==""){
	   $('.register-input').css("border-color", "#FF3547");
   }
   else {
	$('.register-input').css("border-color", "#CED4DA");
   }
  });

  $('.contact-button').click(function() {
	var loginInput1=$('.contact-input').val();
	var loginInput2=$('.contact-input-2').val();
	var loginInput3=$('.contact-input-3').val();
	var loginInput4=$('.contact-input-4').val();

	if(loginInput1==""){
		$('.contact-input').css("border-color", "#FF3547");
	}

	else if(loginInput1==""){
	    $('.contact-input-1').css("border-color", "#FF3547");
	}

   	else if(loginInput2==""){
	    $('.contact-input-2').css("border-color", "#FF3547");
	}
	
	else if(loginInput3==""){
	    $('.contact-input-3').css("border-color", "#FF3547");
	}
	 
	else if(loginInput4==""){
	    $('.contact-input-4').css("border-color", "#FF3547");
   	}

   else {
	$('.contact-input').css("border-color", "#CED4DA");
   }
  });

$(document).ready(function() {

    $('.collapse').on('shown.bs.collapse', function () {
		$(this).prev().addClass('active-acc');
		
    });

    $('.collapse').on('hidden.bs.collapse', function () {
		$(this).prev().removeClass('active-acc');
	});

});

$(".nav-search").click(function() {
	var searchInput=$(".modal-search-input").val();
	if(searchInput.length > 0){
		$(".modal-search-input-label").css({"margin-top": "-70px", "font-size": "15px"});
	}
	else{
		$(".modal-search-input-label").css({"margin-top": "-55px", "font-size": "30px"});
	}
});