( function () {

    angular.module('myApp')
           .service('rowDeleteService', rowDeleteService);

    rowDeleteService.$inject = ['$rootScope', 'uibModal'];

    function rowDeleteService ( $rootScope, uibModal ) {
        var service = {};
        service.deleteRow = deleteRow;

        function deleteRow ( grid, row ) {
            $uibModal.open({
                templateUrl: "views/modal/deleteModal.html",
                controller: 'deleteController',
                controllerAs: 'vm',
                resolve: {
                    grid: function () { return grid; },
                    row: function () { return row; }
                }
            });
        }

    return service;
    }

}) ( );