( function () {
    
    angular.module('myApp')
            .controller('mainController', ['$scope', 
                                           '$translate', 
                                           '$http',
                                           'ModalService', 
                    function ($scope, $translate, $http, ModalService) {
                        $scope.langs = ['en', 'pt'];
                        $scope.data = "";   

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
                            enableSorting: false,
                            data: [],
                            columnDefs: [
                                { field: 'description' , displayName: $translate.instant('description')} ,
                                { field: 'actor', displayName: $translate.instant('actor')},
                                { field: 'action', displayName: $translate.instant('action')},
                                { field: 'expectation', displayName: $translate.instant('expectation')},
                                { field: "sp", displayName: $translate.instant('sp')}

                            ]
                        }
                         
                        $scope.changeLanguage = function () {
                            $translate.use($scope.data);
                        };

                        
                        $scope.show = function () {
                             ModalService.showModal({
                                templateUrl: 'modal.html',
                                controller: "ModalController"
                            }).then(function(modal) {
                                modal.element.modal();
                                modal.close.then(function(result) {
                                    $scope.message = "You said " + result;
                                });
                            });
                        }


                    }])
            .controller('ModalController', function($scope, close) {

                        $scope.close = function(result) {
                        close(result, 500); // close, but give 500ms for bootstrap to animate
                        };

                    });
                    
}) ( );


                            