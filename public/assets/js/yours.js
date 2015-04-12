$(".panel-right h3").text('.');

setTimeout(function() {
	$($(".panel-right h3")[0]).text('..');
}, 2250);

setTimeout(function() {
	$($(".panel-right h3")[0]).text('...');
}, 3500);

setTimeout(function() {
	$($(".panel-right h3")[0]).html(556.76 + '<i class="fa fa-long-arrow-up"></i>');
	$('.panel-bottom').animate({opacity: 1}, 1000);
}, 5000);

setTimeout(function() {
	$($(".panel-right h3")[1]).text('..');
}, 3250);

setTimeout(function() {
	$($(".panel-right h3")[1]).text('...');
}, 5000);

setTimeout(function() {
	$($(".panel-right h3")[1]).html(49.67 + '<i class="fa fa-long-arrow-up"></i>');
	$('.panel-bottom').animate({opacity: 1}, 1000);
}, 6000);

setTimeout(function() {
	$($(".panel-right h3")[2]).text('..');
}, 2250);

setTimeout(function() {
	$($(".panel-right h3")[2]).text('...');
}, 5000);

setTimeout(function() {
	$($(".panel-right h3")[2]).html(125.45 + '<i class="fa fa-long-arrow-down"></i>');
	$('.panel-bottom').animate({opacity: 1}, 1000);
}, 6500);

