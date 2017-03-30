( function () {
    
    angular.module('myApp')
            .controller('mainController', ['$scope',
                                           '$translate',  
                    function ( $scope, $translate ) {

                        $scope.langs = ['en', 'pt'];
                        $scope.data = "en"; 
                        $scope.newEstimation = {};  

                 
                        $scope.gridOptions = {
                            enableSorting: false,
                            columnDefs: [
                                { field: 'description' , displayName: $translate.instant('description'), width: 250, headerCellFilter: "translate"} ,
                                { field: 'actor', displayName: $translate.instant('actor'), width: 180, headerCellFilter: "translate"},
                                { field: 'action', displayName: $translate.instant('action'), width: 180, headerCellFilter: "translate"},
                                { field: 'expectation', displayName: $translate.instant('expectation'), width: 300, headerCellFilter: "translate"},
                                { field: "sp", displayName: $translate.instant('sp'), width: 80, headerCellFilter: "translate"},
                                { field: "edit", displayName: $translate.instant('edit'), cellTemplate:'/views/buttons/edit.html'},
                                { field: "delete", displayName: $translate.instant('delete'), cellTemplate:'/views/buttons/delete.html'}
                            ]
                        }
                        
                        $scope.gridHeader = $scope.gridOptions.columnDefs.slice(0,-2);

                        $scope.addEstimation = function ( ) {
                             $scope.gridOptions.data.push($scope.newEstimation);
                             $scope.newEstimation = {}
                        }

                        $scope.editEstimation = function (index){
    
                        }

                        $scope.deleteEstimation = function (index){
    
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
                            