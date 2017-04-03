( function () {

    angular.module('myApp')
           .controller('editController', editController);

    editController.$inject = ['$uibModalInstance', 'estimationSchema', 'grid', 'row'];

    function editController($uibmodalInstance, estimationSchema, grid, row ) {
        
        var vm = this;
        
        vm.schema = estimationSchema.form;
        vm.entity = angular.copy(row.entity);
        vm.form = ['*'];

        vm.save = save;
        
        function save ( ) {
            // extend(dest, src) - copy fron src to dest and return a reference to dest obj
            row.entity = angular.extend(row.entity, vm.entity);
            $uibmodalInstance.close(row.entity);
        }
    }


}) ();

