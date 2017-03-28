
( function () {
    
    angular.module('myApp')
            .controller('mainController', ['$scope', 
                                           '$translate', 
                                           '$http',
                                           'ModalService', 
                    function ($scope, $translate, $http, ModalService) {
                        $scope.langs = ['en', 'pt'];
                        $scope.data = "";   

                        $scope.show = function () {
                             ModalService.showModal({
                                template: '<h1>Modal</h1>',
                                controller: "ModalController"
                            }).then(function(modal) {
                                modal.element.modal();
                                modal.close.then(function(result) {
                                    $scope.message = "You said " + result;
                                });
                            });
                        }

                        /*get table header from json file*/
                     /*  $http.get('/languages/'+$scope.data+'.json')
                             .then( function (response) {
                                var myData = response.data; 
                                 
                                angular.forEach(myData, function ( value, key ){
                                    var header = {
                                        field: 'key',
                                        displayName: $translate.instant(),
                                        width: "*",
                                        headerCellFilter: "translate"
                                    }
                                    $scope.gridOptions.columnDefs.push(header);
                                });        
                         } );*/

                         $scope.gridOptions = {
                            cellFilter: true, 
                            enableSorting: false,
                            data: [],
                            columnDefs: [
                                { field: 'description' , dispayName: $translate.instant('description')} ,
                                { field: 'actor', displayName: $translate.instant('actor')},
                                { field: 'action', dispayName: $translate.instant('action')},
                                { field: 'expectation', dispayName: $translate.instant('expectation')},
                                { field: "sp", dispayName: $translate.instant('sp')}

                            ]
                         };

                         
                        $scope.changeLanguage = function () {
                            $translate.use($scope.data);
                        };

                    }])
            .controller('ModalController', function($scope, close) {

                        $scope.close = function(result) {
                        close(result, 500); // close, but give 500ms for bootstrap to animate
                        };

                    });
                    
}) ( );


                            