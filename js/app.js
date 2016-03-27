(function(angular) {
	'use strict';
	var g2gApp = angular.module('g2gApp', ['ngAnimate', 'ngRoute']);
	g2gApp.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'home.html',
			controller: 'mainController'
		})
		.when('/about', {
			templateUrl: 'About_Us.html',
			controller: 'aboutController'
		})
		.when('/products/:pid/:cid', {
			templateUrl: 'product-list.html',
			controller: 'productListController'
		})
		.when('/product/:url', {
			templateUrl: 'product.html',
			controller: 'productController'
		})
		.when('/services', {
			templateUrl: 'Services.html',
			controller: 'servicesController'
		})
		.when('/support/:id', {
			templateUrl: 'support.html',
			controller: 'supportController'
		})
		.otherwise({redirectTo: '/'});
	});
	
	g2gApp.controller('mainController', function($scope) {});
	g2gApp.controller('aboutController', function($scope) {});
	g2gApp.controller('productListController', function($scope, $routeParams){
		$scope.products = [
			{pid:'letter', cid:'trico', img: 'channel_letter/TriCo.jpg', href: 'TriCo-Series.html'},
			{pid:'letter', cid:'aurora', img: 'channel_letter/aurora-i-gen-iv.jpg', href: 'Aurora-I-GenIV.html'},
			{pid:'letter', cid:'aurora', img: 'channel_letter/aurora-mini.jpg', href: 'Aurora-mini.html'},
			{pid:'letter', cid:'aurora', img: 'channel_letter/aurora-iii-gen-i.jpg', href: 'Aurora-III-GenI.html'},
			{pid:'letter', cid:'aurora', img: 'channel_letter/aurora-sv-ii.jpg', href: 'Aurora-sv.html'},
			{pid:'letter', cid:'aurora', img: 'channel_letter/aurora-r.jpg', href: 'Aurora-red.html'},
			{pid:'letter', cid:'nox', img: 'channel_letter/g2g-nox.jpg', href: 'NOX-Series.html'},
			{pid:'letter', cid:'anpro', img: 'channel_letter/g2g-anpro.jpg', href: 'AnPro-Series.html'},
			{pid:'letter', cid:'wow', img: 'channel_letter/g2g-wow.jpg', href: 'WOW-Series.html'},
			
			{pid:'sign', cid:'side', img: 'sign_box/SiDe.jpg', href: 'Side-Lighting-System.html'},
			{pid:'sign', cid:'array', img: 'sign_box/Array.jpg', href: 'ArRay-Lighting-System.html'},
			{pid:'sign', cid:'sparx', img: 'sign_box/Spart_X.jpg', href: 'SparX-Lighting-System.html'},
			{pid:'sign', cid:'trident', img: 'sign_box/Trident_DF.jpg', href: 'Trident-Lighting-System.html'},
			{pid:'sign', cid:'trident', img: 'sign_box/Trident_SF.jpg', href: 'Trident-Lighting-System.html'},
			{pid:'sign', cid:'trident-stick', img: 'sign_box/Trident-stick.jpg', href: 'Trident-Stick-Lighting-System.html'},
			
			{pid:'wall', cid:'i_series', img: 'wall_washer/lww-1c-36p.jpg', href: 'Wall-Washer-I-Series.html'},
			{pid:'wall', cid:'ii_series', img: 'wall_washer/lww-2-36p-72p-144p.jpg', href: 'Wall-Washer-II-Series.html'},
			{pid:'wall', cid:'v_series', img: 'wall_washer/lww-5-18p-36p.jpg', href: 'Wall-Washer-V-Series.html'},
			{pid:'wall', cid:'vi_series', img: 'wall_washer/lww-6-18p-36p.jpg', href: 'Wall-Washer-Ⅵ-Series.html'},
			{pid:'wall', cid:'vii_series', img: 'wall_washer/lww-7-36p-72p.jpg', href: 'Wall-Washer-Ⅶ-Series.html'},
			{pid:'wall', cid:'viii_series', img: 'wall_washer/lww-8a-144p.jpg', href: 'Wall-Washer-Ⅷ-Series-LWW-8A-144P.html'},
			{pid:'wall', cid:'viii_series', img: 'wall_washer/lww-8b-108p.jpg', href: 'Wall-Washer-Ⅷ-Series-LWW-8B-108P.html'},
			{pid:'wall', cid:'viii_series', img: 'wall_washer/lww-8c-108p-216p.jpg', href: 'Wall-Washer-Ⅷ-Series-LWW-8C-108P216P.html'},
			
			{pid:'flood', cid:'i_series', img: 'Flood_light/10W.jpg', href: 'Flood-Light-I-Series.html'},
			{pid:'flood', cid:'ii_series', img: 'Flood_light/20W.jpg', href: 'Flood-Light-II-Series.html'},
			{pid:'flood', cid:'iii_series', img: 'Flood_light/30W.jpg', href: 'Flood-Light-III-Series.html'},
			{pid:'flood', cid:'v_series', img: 'Flood_light/50W.jpg', href: 'Flood-Light-V-Series.html'},	
		];
		
		$scope.pid = $routeParams.pid;
		$scope.cid = $routeParams.cid;
		
	    	$scope.filtered = $scope.products.filter(function(item) {
			return item['pid'] == $scope.pid;
		});
	    		
		$scope.filterProducts = function(pid, cid) {
	    		if(pid && !cid) {
	    			$scope.filtered = $scope.products.filter(function(item) {
		            return item['pid'] == pid;
		        });
	    		}
	    		else if(pid && cid)
	    		{
	    			$scope.filtered = $scope.products.filter(function(item) {
	            		return item['pid'] == pid && item['cid'] == cid;
	        		});
	    		}
	    		
	    		$scope.pid = pid;
			$scope.cid = cid;
			
	    };
	});
	
	g2gApp.controller('productController', function($scope, $routeParams) {
		$scope.templateUrl = $routeParams.url;
	});
	
	g2gApp.controller('supportController', function($scope, $routeParams) {
		$scope.id = $routeParams.id;
		switch($scope.id)
		{
			case 'download':
				$scope.templateUrl = 'tool&download.html';
				break;
			case 'news':
				$scope.templateUrl = 'News&Event.html';
				break;
			case 'contact':
				$scope.templateUrl = 'Contact-Us.html';
				break;
			case 'video':
				$scope.templateUrl = 'installation-video.html';
				break;
		}	
	});
	

	
})(window.angular);