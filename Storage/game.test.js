const { JSDOM } = require('jsdom');
const { GuessingGame } = require('./game.js');

describe('GuessingGame', () => {
    let dom;
    let document;
    let game;

    beforeEach(() => {
        // Create a DOM environment for testing
        dom = new JSDOM(`
            <!DOCTYPE html>
            <html>
                <body>
                    <div id="game-container"></div>
                </body>
            </html>
        `);
        
        // Set up global document and window
        global.document = dom.window.document;
        global.window = dom.window;
        
        // Initialize game instance
        game = new GuessingGame();
    });

    // Example RED-001 test
    test('game container should exist', () => {
        expect(game.gameContainer).not.toBeNull();
    });

    test('should render input field when game starts', () => {
        game.initialize();
        const input = document.querySelector('.guess-input');
        expect(input).toBeTruthy();
        expect(input.type).toBe('number');
    });

    test('should have correct structure', () => {
        expect(document.querySelector('#game-container')).toBeTruthy();
    });

    test('should apply correct styles to game container', () => {
        const container = game.gameContainer;
        const styles = window.getComputedStyle(container);
        expect(styles.display).toBe('flex');
    });

    test('should update score when guess is correct', () => {
        game.makeGuess(42);
        const score = document.querySelector('.score');
        expect(score.textContent).toBe('10');
    });

    test('should handle button click', () => {
        const button = document.querySelector('.submit-guess');
        button.click();
        expect(game.guessCount).toBe(1);
    });

    test('Page has a header with text "Guessing Game"', () => {
        document.body.innerHTML = `
        <div id="app"></div>
        `;
        require('../src/script.js');
        
        const header = document.querySelector('h1');
        expect(header).not.toBeNull();
        expect(header.textContent).toBe('Guessing Game');
    });

});
