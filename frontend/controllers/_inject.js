'use strict';

if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
    module.exports = 'app.controllers';
}

(function (angular) {

    var controllers = angular.module('app.controllers', []);

    controllers.controller('root', require('./ctrl.root'));
    controllers.controller('rootTest', require('./ctrl.root.test'));

})(angular);