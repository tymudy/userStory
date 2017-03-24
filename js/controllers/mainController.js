
( function () {
    
    angular.module('myApp')
            .controller('mainController', ['$scope', function ($scope) {
        
                    $scope.myData = [
                        {
                            "High level planning": "",
                            "High level description / Epics": "",
                            "As a ... [actor]": "",
                            "I want to ... [action]": "",
                            "So that (I can) ... [acceptance criteria]":"",
                            "# of SP":""
                        }
                        
                    ];
            }]);
}) ( );

                            