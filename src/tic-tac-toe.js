class TicTacToe {
    constructor() {
        this.player = 'x';
        this.turns = 0;
        this.matrix = [[null,null,null],
                       [null,null,null],
                       [null,null,null]];

    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null){
            this.matrix[rowIndex][columnIndex] = this.player;

            if (this.player === 'o'){
                this.player = 'x';}
            else this.player = 'o';

            this.turns++;
        }
    }

    isFinished() {
        return !!((this.getWinner()) || (this.isDraw()));
    }

    getWinner() {

        if (this.matrix[0][0] !== null && this.matrix[0][0] === this.matrix[1][0] && this.matrix[1][0] === this.matrix[2][0])
            return this.matrix[2][0];
        if (this.matrix[0][1] !== null && this.matrix[0][1] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][1])
            return this.matrix[2][1];
        if (this.matrix[0][2] !== null && this.matrix[0][2] === this.matrix[1][2] && this.matrix[1][2] === this.matrix[2][2])
            return this.matrix[2][2];


        if (this.matrix[0][0] !== null && this.matrix[0][0] === this.matrix[0][1] && this.matrix[0][1] === this.matrix[0][2])
            return this.matrix[0][2];
        if (this.matrix[1][0] !== null && this.matrix[1][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[1][2])
            return this.matrix[1][2];
        if (this.matrix[2][0] !== null && this.matrix[2][0] === this.matrix[2][1] && this.matrix[2][1] === this.matrix[2][2])
            return this.matrix[2][2];


        if (this.matrix[0][0] !== null && this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2])
            return this.matrix[2][2];
        if (this.matrix[0][2] !== null && this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0])
            return this.matrix[2][0];
        return null;

    }

    noMoreTurns() {
        return this.turns === 9;
    }

    isDraw() {
        return (this.turns === 9) && (this.getWinner() === null);
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
