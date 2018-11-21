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