require('cypress-xpath');
let elem = require("../../fixtures/ElementData.json");
export class ProductValidationPom {

    selectProduct() {
        let product_xpath = elem.locators.selectedProduct_xpath;
        cy.xpath(product_xpath).click();
        cy.log("Product is selected");
    }

    clickAddToCartButton() {
        let buttonElem = "#" + elem.locators.AddToCartButton_id;
        cy.get(buttonElem).click();
        cy.log("Add to Cart button is clicked");
    }

    verifyProductDetails() {
        /**
         * -> Declare some specific product details in harcoded values form like ProductName, Price etc.
         * -> Create xpath for selected product
         * -> Fetch the text from the xpath
         * -> Verify the text with hardcoded values declared for product 
         */
    }

}