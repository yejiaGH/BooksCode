$(function(){
	// 幻灯播放
	$("#faded").faded({
		speed: 500,            //指定播放速度
		crossfade: true,      //是否循环播放
		autoplay: 5000,        //自动播放时间
		autorestart: 3000,     //自动重新播放时间
		autopagination:false  //自动翻页
	});
})