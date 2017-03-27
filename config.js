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
            
            $translateProvider.translation ( 'en', {
                'Col1': 'High level planning',
                'Col2': 'High level description / epics',
                'Col3': 'As a ... [actor]',
                'Col4': 'I want to ... [action]',
                'Col5': 'So that (I can) ... [acceptance criteria]',
                'Col6': '# of SP'
            });

            $translateProvider.translation ( 'pt', {
                'Col1': 'Planejamento de alto nivel',
                'Col2': 'Descricao de alto nivel / epicos',
                'Col3': 'Como ... [ator]',
                'Col4': 'Eu quero ... [accao]',
                'Col5': 'Para (que eu possa) ... [criteria de aceitacao]',
                'Col6': '# de SP'
            });

            $translateProvider.preferredLanguage('en');
    }

} )( );