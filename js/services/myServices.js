( function () {

    angular.module('myApp')
           .service('dataService', function ( ) {
               var value;
               this.set = function  ( lang ){
                    this.value = lang;
               }
               this.get = function () {
                   return this.value;
               }
           })

})();