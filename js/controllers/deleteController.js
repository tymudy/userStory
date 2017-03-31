( function () {

    angular.module('myApp')
           .controller('deleteController', addController);

           addController.$inject = ['$scope', 'gridOptionsService','$uibModalInstance'];

           function addController ( $scope, gridOptionsService, $uibModalInstance) {

                $scope.gridOptions = gridOptionsService.getGridOptions();
                
                $scope.deleteEstimation = function ( event ) {
                    gridOptionsService.delGridOptions( event );
                    $uibModalInstance.dismiss();
                }

                $scope.onCancel = function () {
                    $uibModalInstance.dismiss();
                }

                $scope.onClose = function () {
                    $uibModalInstance.close();
                }
 
            }    

})();