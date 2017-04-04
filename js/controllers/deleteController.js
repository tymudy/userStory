( function () {

    angular.module('myApp')
           .controller('deleteController', deleteController);

           deleteController.$inject = ['$uibModalInstance', 'grid', 'row'];

           function deleteController ( $uibModalInstance, grid, row ) {
               
               var vm = this;

               vm.del = del;

               function del ( ) {
                   
               }
            }    

})();