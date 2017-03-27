( function ( angular ) {

    angular.module('myApp')
           .directive('myLanguage', function () {
               return{
                   template: '<div id="langBox"><select name="repeatSelect" id="repeatSelect" data-ng-model="data" data-ng-change="changeLanguage({{data}})"><option data-ng-repeat="lang in langs" value="{{lang}}">{{lang}}</option></select>
                                <p> data: {{data}}</p>
                              </div>'
               }
           })

})(window.angular);