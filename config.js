( function ( ) {
    
    angular.module('myApp')
            .config( routeConfig );
            //.run();

    routeConfig.$inject = ['$routeProvider', '$locationProvider','$stateProvider'];

    function routeConfig( $routeProvider, $locationProvider, $stateProvider) {

        $stateProvider.state('header', {
             url: '/',
             templateUrl: 'views/partials/page1.html'
        });

        $routeProvider
            .when(
            '/', {
                redirectTo: '/header'
            })
            
       $locationProvider.html5Mode({
           enable: true,
           requireBase: 'userStory'
        });
        $locationProvider.hashPrefix('!');

    }
} )( );