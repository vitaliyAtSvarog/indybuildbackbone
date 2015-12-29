'use strict';

var angular = require('angular');

var app = angular.module('app', [
    require('angular-ui-router'),
    require('./controllers/_inject'),
    require('./directives/_inject'),
    require('./services/_inject'),
    require('./consts/_inject')
]);

app.run(require('./app.run'));
app.config(require('./app.config'));

angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
});