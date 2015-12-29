'use strict';

if (typeof module !== 'undefined' &&
    typeof exports !== 'undefined' &&
    module.exports === exports) {
    module.exports = 'app.consts';
}

(function(angular) {

    var consts = angular.module('app.consts', []);

    consts.constant('test_consts_group', {
        someValue: 'test'
    });

})(angular);