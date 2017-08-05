(function () {
    requirejs.config({
        baseUrl: '/',
        paths: {
            'angular': 'Scripts/angular.min',
            'jquery': 'Scripts/jquery-1.11.3.min',
            'bootstrap': 'Scripts/bootstrap.min',
            'application': 'App/app',
            'route': 'App/route',
            'ui-router': 'Scripts/angular-ui-router.min'
        },
        shim: {
            'bootstrap': { deps: ['jquery'] },
            'application': {
                deps: ['angular', 'bootstrap']
            },
            'ui-router': { deps: ['angular'] },
        }
    });


    define(['route'], function (route) {

        require(route, function () {
            angular.bootstrap(document, ['MultilingualApp']);
        });
    });


})();
