'use strict';

import gameApp from '../game';

describe('functional tests', () => {

    beforeEach(() => {
        loadModule(gameApp);
    });

    it('clicking start button will show all user moves', inject(() => {
        // given:
        let $element = compileDirective(`<game-start></game-start>`);

        // then:
        let $startButton = $element.find('button');
        $startButton.triggerHandler('click');

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

    it('clicking a move will make move and then trigger opponent move', inject(() => {
        // given:
        let $element = compileDirective(`<game-start></game-start>`);

        // then:
        let $startButton = $element.find('button');
        $startButton.triggerHandler('click');

        let rockMove = $element.$find('[data-r-move="rock"]');
        rockMove.triggerHandler('click');

        expect(rockMove).toHaveClass('moved');

        let browserMoves = $element.$find('[data-r-class="browser-moves"]');
        expect(browserMoves).toExist();

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
