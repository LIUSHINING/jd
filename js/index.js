/*
* @Author: 刘翔宇
* @Date:   2016-07-04 09:41:09
* @Last Modified by:   刘翔宇
* @Last Modified time: 2016-07-07 00:20:57
*/

'use strict';
window.onload = function () {
	search();
	slide();
	downTime();
}
// 搜索框 js
function search(){
	var topbar = document.querySelector(".topbar");
	var slideHeight = document.querySelector("#slide").offsetHeight;

	window.onscroll = function () {
		var scrollTop = document.body.scrollTop;
		var opcity = scrollTop / slideHeight;
		topbar.style.background = "rgba(201,21,25,"+ opcity +")";
	}
}
// 轮播图js
function slide(){
	var slideUl = document.querySelector("#slide").querySelectorAll("ul")[0];
	var index = 1;
	var time = setInterval(function(){
		index++;
		setTranslate(-index * slideWidth);
		setTransition()
	},2000)
	//给ul添加过渡完成事件
    //使用CSS3里面的一些高级事件 要使用h5的高级JS添加事件方式
    var points = document.querySelectorAll("ul")[1];
    var lis = points.querySelectorAll("li");
    slideUl.addEventListener('transitionend', function() {
        // 等过渡完成才偷偷回到第一张
        if (index >= 9) {
            index = 1;
            setTranslate(-index * slideWidth);
            //加过渡
            removeTransition()
        }else if(index <= 0){
        	index = 8;
        	setTranslate(-index * slideWidth);
            //加过渡
            removeTransition()
        }
        for (var i =0; i < lis.length; i++) {
        	lis[i].className ="";
        };
        lis[index - 1].className = "now";
    });

    // 左右滑动js
	var startX = 0;//开始的位置
	var moveX = 0;
	var endX = 0;//结束的时间
	var moveDistanceX  = 0;
	var distanceX = 0;//移动的距离

	// 滑动开始
	slideUl.addEventListener("touchstart",function (e) {
		startX = e.touches[0].clientX;//开始的位置
		clearInterval(time);//因为我们左右滑动的时候，定时器依旧运行，所以要清除定时器，滑动完成后要重启定时器
	});


	// 滑动中
	slideUl.addEventListener("touchmove",function (e) {
		moveX = e.touches[0].clientX;
		// console.log(moveX);
		moveDistanceX = moveX - startX;
		var x = moveDistanceX + -index * slideWidth;
		setTranslate(x);
		removeTransition();
	});


	 
	// 滑动结束
	slideUl.addEventListener("touchend",function (e) {
		endX = e.changedTouches[0].clientX;//结束的位置
		distanceX = endX - startX;//结束减去开始的结果，看正负
		// 如果拉伸的长度不超过三分之一，让它吸附回去
		if (Math.abs(distanceX) > slideWidth * 1/3) {
			if(distanceX > 0){
				index--;
				setTranslate(-index * slideWidth);
	
				setTransition()
			}else{
				index++;
				setTranslate(-index * slideWidth);
				setTransition()
			}
		}

		index = index;
		setTranslate(-index * slideWidth);
		setTransition()
		
		 //建议大家在重新设置定时器在清除一下确保没有问题
		clearInterval(time);
		time = setInterval(function(){
			index++;
			setTranslate(-index * slideWidth);
			setTransition()
		},2000)


	});
	// 封装部分
	var slideWidth = document.querySelector("#slide").offsetWidth;
	// 封装设置移动位置的函数
	function setTranslate(x){
		slideUl.style.transform = "translateX(" +x+ "px)";
	}
	// 封装过渡函数
	function setTransition(){
		slideUl.style.transition = "all 0.2s";
	}
	// 封装删除过渡
	function removeTransition(){
		slideUl.style.transition = "null";
	}
}
	
//秒杀倒计时
function downTime () {
	var time = 5 * 60 *60;
	var seckillTime = document.querySelectorAll(".seckill-time")[0];
	var spans = seckillTime.querySelectorAll("span");

	var timer = setInterval(function(){
		time--
		var h =time / 3600;//小时
		var m = time % 3600 / 60;//分钟
		var s = time % 60;//秒数
		spans[0].innerHTML = Math.floor(h / 10);
		spans[1].innerHTML = Math.floor(h % 10);
		spans[3].innerHTML = Math.floor(m / 10);
		spans[4].innerHTML = Math.floor(m % 10);
		spans[6].innerHTML = Math.floor(s / 10);
		spans[7].innerHTML = Math.floor(s % 10);
	},1000)
}


// function downTime() {
//     //1.总共有5个小时的倒计时
//     //2.每隔一秒要减一秒 小时得换成算成秒
//     //3.设置定时器每秒总时间--
//     //4.设置到倒计时标签上
//     var time = 5 * 60 * 60; //5个小时的总秒数
//     var seckillTime = document.querySelectorAll('.seckill-time')[0];
//     var spans = seckillTime.querySelectorAll('span');
//     var timer = setInterval(function() {
//         time--; //每秒总时间--
//         //设置到倒计时标签上
//         //1.设置时  分十位和个位
//         //2.设置分  分十位和个位
//         //3.设置秒  分十位和个位 
//         var h = time / 3600; //求小时 比如 7200 / 3600 == 2 小时
//         var m = time % 3600 / 60; //求分钟7300 % 3600 ==  100秒  / 60 == 1分 
//         var s = time % 60; //求秒100 % 60  == 40
//         //设置到倒计时标签
//         spans[0].innerHTML = Math.floor(h / 10); //求十位  23 /10  == 2
//         spans[1].innerHTML = Math.floor(h % 10); //求个位 23 % 10 == 3
//         spans[3].innerHTML = Math.floor(m / 10); //求十位  23 /10  == 2
//         spans[4].innerHTML = Math.floor(m % 10); //求个位 23 % 10 == 3
//         spans[6].innerHTML = Math.floor(s / 10); //求十位  23 /10  == 2
//         spans[7].innerHTML = Math.floor(s % 10); //求个位 23 % 10 == 3
//     }, 1000);
// }


