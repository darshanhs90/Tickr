$(".panel-right h3").text('.');

setTimeout(function() {
	$($(".panel-right h3")[0]).text('..');
}, 2250);

var bluemixcreds = {
	"concept_expansion": [
	{
		"name": "Concept Expansion-n1",
		"label": "concept_expansion",
		"plan": "concept_expansion_free_plan",
		"credentials": {
			"url": "https://gateway.watsonplatform.net/concept-expansion-beta/api",
			"services": [
				{
					"conceptexpansion": {
						"name": "conceptexpansion",
						"params": [
							{
								"name": "seed",
								"type": "json_list"
							},
							{
								"name": "label",
								"type": "string"
							},
							{
								"name": "dataset",
								"type": "string"
							}
						]
					}
				}
			],
			"username": "c5b75660-92a4-4d61-a32b-e89bdd1c800c",
			"password": "uoC8XVnk0wt4"
		}
	}
]
};
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

var twitterCreds = {
	"twitterinsights": [
		{
			"name": "IBM Insights for Twitter",
			"label": "twitterinsights",
			"plan": "Free",
			"credentials": {
				"port": "433",
				"username": "59517031a8c6038c9fefaaaf56f7dfda",
				"host": "cdeservice.mybluemix.net",
				"password": "Z3UxDsMH7A",
				"url": "https://59517031a8c6038c9fefaaaf56f7dfda:Z3UxDsMH7A@cdeservice.mybluemix.net"
			}
		}
	]
};
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
var mongCreds = {
	"mongodb-2.4": [
		{
			"name": "mongodb",
			"label": "mongodb-2.4",
			"plan": "100",
			"credentials": {
				"hostname": "23.246.199.73",
				"host": "23.246.199.73",
				"port": 10159,
				"username": "ca09d52a-b641-426b-ab63-541f693ce45a",
				"password": "db861932-04ce-406b-a5ae-f2c471d9a7a2",
				"name": "c3ba3908-e0a2-450e-8e78-482d54b97c59",
				"db": "db",
				"url": "mongodb://ca09d52a-b641-426b-ab63-541f693ce45a:db861932-04ce-406b-a5ae-f2c471d9a7a2@23.246.199.73:10159/db"
			}
		}
	]
};
setTimeout(function() {
	$($(".panel-right h3")[2]).html(125.45 + '<i class="fa fa-long-arrow-down"></i>');
	$('.panel-bottom').animate({opacity: 1}, 1000);
}, 6500);

function changeMe() {
	$(".panel-right h3").text('.');

	setTimeout(function() {
		$($(".panel-right h3")[0]).text('..');
	}, 2250);

	setTimeout(function() {
		$($(".panel-right h3")[0]).text('...');
	}, 3500);

	var alchemy = {
		"user-provided": [
		{
			"name": "AlchemyAPI",
			"label": "user-provided",
			"credentials": {
				"url": "https://access.alchemyapi.com",
				"dashboard_url": "http://www.alchemyapi.com/api",
				"apikey": "421252a13c23b113fc4f902ce742eca71e960c"
			}
		}
	]
	};
	setTimeout(function() {
		$($(".panel-right h3")[0]).html(532.98 + '<i class="fa fa-long-arrow-up"></i>');
		$('.panel-bottom').animate({opacity: 1}, 1000);
		$($(".panel-right strong")[0]).text("Past Price");

	}, 5000);

	setTimeout(function() {
		$($(".panel-right h3")[1]).text('..');
	}, 3250);

	setTimeout(function() {
		$($(".panel-right h3")[1]).text('...');
	}, 5000);

	setTimeout(function() {
		$($(".panel-right h3")[2]).html(127.85 + '<i class="fa fa-long-arrow-down"></i>');
		$($(".panel-right strong")[2]).text("Past Price");
		$('.panel-bottom').animate({opacity: 1}, 1000);
	}, 6500);

	setTimeout(function() {
		$($(".panel-right h3")[1]).html(45.78 + '<i class="fa fa-long-arrow-up"></i>');
		$('.panel-bottom').animate({opacity: 1}, 1000);
		$($(".panel-right strong")[1]).text("Past Price");

	}, 6000);

	setTimeout(function() {
		$($(".panel-right h3")[2]).text('..');
	}, 2250);

	setTimeout(function() {
		$($(".panel-right h3")[2]).text('...');
	}, 5000);

}

function showdamoney() {
	setTimeout(function() {
		$("#showmeda").animate({opacity: 1}, 2500);
	}, 1500);
}
