$(function(){
	
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
	
});