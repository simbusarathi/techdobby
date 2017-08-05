define([], function () {

    var myController = function ($scope) {
        debugger;
        $scope.message = "Requirejs integrated successfully";
    };

    myController.$inject = ['$scope'];
    return myController;
})