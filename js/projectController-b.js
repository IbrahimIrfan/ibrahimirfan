var app = angular.module("projects", ['ngAnimate']);

app.controller("main", function($scope) {
	// handle the loading screen fade
	$scope.loading = false;
	angular.element(function(){
		$scope.$apply(function(){
			$scope.loading = true;
		});
	});

	$scope.goBack = function() {
		window.location.replace("http://ibrahimirfan.com");
	}

	$scope.projects = projects;
	$scope.projectClicked = function(id){
		$scope.currentProject = $scope.projects[id];
		document.location.href = "?p=" + id;
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

	$scope.queryNum = $scope.getParameterByName("project");
	$scope.queryNumShort = $scope.getParameterByName("p");
	if ($scope.queryNum != null) {
		$scope.currentProject = $scope.projects[parseInt($scope.queryNum)];
		document.title = $scope.currentProject.title;;
	} else if ($scope.queryNumShort != null) {
		$scope.currentProject = $scope.projects[parseInt($scope.queryNumShort)];
		document.title = $scope.currentProject.title;;
	} else {
		// todo: error message
	}
});

app.filter("trustThis", ["$sce", function($sce){
	return function(text){
		return $sce.trustAsHtml(text);
	};
}]);
