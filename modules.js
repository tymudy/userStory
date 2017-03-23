var myApp = angular.module('modules',['ui-router']);

myApp.config(function($stateProvider){

    $stateProvider.state('header',{
                                    url: '/header',
                                    templateUrl: 'views/partials/page1.html'
    });
});