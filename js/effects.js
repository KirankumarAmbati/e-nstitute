$(document).ready(function() {
	$('#our-img-1').hover(function(){
		$(this).css('border','#FC3 4px solid')
	},function(){
		$(this).css('border','none')
	});
	
	$('#our-img-2').hover(function(){
		$(this).css('border','#FC3 4px solid')
	},function(){
		$(this).css('border','none')
	});
	
	$('#our-img-3').hover(function(){
		$(this).css('border','#FC3 4px solid')
	},function(){
		$(this).css('border','none')
	});
	
	$('#our-img-4').hover(function(){
		$(this).css('border','#FC3 4px solid')
	},function(){
		$(this).css('border','none')
	});
});


/*$(document).ready(function() {
    $('#week-2-content').click(function(){
		$('#week-2').slideDown(200);});
});*/

$(document).ready(function() {
                $('#address').popover('animation')
            });
			
$(document).ready(function() {
    $('#log_message').slideDown();
});

$(document).ready(function(){
         
                $('#password').pwdMeter();
         
            });



//$(document).on('scroll',function(){
	//if($(document).scrollTop()>100){ $('#main-nav').removeClass('large').addClass('small')}
	//else {$('#main-nav').removeClass('small').addClass('large')}});