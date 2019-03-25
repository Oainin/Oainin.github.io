$(function() {
	$("#pad").css({
		"width": W + "px",
		"height": H + "px"
	});
	$('#pad table').css({
		"width": W + "px",
		"height": H + "px"
	});
	$('#pad table td:odd').css({
		"text-align": "center"
	});
	if($('#file1').val() == '' && $('.name1').val() == '') {
					$('#submitbutton1').attr("disabled", true);
				} else {
					$('#submitbutton1').attr("disabled", false);
				}
				var num1 = 0;
				setInterval(function() {
					$(".colors1:eq(" + num1 + ")").css("display", "block");
					num1++;
					if(num1 > 7) {
						num1 = 0;
						$(".colors1").css("display", "none");
					}
				}, 1000);
});
		function onc1() {
				if($('#file1').val() == '' && $('.name1').val() == '') {
					$('#submitbutton1').attr("disabled", true);
					$('.colors1').css({
						"background": "#f00"
					});
				} else {
					$('#submitbutton1').attr("disabled", false);
					$('.colors1').css({
						"background": "#0f0"
					});
				}
				var files =$('#file1').val();
				$('.name1').val(files.substring(files.lastIndexOf('\\') + 1));
				$('#key1').val($('.name1').val());
			}
/*实时图片浏览*/
			function showPreview1(source1) {
				onc1();
				var file1 = source1.files[0];
				if(window.FileReader) {
					var fr = new FileReader();
					console.log(fr);
					fr.onloadend = function(e) {
						$('#filediv1').css({
							"background": "url(" + e.target.result + ")",
							"background-size": "100% 100%"
						});
					};
					fr.readAsDataURL(file1);
				}
			}

/*上传ajax*/
			function up1() {
				var f = new FormData($('.forms')[0]);
				$.ajax({
					type: "post",
					url: "http://upload-z2.qiniup.com/",
					data: f,
					async: false,
					cache: false,
					contentType: false,
					processData: false,
					success: function(returndata) {
						$('#warning1').text('上传成功');
						$('#yin').attr("src", "music/ok.mp3");
						$('#yin').attr("autoplay", "autoplay");
						$('#file1').val('');
						$('.name1').val('');
						$('#filediv1').css({
							"background": "url(img/imgadd.png) no-repeat",
							"background-size": "100% 100%"
						});
						$('#submitbutton').attr("disabled", false);
					},
					error: function(returndata) {
						$('#warning1').text('上传失败');
						$('#yin').attr("src", "music/erro.mp3");
						$('#yin').attr("autoplay", "autoplay");
						$('#submitbutton').attr("disabled", false);
					}
				});
				upmysqlname();
			}
			/*状态动画*/
			function textkey1() {
				$('#key1').val($('.name1').val());
				if($('.name1').val() == '' || $('#file1').val() == '') {
					$('#submitbutton1').attr("disabled", true);
					$('.colors1').css({
						"background": "#f00"
					});
				
				} else {
					$('#submitbutton1').attr("disabled", false);
				$('.colors1').css({
						"background": "#0f0"
					})
				}
			}