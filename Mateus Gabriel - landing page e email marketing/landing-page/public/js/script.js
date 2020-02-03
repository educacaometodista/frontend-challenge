$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$("#nav").css({"background-color":"#fdfdfe", "transition":"0.5s", "border-bottom":"1px solid #153f67"});
			$("#nav a").css({"color":"#153f67"});
			$("#nav img").attr("src", "../img/logo.png");
			$("#btn-show-nav-sm").css({"background-color":"#153f67", "color":"#fdfdfe"});
		} else {
			$("#nav").css({"background-color":"transparent", "transition":"0.5s" , "border-bottom":"none"});
			$("#nav a").css({"color":"#fdfdfe"});
			$("#nav img").attr("src", "../img/logo-white.png");
			$("#btn-show-nav-sm").css({"background-color":"#fdfdfe", "color":"#17202a"});
		}

		if($(this).scrollTop() > 200){
			$("#box-trust-reasons").css({"opacity":"1", "transition":"0.5s", "margin-top":"-50px"});
		}else{
			$("#box-trust-reasons").css({"opacity":"0", "transition":"0.5s", "margin-top":"0px"});
		}

	});

	$("#btn-show-nav-sm").click(function(){
		if($("#box-links-nav-sm").css("display") == "none") {
			$("#box-links-nav-sm").css({"display":"flex"})
		}else{
			$("#box-links-nav-sm").css({"display":"none"})
		}
	});
});