var time = 1000;
var i = 0;

var children = $("#rollout").children();

$(".panel-right h3").text('.');

setTimeout(function() {
	$(".panel-right h3").text('..');
}, 2250);

setTimeout(function() {
	$(".panel-right h3").text('...');
}, 3500);

setTimeout(function() {
	$(".panel-right h3").html(556.76 + '<i class="fa fa-long-arrow-up"></i>');
	$('.panel-bottom').animate({opacity: 1}, 1000);
}, 5000);


$($(children)[0]).animate({opacity: 1}, 2000);

setTimeout(function() {
	$($(children)[1]).animate({opacity: 1}, 2000);
}, 3000);

setTimeout(function() {
	$($(children)[2]).animate({opacity: 1}, 2000);
},4000);

setTimeout(function() {
	$($(children)[3]).animate({opacity: 1}, 2000);
},5000);

function clickme() {
	var children = $(".profilerow").children(".col-md-4");
	$(".profilerow .page-header").animate({opacity: 1}, 1000);
	$($(children)[0]).animate({opacity: 1}, 1000);

	setTimeout(function() {
		$($(children)[1]).animate({opacity: 1}, 1000);
	}, 1000);

	setTimeout(function(){
		$($(children)[2]).animate({opacity: 1}, 1000);
	}, 2000);

}

var j = 0;

function showme2() {

	$(".rowfix h1").animate({opacity: 1}, 1000);
	$(".socialEx").each(function() {
		var rand = Math.floor(Math.random()*2000);
		setTimeout(function() {
			$($('.socialEx')[j]).animate({opacity: 1}, 1500);
			j++;
		}, rand);
	});
}