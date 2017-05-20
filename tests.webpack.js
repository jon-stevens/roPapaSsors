require('angular');
require('angular-mocks/angular-mocks');
require('angular-mocks/ngMock');

let _ = require('lodash'),
    radii = require('radii'),
    matchers = require('jasmine-jquery-matchers'),
    angular = require('angular');

require('core-js/es5');

let context = require.context('./js/', true, /Spec\.js$|\.spec\.js$/);
context.keys().forEach(context);

global.$ = require('jquery');
global.sinon = require('sinon');

require('jasmine-sinon');

global.loadModule = radii.loadModule;
global.mockModule = radii.mockModule;
global.mockModules = radii.mockModules;
global.compileDirective = radii.compileDirective;
global.compileController = radii.compileController;


global.ngFlush = cb => {
    inject($httpBackend => {
        cb();
        $httpBackend.flush();
    });
};

global.ngDigest = cb => {
    inject($rootScope => {
        cb();
        $rootScope.$digest();
    });
};

global.ngFlushAndDigest = cb => {
    inject(($httpBackend, $rootScope) => {
        cb();
        $httpBackend.flush();
        $rootScope.$digest();
    });
};

function findAngularElements(parentEl, selector) {
    let $el = $(parentEl).find(selector);
    return angular.element($el);
}

global.findElement = (parentEl, selector, idx = 0) => {
    return findAngularElements(parentEl, selector).eq(idx);
};

global.findElements = (parentEl, selector) => {
    return findAngularElements(parentEl, selector);
};


beforeEach(function() {
    jasmine.addMatchers(_.assign(matchers));
});

afterEach(function() {
    // hmm
});
