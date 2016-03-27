
$(function(){
	      $('.navbar-nav > li').hover(function(){
			       $(this).find('.dropdown-menu').finish().slideDown(300);  
		  },function(){
			       $(this).find('.dropdown-menu').finish().slideUp(0);  
		  });
		  
});


// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});
	
