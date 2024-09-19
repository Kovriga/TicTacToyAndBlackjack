import {describe, test, expect} from '@jest/globals';
import TicTacToe from '../modals/TicTacToe';

describe('крестики нолики', () => {
    test('Класс завёлся', () => {
        const ticTacToe = new TicTacToe();
        expect(ticTacToe.array).toStrictEqual([[0,0,0],[0,0,0],[0,0,0]])
    });

    test('Класс завёлся', () => {
        const ticTacToe =new TicTacToe();
        expect(ticTacToe.array).toStrictEqual([[0,0,0],[0,0,0],[0,0,0]])
    });
    test('Очередь хода', () => {
        const ticTacToe = new TicTacToe();
        if(ticTacToe.turnOfTheMove === 0) {
            ticTacToe.turnOfTheMove = 1
        }
        expect(ticTacToe.turnOfTheMove).toStrictEqual(1)
    })
    test('Действие X',  () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.clickButtom(1, 1)
        expect(ticTacToe.array).toStrictEqual([[0,0,0],[0,1,0],[0,0,0]])
    })

    test('Действие O',  () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.clickButtom(1, 1)
        ticTacToe.clickButtom(0, 1)
        expect(ticTacToe.array).toStrictEqual([[0,2,0],[0,1,0],[0,0,0]])
    })

    test('Нельзя ставить на занятое место',  () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.clickButtom(1, 1)
        ticTacToe.clickButtom(1, 1)
        expect(ticTacToe.array).toStrictEqual([[0,0,0],[0,1,0],[0,0,0]])
    })


    test('Проверка выйграша в строку',  () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.winningСonditions()
        expect(ticTacToe.winningСonditions()).toStrictEqual(true)
    })
});