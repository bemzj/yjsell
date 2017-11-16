$(function(){
	//查看个人信息
	$('.setting').on('click',function(){
		$('#personInfor').show().stop().animate({left:'0%'});
	});
	//返回主页
	$('.backPerson').bind('click',function(){
		$('#personInfor').stop().animate({left:'100%',},function(){
			$(this).hide();
		});
	});
	//退出登录
	$('.exit button').bind('click',function(){
		window.location.href = 'login.html';
	});
	//查看个人信息
	$('.about').on('click',function(){
		$('#about').show().stop().animate({left:'0%'});
	});
	//返回主页
	$('.backPerson1').bind('click',function(){
		$('#about').stop().animate({left:'100%',},function(){
			$(this).hide();
		});
	});
});