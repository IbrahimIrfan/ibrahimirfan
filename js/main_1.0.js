var app = angular.module("portfolio", ["ngSanitize"]);

app.controller("projects", function($scope) {
    $scope.projects = projects;
	$scope.projectClicked = function(id){
		$scope.currentProject = $scope.projects[id];
        document.location.href = "#modal";
		window.history.pushState("index", "Project", "/?project=" + id + "#modal");
	}
});
