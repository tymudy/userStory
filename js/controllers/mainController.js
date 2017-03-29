( function () {
    
    angular.module('myApp')
            .controller('mainController', ['$scope',
                                           '$rootScope', 
                                           '$translate', 
                                           '$http',
                                           'ModalService', 
                    function ($scope, $rootScope, $translate, $http, ModalService) {
                        $scope.langs = ['en', 'pt'];
                        $scope.data = ""; 
                        $scope.newEstimation = {};  
                        $scope.clickedestimation = {};
                 
                        $scope.gridOptions = {
                            enableSorting: false,
                            columnDefs: [
                                { field: 'description' , displayName: $translate.instant('description'), width: 250} ,
                                { field: 'actor', displayName: $translate.instant('actor'), width: 180},
                                { field: 'action', displayName: $translate.instant('action'), width: 180},
                                { field: 'expectation', displayName: $translate.instant('expectation'), width: 300},
                                { field: "sp", displayName: $translate.instant('sp'), width: 80},
                                { field: "edit", displayName: $translate.instant('edit'), width: 80, cellTemplate:'<div class="grid-action-cell">'+'<button type="button" id="btn-resize" class="btn btn-info btn-xs" data-toggle="modal" data-target="#editModal" data-ng-click="edit(estimation)">Edit</button></div>'},
                                { field: "delete", displayName: $translate.instant('delete'), cellTemplate:'<div class="grid-action-cell">'+'<button type="button" id="btn-resize" class="btn btn-danger btn-xs" data-toggle="modal" data-target="#deleteModal" data-ng-click="delete(estimation)"">Delete</button></div>'}
                            ]
                        }
                        
                        $scope.gridHeader = $scope.gridOptions.columnDefs.slice(0,-2);
                        $scope.gridData = $scope.gridOptions.columnDefs.data;

                        $scope.saveEstimation = function ( ) {
                             // $scope.gridOptions.data =[];
                             $scope.gridOptions.data.push($scope.newEstimation);
                             $scope.newEstimation = {}
                        }

                        $scope.edit = function ( estimation ) {
                            console.log(estimation);
                        }

                        $scope.delete = function ( ) {
                            
                        } 

                        $scope.changeLanguage = function ( ) {
                            $translate.use($scope.data);
                        };

                    }])
}) ( );


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
                            