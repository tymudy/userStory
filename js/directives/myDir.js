( function ( ) {

    angular.module('myApp')
           .directive('myLanguage', function () {
               return{
                    template: '<select name="repeatSelect" id="repeatSelect" data-ng-options="l for l in langs" data-ng-model="data" data-ng-change="changeLanguage()"></select>'  
                }
           })

})();