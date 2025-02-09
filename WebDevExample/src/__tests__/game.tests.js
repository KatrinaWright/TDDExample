const { GuessingGame } = require('../game.js');

describe('GuessingGame', () => {
    let game;

    beforeEach(() => {
        // Clear the DOM before each test
        document.body.innerHTML = '<div id="game-container"></div>';
        game = new GuessingGame();
    });

    test('should initialize with game container', () => {
        expect(game.gameContainer).not.toBeNull();
    });

    test('should render input field when game starts', () => {
        const input = document.querySelector('.guess-input');
        expect(input).toBeTruthy();
        expect(input.type).toBe('number');
    });

    test('should render submit button when game starts', () => {
        const button = document.querySelector('.submit-guess');
        expect(button).toBeTruthy();
        expect(button.textContent).toBe('Submit Guess');
    });
});