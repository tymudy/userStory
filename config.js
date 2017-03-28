( function ( ) {
    
    angular.module('myApp')
            .config( routeConfig )
            .config( translateConfig );
            //.run();

    routeConfig.$inject = ['$routeProvider', '$locationProvider','$stateProvider'];
    translateConfig.$inject = ['$translateProvider'];

    function routeConfig( $routeProvider, $locationProvider, $stateProvider) {
          
        $stateProvider.state('header',{
            url: '/', 
            templateUrl : 'views/partials/page1.html'
            });
       $locationProvider.html5Mode({
           enable: true,
           requireBase: 'userStory'
        });
        $locationProvider.hashPrefix('!');

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