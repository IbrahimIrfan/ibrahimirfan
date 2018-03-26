var app = angular.module("portfolio", []);

app.controller("projects", function($scope) {
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
	$scope.currentArrow = 0;

    $scope.queryNum = getParameterByName("project");
    $scope.queryNum2 = getParameterByName("p");
    if ($scope.queryNum != null && window.location.hash.substr(1) == "modal") {
        i(parseInt($scope.queryNum));
    } else if ($scope.queryNum2 != null && window.location.hash.substr(1) == "modal") {
        i(parseInt($scope.queryNum2));
    }

});

app.filter("trustThis", ["$sce", function($sce){
	return function(text){
		return $sce.trustAsHtml(text);
	};
}]);
