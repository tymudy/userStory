( function ( ) {
    
    angular.module('myApp')
            .config( routeConfig )
            .config( translateConfig );

    routeConfig.$inject = ['$routeProvider', '$locationProvider'];
    translateConfig.$inject = ['$translateProvider'];

    function routeConfig( $routeProvider, $locationProvider) {
          
        $routeProvider
            .when('/',{
                templateUrl : 'views/partials/main.html'
            })
            .when('/errorPage', {
                templateUrl:'views/partials/errorPage.html',
            })
            .otherwise({
                redirectTo: "/errorPage"
            });
        
       $locationProvider.html5Mode(true)
                        .hashPrefix('!');


    }

    function translateConfig ( $translateProvider ) {

            $translateProvider.useStaticFilesLoader({
                prefix: 'languages/',
                suffix: '.json'
            });

            $translateProvider.useLocalStorage();
            $translateProvider.preferredLanguage('en');
            $translateProvider.useSanitizeValueStrategy(null);

    }

} )( );