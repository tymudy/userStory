( function ( ) {
    
    angular.module('myApp')
            .config( routeConfig )
            //.config( translateConfig );
            //.run();

    routeConfig.$inject = ['$routeProvider', '$locationProvider','$stateProvider'];
    translateConfig.$inject = ['$translateProvider'];

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

    function translateConfig ( $translateProvider ) {

            $translateProvider.useStaticFilesLoader({
                prefix: '/languages/',
                suffix: '.json'
            });

            $translateProvider.preferredLanguage('en');

            /*$translateProvider.registerAvailableLanguageKeys ( ['en', 'pt'], {
                'english' : 'en',
                'portugues' : 'pt'
            });

            $translateProvider.uniformLanguageTag('bcp47');
            $translateProvider.fallbackLanguage('en');*/
    }

} )( );