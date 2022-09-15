import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require('../../pages/LoginPage');
const inventoryPage = require('../../pages/InventoryPage');

Given('A user opens the login page', () => {
    loginPage.goToLoginPage();
});

When('A user enters the username {string}', (username) => {
    loginPage.typeUsername(username);
});

And('A user enters the password {string}', (password) => {
    loginPage.typePassword(password);
});

And('A user clicks on the login button', () => {
    loginPage.clickLogin();
});

Then('A user will be logged in', () => {
    inventoryPage.getUrl().should('contain', '/inventory.html');
});

Then('A user will be receiving a failed message: {string}', (message) => {
    loginPage.elements.errorMessage().should('have.text', message);
});