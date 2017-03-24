
( function () {
    
    angular.module('myApp')
            .controller('mainController', ['$scope', function ($scope) {
        
                    $scope.myData = [
                        {
                            "High level planning": "",
                            "High level description / Epics": "Login ( menu1 )",
                            "As a ... [actor]": "User",
                            "I want to ... [action]": "Login",
                            "So that (I can) ... [acceptance criteria]":"open the application",
                            "# of SP":""
                        }
                        
                    ];
            }]);
}) ( );

                            