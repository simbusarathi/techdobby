define([], function () {
    function config($routeProvider) {
        $routeProvider.when('/home', { templateurl: "templates/home.html", controller: "ideasHomeController" })
        .when('details/:id', { templateurl: 'templates/ideaDetails.html', controller: 'ideaDetailsController' })
        .otherwise({ redirectTo: '/home' });
    }
    config.$inject = ['$routeProvider'];
    return config;
});





