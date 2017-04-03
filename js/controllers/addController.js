( function () {

    angular.module('myApp')
           .controller('addController', addController);

           addController.$inject = ['$scope', 'gridOptionsService','$uibModalInstance'];

           function addController ( $scope, gridOptionsService, $uibModalInstance) {

                $scope.storyPoints = ['0','0.5','1','2','3','5','8','13','20','40','100'];
                $scope.sp="";
                $scope.newEstimation = {};
                $scope.placeholder = "";

                $scope.gridOptions = gridOptionsService.getGridOptions();
                $scope.gridHeader = $scope.gridOptions.columnDefs.slice(0, -3);
                
                $scope.addEstimation = function ( ) {
                    gridOptionsService.updGridOptions( $scope.newEstimation );
                   // $scope.newEstimation = {}
                    $uibModalInstance.dismiss();
                }

                $scope.hidePlaceholder = function ( event ) {
                    $scope.placeholder = event.target.placeholder;
                    event.target.placeholder = "";
                }

                $scope.showPlaceholder = function ( ) {
                    event.target.placeholder = $scope.placeholder;
                }

                $scope.onCancel = function () {
                    $uibModalInstance.dismiss();
                }

                $scope.onClose = function () {
                    $uibModalInstance.close();
                }
 
            }    

})();