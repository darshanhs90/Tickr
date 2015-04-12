var time = 1000;
var i = 0;

var children = $("#rollout").children();

$($(children)[0]).animate({opacity: 1}, 2000);

setTimeout(function() {
	$($(children)[1]).animate({opacity: 1}, 2000);
}, 1000);

setTimeout(function() {
	$($(children)[2]).animate({opacity: 1}, 2000);
},2000);

setTimeout(function() {
	$($(children)[3]).animate({opacity: 1}, 2000);
},3000);

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


function showme2() {
	$(".page-header").animate({opacity: 1}, 1000);
	$(".socialEx").each(function() {
		var rand = Math.floor(Math.random()*1000);
		$(this).animate({opacity: 1}, 1500 + rand);
	});
}