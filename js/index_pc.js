var audio1 = document.createElement('audio');
/*var H=$(window).height();
var W=$(window).width();*/
var strurl = window.location.search;
var USERNAME = strurl.substring(strurl.indexOf('=') + 1, strurl.indexOf('&password'));
var PASSWORD = strurl.substring(strurl.indexOf('d=') + 2);
$(function() {
	//$('#loginorreg').slideDown();
	document.oncontextmenu=function(e){return false;}
	$('body').css({
		"background": "#66ccff"
	});
	$('#header').css({
		"width": W + "px",
		"height": H / 14 + "px",
		"display": "none",
		"background": "rgba(0,0,0,0.3)"
	});
	$('#foot').css({
		"width": W + "px",
		"height": H / 6 + "px"
	});
	$('#centercontent').css({
		"width": W + "px",
		"height": "0px",
		"background": "rgba(255,255,255,0.7)",
		"display": "none"
	});
	$('#content').css({
		"width": W + "px",
		"height": "auto",
		"display": "none"
	});
	$('#topcontent').css({
		width: W + "px",
		height: H - H / 6 + "px",
		"margin": "0 auto"

	});
	$('#toptop').css({
		width: W + "px",
		height: H - H / 7 + "px",
		"margin": "0 auto",
		"background": "rgba(255,255,255,0.7)"

	});
	$('#comlogo').css({
		"margin-top": (H - H / 6) / 4 + "px"

	});
	/*$('#comlogo1').css({
		"margin-top": (H - H / 6) / 2 + "px"

	});*/
	$('#bottomcontent').css({
		width: W + "px",
		height: H + "px",
		"margin": "0 auto",
		"background-color": "rgba(255,255,255,0.7)"

	});
	$('#centercontent1').css({
		width: W + "px",
		height: 100 + "px",
		"margin": "0 auto"
	});

	$('#youimg').css({
		"width": "10vw",
		"text-align": "center",
		"display": "inline-block",
		"float": "left"
	});
	$('#loginorreg').css("display", "none");
	$('#nav').css("line-height", H / 14 + "px");
	$("#header").slideDown(2000);
	$('body').mousedown(function(e) {
		if(e.which == 3) {
			var xx = e.pageX;
			var yy = e.pageY;
			//alert(xx+yy);s

			$('#r_m').css({
				"width": "150px",
				"height": "200px",
				"position": "absolute",
				"top": yy + "px",
				"left": xx + "px",
				"z_index": "1",
				"display": "block",
				"background": "#999",
				"border-radius": "10px"
			});

		}
	});
	$('#r_m').mouseleave(function() {
		$('#r_m').css("display", "none");
	});
	var onum = 0;
	setInterval(function() {

		var snum1 = Math.floor(Math.random() * 255);
		var snum2 = Math.floor(Math.random() * 255);
		var snum3 = Math.floor(Math.random() * 255);
		if(onum > 5) {
			onum = 0;
		}
		$('body').css('background', 'rgb(' + snum1 + ',' + snum2 + ',' + snum3 + ')');

		onum++;

	}, 10000);

	setInterval(function() {
		if($('#logoleft').width() == W) {
			$('#logoright').attr("src", s[num1]);
			$('#logoleft').animate({
				width: "0"
			}, 1000);
			$('#logoright').animate({
				width: W + "px"
			}, 1000);
		} else {
			$('#logoleft').attr("src", s[num1]);
			$('#logoright').animate({
				width: "0"
			}, 1000);
			$('#logoleft').animate({
				width: W + "px"
			}, 1000);
		}
		num1++;

		if(num1 > s.length) {
			num1 = 0;
		}
	}, 5000);
	$('#content').slideDown();
	$('#phone').click(function() {
		$('#content').slideUp();
		$('#centercontent').css("height", H - H / 14 - H / 6 + "px");
		$('#centercontent').slideDown();

	});

	var cnum = 0;
	var snum = 0;
	setInterval(function() {
		var snum1 = Math.floor(Math.random() * 255);
		var snum2 = Math.floor(Math.random() * 255);
		var snum3 = Math.floor(Math.random() * 255);
		if(cnum > 5) {
			cnum = 0;
		}
		$('#logonums span:eq(' + cnum + ')').css('color', 'rgb(' + snum1 + ',' + snum2 + ',' + snum3 + ')');

		cnum++;
	}, 1000);
	if(W < 1024) {
		$('#pc').html('');
	}
	$('#contoptext').html("<h3>网站信息</h3><p>QQ&微信：591946571</p><p>博客(blog)：<a href='http://blog.oainin.com/'>http://blog.oainin.com/</a></p><p>电子邮箱：<a href='Mailto:oainin520@gmail.com?CC=in@oainin.com&BCC=in@oainin.com&Subject=来自Oainin主网页的问题&Body=请在这里输入你遇到的问题'>oainin520@gmail.com</a></p><p></p>");

	$('#conbottext').html("<embed src='https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=h0026kk8n5x&auto=1' width='100%' height='400' type='application/x-shockwave-flash'   ></embed>");
	//$('#conbottext embed').stop();
	/*$('#conbottext').html("<video src='https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=h0026kk8n5x&auto=1' width='100%' height='auto' controls='controls'   loop='loop' type='application/x-shockwave-flash' ></video>  <div class='alert alert-warning alert-dismissable' style='width:100%;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>警告！当前资源服务器暂时停止！。</div>");
	 */
	//一段正则，匹配所有_min.的图片src属性
	/*	var test = /_min\./
		//遍历所有的图片节点
		$("img").each(function(index,obj){	
			if(test.test($(this).attr("src"))){
				var reSrc = $(this).attr("src").replace(test,".");
				$(this).attr("src",reSrc)
			}		
		});*/
	upServer();
	//startAnimation();
	for(var i = 0; i < imgtotal; i++) {
		img6[i] = new Image();
		img6[i].src = s[i];
		img6[i].onload = function() {
			flag2++;
			if(flag2 == imgtotal) {
				$('#zemujindu').css("width", "100%");
				$('#zemu').css("display", "none");
				$('#pc').css("display", "block");
			}
		}
	}
	$('#oaininzemu p span').click(function() {
		$('#oaininzemu div').val('');
		$('#oaininzemu').slideUp();
	});
$.ajax({
	type:"get",
	url:"http://io.oainin.com/loginDo",
	async:true,
	success:function(e){
		console.log(e);
	}
});
bottomcontentio();
});
$(window).scroll(function() {
	if($(window).scrollTop() > H) {
		//$('#videoElement').autoplay='autoplay';
		//$('#conbottext embed').play();
	}
});

function upServer() {
	$.ajax({
		type: "get",
		url: "http://io.oainin.com/text",
		async: true,
		success: function(str) {
			//alert(str);
			//var	strs = JSON.parse(str); 
			console.log(str[0].top);
			//	console.log(strs.top);
			$('#contoptext').html(str[0].top);
			$('#conbottext').html(str[0].bottom + "<script>if(flvjs.isSupported()){var videoElement = document.getElementById('videoElement');var flvPlayer = flvjs.createPlayer({type: 'flv',url: 'http://video.oainin.com/live/Oainin.flv'});flvPlayer.attachMediaElement(videoElement);flvPlayer.load();}</script>");
			$('#wornning').html(str[0].worning);
		},
		error: function(er) {

		}
	});
}

function sing(str) {

	audio1.src = 'http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&text=' + str;
	audio1.load();
	audio1.play();
}
document.onreadystatechange = se;

function se() {
	if(document.readyState == "interactive") {
		$('#pc').css("display", "none");
		sing('哦爱您网页正在加载中。。。。');
		$('#zemujindu').css("width", "50%");
		var num = 50;
		var timer = setInterval(function() {
			num++;
			$('#zemujindu').css("width", num + "%");
			if(num >= 99) {
				window.clearInterval(timer);
				s
			}
		}, 1000);
	} else if(document.readyState == "complete") {
		sing('欢迎访问哦爱您网页');

	} else {
		$('#pc').css("display", "none");
	}
}

$(window).scroll(function() {
	if($(window).scrollTop() >= 100) {
		$('#loginorreg').css("display", "none");

	} else {
		//$('#loginorreg').slideDown();

	}
});

function bottomcontentio(){
	$.ajax({
		type: "get",
		url: "https://blog.oainin.com/api1/oaininbottomio.php",
		async: true,
		success: function(e) {
			$('#bottomcontent2').html(e);
		}
		
	});
}

function regoainin() {

	window.location.href = "reg.html?username=" + $('.username').val() + "&password=" + $('.password').val();
}

function oainin_zemu(a) {
	$('#oaininzemu').css({
		"width": "400px",
		"height": "300px",
		"position": "absolute",
		"top": "50%",
		"left": "50%",
		"margin-left": "-200px",
		"margin-top": "-150px",
		"background": "rgba(210,210,210,0.9)",
		"display": "block"
	});
	$('#oaininzemu div').html(a);
}
/*  */
function oainin_zemu_close() {
	$('#oaininzemu div').val('');
	$('#oaininzemu').slideUp();
}
// 登录请求
function loginoainin() {

	$.ajax({
		type: "post",
		url: "https://blog.oainin.com/api1/logindb.php",
		async: true,
		data: "username=" + $('.username').val() + "&password=" + $('.password').val(),
		success: function(e) {
			console.log(e[0].username);
			if(e[0].username != null) {
				oainin_zemu("<p style='text-align:center;width:100%;display:block;line-height:280px;color:green;'>" + e[0].username + "登陆成功！三秒关闭!</p>");
				setTimeout(function() {
					oainin_zemu_close();
						window.location.reload();
				}, 3000);
			
			} else {
				oainin_zemu("<p style='text-align:center;width:100%;display:block;line-height:280px;color:red;'>登陆失败！三秒关闭!</p>");
				setTimeout(function() {
					oainin_zemu_close();
				}, 3000);
			}

		},
		error:function(e){
			oainin_zemu("<p style='text-align:center;width:100%;display:block;line-height:280px;color:red;'>" + e + "登陆失败！三秒关闭!</p>");
				setTimeout(function() {
					oainin_zemu_close();
				}, 3000);
		}
	});

}
