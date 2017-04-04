( function () {

    angular.module('myApp')
           .factory('estimationSchema', estimationSchema);

           estimationSchema.$inject = ['$translate'];

    function estimationSchema ( $translate ) {
       
        this.form = {
            type: 'object',
            properties: {
                'description' : { type: 'string', title: $translate.instant('description') },
                'actor': { type: 'string', title: $translate.instant('actor') },
                'action': { type: 'string', title: $translate.instant('action') },
                'expectation': { type: 'string', title: $translate.instant('expectation') },
                'sp': { type: 'string', title: $translate.instant('sp') }
            }
        };
        this.columnDefs = [
            { field: 'description' , displayName: 'description', width: 250, headerCellFilter: "translate"} ,
            { field: 'actor', displayName: 'actor', width: 180, headerCellFilter: "translate"},
            { field: 'action', displayName: 'action', width: 180, headerCellFilter: "translate"},
            { field: 'expectation', displayName: 'expectation', width: 300, headerCellFilter: "translate"},
            { field: "sp", displayName: 'sp', width: 80, headerCellFilter: "translate"},
            { field: "edit", displayName: 'edit', cellTemplate:'/views/buttons/edit.html', headerCellFilter: "translate"},
            { field: "delete", displayName: 'delete', cellTemplate:'/views/buttons/delete.html', headerCellFilter: "translate"} 
        ];
            return this;

    }

}) ( );