particlesJS.load('particles-js', "js/particles.json");

var app = angular.module("portfolio", ['ngAnimate']);

app.controller("main", function($scope) {
	// handle the loading screen fade
	$scope.loading = false;
	angular.element(function(){
		$scope.$apply(function(){
			$scope.loading = true;
		});
	});

	$scope.scrollTo = function() {
		scroller = document.getElementById("scroll");
		if (scroller.getBoundingClientRect().top > 0){
			setTimeout(function() {
				window.scrollTo(0,window.scrollY+25);
				$scope.scrollTo();
			}, 15);
		}
	}

	$scope.projects = projects;
	$scope.projectClicked = function(id){
		document.location.href = "projects.html?p=" + id;
	}

	$scope.getParameterByName = function (name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	$scope.queryNumShort = $scope.getParameterByName("p");
	if ($scope.queryNumShort != null) {
		$scope.projectClicked($scope.queryNumShort);
	}

	$scope.arrows = ["img/icons/whiteArrow.png", "img/icons/greenArrow.png"]
});
