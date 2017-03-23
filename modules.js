var myApp = angular.module('renderView',['ui-router']);

myApp.config(function($stateProvider){
    var headerState = {
        name: 'header',
        url: '/header',
        template: "<h3>Header generated with template!</h3>"
    }

    $stateProvider.state(headerState);
});