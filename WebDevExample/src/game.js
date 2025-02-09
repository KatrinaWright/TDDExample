class GuessingGame {
    constructor() {
        this.gameContainer = document.getElementById('game-container');
        this.initialize();
    }

    initialize() {
        // Create input field
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'guess-input';
        this.gameContainer.appendChild(input);

        // Create submit button
        const button = document.createElement('button');
        button.textContent = 'Submit Guess';
        button.className = 'submit-guess';
        this.gameContainer.appendChild(button);
    }
}

// Export for testing in Node environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GuessingGame };
}
