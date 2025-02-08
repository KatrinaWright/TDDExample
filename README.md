# TDD Learning Exercise: The Guessing Game

This repository demonstrates Test-Driven Development (TDD) through an interactive guessing game where two teams collaborate without knowing the final outcome. It's designed to teach both TDD principles and the importance of writing clear, descriptive tests.

## How It Works

The project is structured as a game between two teams:

### RED Team
- Creates tests that gradually reveal the functionality of the application
- Knows the final goal of the application
- Creates branches named `RED-###` for each new test
- Must write tests that guide development without revealing too much too quickly

### GREEN Team
- Implements code to pass the tests without knowing the final goal
- Creates branches named `GREEN-###` for each implementation
- Must write the minimum code necessary to pass the tests
- Tries to guess what they're building based on the tests alone

## Branch Structure
- Each iteration has two branches:
  - `RED-###`: Contains new tests
  - `GREEN-###`: Contains the implementation that passes those tests
- All changes are merged into `main` through pull requests
- Each branch represents a single iteration in the TDD cycle

## Learning Objectives
- Understanding the TDD cycle: Red (fail) → Green (pass) → Refactor
- Writing clear, purposeful tests
- Implementing minimal code to pass tests
- Communication through tests
- Git branching and PR workflow

## How to Follow Along
1. Start at branch `RED-001` to see the first test
2. Try implementing your own solution
3. Check `GREEN-001` to see the minimal implementation
4. Continue through each numbered branch pair
5. Try to guess what's being built before reaching the final implementation!

## Rules
1. GREEN team should write the minimum code necessary to pass tests
2. RED team should not reveal the final goal in test names or comments
3. Each implementation should pass all previous tests
4. No peeking at future branches!