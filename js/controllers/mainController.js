( function () {
    
    angular.module('myApp')
           .controller('mainController', mainController);

        mainController.$inject = ['$scope', '$translate', '$translateLocalStorage', 'gridOptionsService', '$uibModal', 'estimationSchema','rowEditorService'];

        function mainController( $scope, $translate, $translateLocalStorage, gridOptionsService, $uibModal, estimationSchema, rowEditorService) {
            
            var vm = this; 
            
            $scope.langs = ['en', 'pt'];
            $scope.data = $translateLocalStorage.get('NG_TRANSLATE_LANG_KEY'); 
        
            vm.editRow = rowEditorService.editRow;
            vm.gridOptions = gridOptionsService.getGridOptions();

            $scope.changeLanguage = function ( ) {
                $translate.use($scope.data);
            };

            $scope.showAddModal = function ( ) {
                var modal = $uibModal.open ({
                    templateUrl: 'views/modal/addModal.html',
                    controller: 'addController'
                });
                
            }
                
        }                    
}) ( );