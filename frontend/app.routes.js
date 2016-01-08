'use strict';

var controllersTemplates = '/public/tpl/controllers/';

module.exports = {
    'root': {
        url: '/',
        templateUrl: controllersTemplates + 'root.html',
        controller: 'root'
    },
    'root.test': {
        url: 'test',
        templateUrl: controllersTemplates + 'root.test.html',
        controller: 'rootTest'
    }
};