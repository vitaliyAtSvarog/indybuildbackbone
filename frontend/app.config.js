'use strict';

module.exports = [
    '$locationProvider',
    '$urlRouterProvider',
    '$stateProvider',
    '$httpProvider',
    function ($locationProvider, $urlRouterProvider, $stateProvider, $httpProvider) {
        $locationProvider.html5Mode({ enabled: false, requireBase: false }).hashPrefix('!');
        var routes = require('./app.routes');
        if (routes) {
            for (var state in routes) {
                $stateProvider.state(state, routes[state]);
            }
        }
        $urlRouterProvider.when('', '/').when('/', '/').otherwise('/');
    }
];