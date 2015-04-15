(function () {
    'use strict';
    // this function is strict...
}());

require.config({
    paths: {
        'angular': '../lib/angularjs/angular',
        'ui.bootstrap': '../lib/ui-bootstrap/ui-bootstrap-tpls',
        'ui.router': '../lib/angular-ui-router/angular-ui-router'
    },
    // 'Shims' are required for 3rd party libs that don't use some sort of AMD/CommonJS/UMD module definition
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ui.bootstrap': ['angular'],
        'ui.router': ['angular']
    }
});

require(['angular', 'widgitDemo'], function() {
    'use strict';
    console.log('Require Configured, widgitDemo loaded, bootstrapping angular app');
    angular.bootstrap(document.querySelector('html'),['widgitDemo']);
});
