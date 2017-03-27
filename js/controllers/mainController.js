
( function () {
    
    angular.module('myApp')
            .controller('mainController', ['$scope', 
                                           '$translate', 
                                           '$http', 
                    function ($scope, $translate, $http) {
                        $scope.langs = ['en', 'pt'];
                        $scope.data = "";

                        $scope.changeLanguage = function ( lang ) {
                            console.log(lang);
                            $translate.use( lang );      
                        };
                        $scope.myData = {};

                        /*get data from json file*/
                        $http.get('/languages/en.json')
                             .then( function (response) {
                                var myData = response.data;
                                 $translate.instant('description');
                                   // $scope.gridOptions.columnDefs.push(value);   
                                 debugger;   
                                
                                /*{ field: 'description', displayName: $translate.instant('description'), width: 250},
                                { field: 'actor', displayName: 'As a ... [actor]', width: 150},
                                { field: 'action', displayName: 'I want to ... [action]', width: 180},
                                { field: 'expectation', displayName: 'So that (I can) ... [acceptance criteria]', width:300},
                                { field: 'sp', displayName: '# of SP', width: 90} 
                                }) */
                        } );

                        $scope.gridOptions = { 
                            enableCellSelection: true,
                            enableCellEditOnFocus: true,
                            cellEditableCondition: 'row.entity.editable',
                            data: [],
                            columnDefs: []
                        };

                    }]);
}) ( );

/*( function () {
    
    angular.module('myApp')
            .controller('mainController', ['$scope', 
                                           '$translate', 
                                           '$http',
                                           'dataService',
                    function ($scope, $translate, $http, dataService) {
                        $scope.langs = ['en', 'pt'];
                        $scope.data = "";
                        $scope.changeLanguage = function ( lang ) {    
                            dataService.set( lang );
                            
                            $http.get('/languages/en.json')
                                .then( function (response) {
                                        $scope.myData = response.data;     
                                    } );
                        };

                    }]
            );
}) ( );*/

/*( function () {
    
    angular.module('myApp')
            .controller( mainController )
           // .controller( langDropdown ); 
            
    mainController.$inject = ['$scope', '$translate'];
    //langDropdown.$inject = ['$scope'];        
            
    function mainController( $scope, $translate ) {
        $scope.langs = ['en', 'pt'];
        $scope.changeLanguage = function (key) {
                $translate.use( key );
        };
    };

}) ( );*/


                            