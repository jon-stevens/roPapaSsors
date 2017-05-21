require('angular');
require('angular-mocks/angular-mocks');
require('angular-mocks/ngMock');

let _ = require('lodash'),
    radii = require('radii'),
    matchers = require('jasmine-jquery-matchers'),
    angular = require('angular');

require('core-js/es5');
require('jasmine-sinon');

let context = require.context('./js/', true, /Spec\.js$|\.spec\.js$/);
context.keys().forEach(context);

global.$ = require('jquery');
global.sinon = require('sinon');

global.loadModule = radii.loadModule;
global.compileDirective = radii.compileDirective;
global.compileController = radii.compileController;

beforeEach(function() {
    jasmine.addMatchers(_.assign(matchers));
});
