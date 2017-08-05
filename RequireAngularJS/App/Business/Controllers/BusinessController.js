(function () {

    define(['application'], function (app) {

        app.controller('BusinessController', ['$rootScope', function ($rootScope) {

            $rootScope.PageSubTitle = "I'am from business content";
        }]);
    })
})();
