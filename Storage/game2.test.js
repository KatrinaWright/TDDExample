import { JSDOM } from 'jsdom';
import { GuessingGame } from './game.js';

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
});