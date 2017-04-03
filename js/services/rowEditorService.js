( function () {

    angular.module('myApp')
           .service('rowEditorService', rowEditorService);

    rowEditorService.$inject = ['$rootScope', '$uibModal', 'estimationSchema'];

    function rowEditorService ( $rootScope, $uibModal ) {
        var service = {};
        service.editRow = editRow;
        
        function editRow ( grid, row ) {
            $uibModal.open({
                templateUrl: 'views/modal/editModal.html',
                controller: 'editController',
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

