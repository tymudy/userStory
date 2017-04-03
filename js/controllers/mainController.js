( function () {
    
    angular.module('myApp')
           .controller('mainController', mainController);

        mainController.$inject = ['$scope', '$translate', '$translateLocalStorage', 'gridOptionsService', '$uibModal'];

        function mainController( $scope, $translate, $translateLocalStorage, gridOptionsService, $uibModal ) {
            $scope.langs = ['en', 'pt'];
            $scope.data = $translateLocalStorage.get('NG_TRANSLATE_LANG_KEY'); 
        
            $scope.gridOptions = {
                enableSorting: false,
                columnDefs: [
                    { field: 'description' , displayName: $translate.instant('description'), width: 250, headerCellFilter: "translate"} ,
                    { field: 'actor', displayName: $translate.instant('actor'), width: 180, headerCellFilter: "translate"},
                    { field: 'action', displayName: $translate.instant('action'), width: 180, headerCellFilter: "translate"},
                    { field: 'expectation', displayName: $translate.instant('expectation'), width: 300, headerCellFilter: "translate"},
                    { field: "sp", displayName: $translate.instant('sp'), width: 80, headerCellFilter: "translate"},
                    { field: "edit", displayName: $translate.instant('edit'), cellTemplate:'/views/buttons/edit.html', headerCellFilter: "translate"},
                    { field: "delete", displayName: $translate.instant('delete'), cellTemplate:'/views/buttons/delete.html', headerCellFilter: "translate"}
                ]
            }

            gridOptionsService.setGridOptions($scope.gridOptions);

            $scope.changeLanguage = function ( ) {
                $translate.use($scope.data);
            };

            $scope.showModal = function ( ) {
                var modal = $uibModal.open ({
                    templateUrl: 'views/modal/addModal.html',
                    controller: 'addController'
                });
                
            }
            $scope.showDelModal = function ( ) {
                var modal = $uibModal.open ({
                    templateUrl: 'views/modal/deleteModal.html',
                    controller: 'deleteController'
                });
                
            }

                
        }                    
}) ( );