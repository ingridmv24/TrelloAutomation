# Trello Web Test Automation

## Description

This project automates https://trello.com/en website using WebDriverIO and Page Object Model desing pattern.

## Setup

1. Clone or download the repository.
2. Run `npm install` to install dependencies.
3. Run `npm test` to execute the tests.

## Execute an expecific test scenario with tag
Run `npm run test -- --cucumberOpts.tagExpression='@tagName'`

## Delete old reports
Run the comand `rm -r ./reports/*`

## Initialize ESLint (if needed)
Run `npx eslint --init` to generate a new ESLint config file.

## Initialize Prettier (optional)
Run `npm install prettier --save-dev` if not already installed.

## Execute eslint
Run `npm run lint`
This command checks your code for syntax errors, bad practices, and style issues using ESLint.

## Execute prettier
Run `npm run format`
This command formats your code according to Prettier's style rules, ensuring consistency in things like spacing, indentation, and quote

