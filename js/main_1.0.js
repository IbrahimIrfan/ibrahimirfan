particlesJS.load('particles-js', "js/particles.json");

var app = angular.module("portfolio", ['duScroll', 'ngAnimate']);

app.controller("projects", function($scope) {
	// handle the loading screen fade
	$scope.loading = false;
	angular.element(function(){
		$scope.$apply(function(){
			$scope.loading = true;
		});
	});

	$scope.checkVisible = function (elm) {
		var rect = elm.getBoundingClientRect();
		var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
		return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
	}

	//$scope.fades = angular.element('.fadeIn');
	//angular.forEach(fades, function(el){
		//if ($scope.checkVisible(angular.element(el))){
			//sr.reveal(".fadeIn", { container: 'body', distance: '30px' });
		//}
	//})

	$scope.projects = projects;
	$scope.projectClicked = function(id){
		$scope.currentProject = $scope.projects[id];
		document.location.href = "#modal";
		window.history.pushState("index", "Project", "/?project=" + id + "#modal");
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

	$scope.arrows = ["img/icons/whiteArrow.png", "img/icons/greenArrow.png"]

	$scope.queryNum = $scope.getParameterByName("project");
	$scope.queryNumShort = $scope.getParameterByName("p");
	if ($scope.queryNum != null && window.location.hash.substr(1) == "modal") {
		$scope.projectClicked(parseInt($scope.queryNum));
	} else if ($scope.queryNumShort != null && window.location.hash.substr(1) == "modal") {
		$scope.projectClicked(parseInt($scope.queryNumShort));
	}
});

app.filter("trustThis", ["$sce", function($sce){
	return function(text){
		return $sce.trustAsHtml(text);
	};
}]);
