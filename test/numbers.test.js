const theNumberGames = require('../theNumberGames.js');

describe('multiplyBy3', () => {
    let multiplyBy3 = theNumberGames.multiplyBy3;

    it('should be a function', () => {
        expect(multiplyBy3).toBeDefined();
    });

    describe.each([
        [5, 15],
        [10, 30],
        [300, 900],
        [-4, -12]
    ])('given arguments of %i, %i', (i, o) => {
        test('returns the product of %i + 3', () => {
            expect(multiplyBy3(i)).toBe(o);
        });

        test(`returns a number`, () => {
            expect(multiplyBy3(i)).toEqual(expect.any(Number));
        });
    })
});

describe('add', () => {
    let add = theNumberGames.add;

    it('should be a function', () => {
        expect(add).toBeDefined();
        expect(add).toBeInstanceOf(Function)
    });

    it('should take two arguments and add them together', () => {
        expect(add(2, 4)).toEqual(6);
    })

    it('should return a number', () => {
        const result = add(2, 2)
        expect(result).toEqual(expect.any(Number));
    })
});

describe('this is where we test fizzbuzz', () => {
    let fizzbuzz = theNumberGames.fizzbuzz
    it('it is a function', () => {
        expect(fizzbuzz).toBeDefined();
        expect(fizzbuzz).toBeInstanceOf(Function)
    });

    it('if divisible by 3 it should return fizz',() => {
        expect(fizzbuzz(3)).toEqual('Fizz')
        expect(fizzbuzz(9)).toEqual('Fizz')
    });

    it('if divisible by 5 it should return buzz',() => {
        expect(fizzbuzz(5)).toEqual('Buzz')
        expect(fizzbuzz(10)).toEqual('Buzz')
    });

    it('if divisible by 3 and 5 it should return FizzBuzz',() => {
        expect(fizzbuzz(15)).toEqual('FizzBuzz')
        expect(fizzbuzz(45)).toEqual('FizzBuzz')
    })
})