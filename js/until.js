$(function(){
/*	var qrcode = new QRCode(document.getElementById("weixin"), {
	width : 100,
	height : 100
	
});
qrcode.makeCode('https://u.wechat.com/EIiUGYZJyzN_y-NhJhWFIss');*/
   var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s); 
});
