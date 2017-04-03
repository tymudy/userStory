( function () {

    angular.module('myApp')
           .factory('estimationSchema', estimationSchema);

           estimationSchema.$inject = ['$translate'];

    function estimationSchema ( $translate ) {
       
        this.form = {
            type: 'object',
            properties: {
                'description' : { type: 'string', title: "$translate.instant('description')" },
                'actor': { type: 'string', title: "$translate.instant('actor')" },
                'action': { type: 'string', title: "$translate.instant('action')" },
                'expectation': { type: 'string', title: "$translate.instant('expectation')" },
                'sp': { type: 'string', title: "$translate.instant('sp')" }
            }
        };
        this.columnDefs = [
            { field: 'description' , displayName: $translate.instant('description'), width: 250, headerCellFilter: "translate"} ,
            { field: 'actor', displayName: $translate.instant('actor'), width: 180, headerCellFilter: "translate"},
            { field: 'action', displayName: $translate.instant('action'), width: 180, headerCellFilter: "translate"},
            { field: 'expectation', displayName: $translate.instant('expectation'), width: 300, headerCellFilter: "translate"},
            { field: "sp", displayName: $translate.instant('sp'), width: 80, headerCellFilter: "translate"},
            { field: "edit", displayName: $translate.instant('edit'), cellTemplate:'/views/buttons/edit.html', headerCellFilter: "translate"},
            { field: "delete", displayName: $translate.instant('delete'), cellTemplate:'/views/buttons/delete.html', headerCellFilter: "translate"} 
        ];
            return this;

    }

}) ( );