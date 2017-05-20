'use strict';

import template from './template.html';
import GameCtrl from './GameCtrl.js';

export default angular.module('game', [])

    .directive('gameStart', [() => {

        return {
            restrict: 'E',
            template: template,
            scope: {},
            controller: GameCtrl,
            controllerAs: 'ctrl'
        };

    }])

    .name;
