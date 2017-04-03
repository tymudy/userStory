( function () {

    angular.module('myApp')
           .service('gridOptionsService', gridOptionsService);
           
           gridOptionsService.$inject = ['$translate', 'estimationSchema'];

           function gridOptionsService ( $translate, estimationSchema ) {

               this.gridOptions = {
                    enableSorting: false,
                    columnDefs: estimationSchema.columnDefs
                }

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
           };

})();
