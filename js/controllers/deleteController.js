( function () {

    angular.module('myApp')
           .controller('deleteController', addController);

           addController.$inject = ['$uibModalInstance', 'grid', 'row'];

           function deleteController ( $uibModalInstance, grid, row ) {
               
               var vm = this;

               vm.del = del;

               function del ( ) {
                   
               }
            }    

})();