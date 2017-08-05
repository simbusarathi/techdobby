(function () {
    define(['application'], function (app) {

        app.config(['$stateprovider', function ($stateprovider) {
            $stateprovider.state('Customer', {
                url: '/Customer',
                templateUrl: 'App/Customer/Partials/Customer.html',
                controller: 'CustomerController'
            });

            $stateprovider.state('Business', {
                url: '/Business',
                templateUrl: 'App/Business/Partials/Business.html',
                controller: 'BusinessController'
            });


        }]);



        app.controller('mycontroller', ['$scope', function ($scope) {

            $scope.message = "Hello World !";
        }]);
    });

})();

