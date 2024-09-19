export default class TicTacToe {
    array = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    turnOfTheMove = 0

    winningСonditions (): boolean {
        this.array.forEach(x => {
            if (x[0] === x[1] && x[0] === x[2] && x.indexOf(x === 0) === -1) return true;
        })
    }

    clickButtom(i: number, j: number) {
        if(this.array[i][j] === 0) {
            if (this.turnOfTheMove === 0) {
                this.array[i][j] = 1
                this.turnOfTheMove = 2
                return
            }
            if (this.turnOfTheMove === 1) {
                this.array[i][j] = 1
                this.turnOfTheMove = 2
                return
            }
            if (this.turnOfTheMove === 2) {
                this.array[i][j] = 2
                this.turnOfTheMove = 1
                return;
            }
        }
        return;
    }
}