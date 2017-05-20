'use strict';

function GameCtrl($timeout, $document) {

    this.moves = {1:'rock', 2:'paper', 3:'scissors'};
    this.gameStarted = false;
    this.buttonText = `play`;
    this.userMove = '';
    this.browserMove = '';
    this.browserScore = 0;
    this.userScore = 0;
    this.showBrowserMove = () => { return this.moves[this.browserMove]};

    this.statuses = {
        USER_WIN: 'win',
        BROWSER_WIN: 'lose',
        DRAW: 'draw!'
    };

    this.gameFinished = null;

    this.startGame = () => {
        this.gameStarted = true;
        this.status = 'GO GO GO GO';
        this.userMove = '';
        this.browserMove = '';
        this.gameFinished = null;
    };

    this.isMove = (move, playerMove) => {
        return move === playerMove;
    };

    this.makeMove = (move) => {
        if (this.gameStarted === false) {
            this.startGame();
        } else {
            this.userMove = move;
            this.makeBrowserMove();
        }
    };

    this.makeBrowserMove = () => {
        let randInt = () => { return Math.floor(Math.random() * (4 - 1)) + 1 };
        $timeout(() => {
            this.browserMove = randInt();
            this.status = this.calculateWinner(this.userMove, this.browserMove);
        }, 50);
    };

    this.calculateWinner = (u, b) => {
            this.gameFinished = true;
            this.gameStarted = false;

            if (u === b) { return this.statuses.DRAW }

            if ((u === 1 && b === 2) || (u === 2 && b === 3) || (u === 3 && b === 1) ) {
                this.browserScore ++;
                return this.statuses.BROWSER_WIN }

            if ((u === 1 && b === 3) || (u === 2 && b === 1) || (u === 3 && b === 2)) {
                this.userScore ++;
                return this.statuses.USER_WIN
            }
    }
}

GameCtrl.$inject = ['$timeout', '$document'];

export default GameCtrl;
