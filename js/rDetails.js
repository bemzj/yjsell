$(function(){
	$('#wl .backP').bind('click',function(){
		$('#wl').stop().animate({left:"100%"},500,function(){
			$(this).hide();
		});
	});
	$('#write').bind('click',function(){
		$('#wl').show().stop().animate({left:"0%"},500);
	});
	$('#problem .backP').bind('click',function(){
		$('#problem').stop().animate({left:"100%"},500,function(){
			$(this).hide();
		});
	});
	$('#exchange').bind('click',function(){
		$('#problem').show().stop().animate({left:"0%"},500);
	});
	
})