var myApp = angular.module('myApp',['ui-router']);

myApp.config(function($stateProvider){

    $stateProvider.state('header',{
                                    url: '/header',
                                    templateUrl: 'views/partials/page1.html'
    });
});