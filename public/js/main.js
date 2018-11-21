$(function(){	
	$('.product-slider').slick({
		dots: true,
		arrows: false,
		slidesToScroll: 2,
		slidesToShow: 4,

		responsive: [
 	   		{
    	  		breakpoint: 1201,
		      	settings: {
        			slidesToShow: 3
		      	}
    		},
 	   		{
    	  		breakpoint: 993,
		      	settings: { 
        			slidesToShow: 2
		      	}
    		},

 	   		{
    	  		breakpoint: 577,
		      	settings: { 
					slidesToScroll: 1,
        			slidesToShow: 1
		      	}
    		}
		]
	});
});

$(function(){
	$("#shop_line").mixItUp({

		selectors: {
			target:'.mix',
			filter:'.filter',
			sort:'.sort'
		},
		load: {
			filter:'all',
			sort:'myorder:asc'
		},

		controls: {
			enable:true,
			//activeClass:'on'
		},

		animation: {
			enable:true,
			effects:'scale fade',
			duration:200
		},

		/*layout: {
			//display:'block'
			shop_lineClass:'list'
		}*/



	});

});
$(document).ready(function(){
	$('.slider_products').slick({
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToScroll: 3,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]

	});

});

$(function(){
	$('.toggle-menu').on('click',function(){
		$('.menu').toggleClass('open');
	});
});