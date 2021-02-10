require('cypress-xpath');
let elem = require("../../fixtures/ElementData.json");

const url = 'https://www.amazon.in/';
let serachBarElem = "#" + elem.locators.SearchBarId;
let count = 0;

export class SearchValidationPom {

    navigateToUrl() {
        cy.visit(url);
        cy.wait(500);
    }

    searchValueInSearchBar(searchString) {
        cy.get(serachBarElem).type(searchString).type('{enter}');
    }

    userWaitTime(time) {
        cy.wait(time);
    }

    validateSearchResults(searchString) {
        let searchResultElem = elem.locators.searchResults_xpath;
        /**
         * Writing pseudo code here stucked with methods of cypress, will need more exploration and undersatnding to complete methods
         * -> Iterate over all xpath elements one by one using .each() method 
         * -> Get text inside span tag of xpath 
         * -> Verify that string/text contains the word passed in argument of method in it using .should() method  or we can use regex to match 
         * -> The above condition will be checked for each element
         */
    }
}