define([], function () {
    function ideasHomeController($scope, ideasDataSvc) {
        $scope.ideasName = 'To do List';
        $scope.gridOptions = {
            data: 'ideas',
            columnDefs: [
                { field: 'name', displayName: 'Name' },
                 { field: 'technologies', displayName: 'Technologies' },
                 { field: 'platform', displayName: 'Platforms' },
                 { field: 'status', displayName: 'Status' },
                 { field: 'devsNeeded', displayName: 'Vacancies' },
                { field: 'id', displayName: 'View Details', cellTemplate: '&lt;a ng-href="#/details/{{row.getProperty(col.field)}}"&gt;View Details&lt;/a&gt;' }
            ],
            enableColumnResize: true
        }

        ideasDataSvc.allideas().then(function (result) {
            $scope.ideas = result;
        });
    }
    ideasHomeController.$inject = ['$scope', 'ideasDataSvc'];
    return ideasHomeController;
});