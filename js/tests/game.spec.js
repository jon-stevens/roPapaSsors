'use strict';

import gameApp from '../game';

describe('functional tests', () => {

    beforeEach(() => {
        loadModule(gameApp);
    });

    it('should show start button', inject(() => {
        // given:
        let $element = compileDirective(`<game-start></game-start>`);

        // then:
        expect($element.find('button')).toExist();
        expect($element.find('button')).toHaveClass('start-button ng-binding ng-scope');
        expect($element.find('button')).toHaveText('play');
    }));


    it('clicking start button will show moves', inject(() => {
        // given:
        let $element = compileDirective(`<game-start></game-start>`);

        // then:
        let $startButton = $element.find('button');
        $startButton.triggerHandler('click');

        let $moves = $element.find('div');

        let userMoves = $element.$find('[data-r-class="game-moves"]');
        let rockMove = $element.$find('[data-r-move="rock"]');
        let paperMove = $element.$find('[data-r-move="paper"]');
        let scissorsMove = $element.$find('[data-r-move="scissors"]');

        expect(userMoves).toExist();
        expect(userMoves).toHaveClass('game-moves');

        expect(rockMove).toExist();
        expect(paperMove).toExist();
        expect(scissorsMove).toExist();

    }));

    it('clicking a move will make move and trigger opponent move', inject(() => {
        // given:
        let $element = compileDirective(`<game-start></game-start>`);

        // then:
        let $startButton = $element.find('button');
        $startButton.triggerHandler('click');

        let rockMove = $element.$find('[data-r-move="rock"]');
        rockMove.triggerHandler('click');

        expect(rockMove).toHaveClass('moved');

        let userMoves = $element.$find('[data-r-class="game-moves"]');
        expect(userMoves).toExist();

    }));

    it('scores and winner are displayed', inject(() => {
        // given:
        let $element = compileDirective(`<game-start></game-start>`);

        // then:
        let $startButton = $element.find('button');
        $startButton.triggerHandler('click');

        let rockMove = $element.$find('[data-r-move="rock"]');
        rockMove.triggerHandler('click');

        let userScore = $element.$find('[data-r-comp="userScore"]');
        let browserScore = $element.$find('[data-r-comp="browserScore"]');
        let winner = $element.$find('[data-r-comp="status"]');

        expect(userScore).toExist();
        expect(browserScore).toExist();
        expect(winner).toExist();

    }));

});
