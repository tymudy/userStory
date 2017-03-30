( function () {

    angular.module('myApp')
           .controller('addController', ['$scope',    
                   function ( $scope ) {

                       $scope.newEstimation = {};
                        
                       $scope.addEstimation = function ( ) {
                             $scope.gridOptions.data.push($scope.newEstimation);
                             $scope.newEstimation = {}
                        }  
                   }    

           ])

})