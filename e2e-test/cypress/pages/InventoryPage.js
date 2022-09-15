class inventoryPage {

    getUrl() {
        return cy.url();
    }
}

module.exports = new inventoryPage();