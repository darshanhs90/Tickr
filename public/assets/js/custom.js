/*------------------------------------------------------
    Author : www.webthemez.com
    License: Commons Attribution 3.0
    http://creativecommons.org/licenses/by/3.0/
---------------------------------------------------------  */

(function ($) {
    "use strict";
    var mainApp = {

        initFunction: function () {
            /*MENU 
            ------------------------------------*/
            $('#main-menu').metisMenu();
			
            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });


	        /* MORRIS DONUT CHART
	         ----------------------------------------*/
	        Morris.Donut({
		        element: 'morris-donut-chart',
		        data: [{
			        label: "Download Sales",
			        value: 12
		        }, {
			        label: "In-Store Sales",
			        value: 30
		        }, {
			        label: "Mail-Order Sales",
			        value: 20
		        }],
		        colors: [
			        '#A6A6A6','#2DAFCB',
			        '#F98484'
		        ],
		        resize: true
	        });
	        Morris.Donut({
		        element: 'morris-donut-chart2',
		        data: [{
			        label: "Download Sales",
			        value: 12
		        }, {
			        label: "In-Store Sales",
			        value: 30
		        }, {
			        label: "Mail-Order Sales",
			        value: 20
		        }],
		        colors: [
			        '#A6A6A6','#2DAFCB',
			        '#F98484'
		        ],
		        resize: true
	        });
        },

        initialization: function () {
            mainApp.initFunction();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.initFunction();
    });

}(jQuery));
