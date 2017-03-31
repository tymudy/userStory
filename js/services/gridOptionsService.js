( function () {

    angular.module('myApp')
           .service('gridOptionsService', function () {

                this.gridOptions = {};

                this.setGridOptions = function ( gridOptions ) {
                        this.gridOptions = gridOptions;
                }

                this.getGridOptions = function ( ) {
                    return this.gridOptions;
                }

                this.updGridOptions = function ( gridRow ) {
                    this.gridOptions.data.push( gridRow )
                }

                this.delGridOptions = function ( gridRow ) {
                    this.gridOptions.data.pop( gridRow )
                }
           });

})();
