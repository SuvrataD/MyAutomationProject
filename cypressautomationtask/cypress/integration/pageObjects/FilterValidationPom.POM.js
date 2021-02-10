let elem = require("../../fixtures/ElementData.json");
export class FilterValidationPom {

    applyBrandFilter(BrandName) {
        let i = 0;
        /**
         * -> Count total elemnts present inside Brand filter
         * -> Iterate through each element using loop using xpath of Brand filter
         * -> for (i=0; i<=totalCount; i++){
         *       let xpath = elem.locators.BrandFilter_xpath_1 + i + let xpath = elem.locators.BrandFilter_xpath_2;
         *       Get text inside every elem and verify that it matches with the argument of method , if yes click the xpath using .click() method
         *           break;      
         *    }
         */
    }

    verifyBrandFilter() {
        let FilteredElement_xpath = elem.locators.searchResults_xpath;
        /**
         * -> Iterate through every element
         * -> Get the text inside the element and verify if it matches with the applied BrandName string
         * -> Above condition will be checked for each elemnt until elements are empty
         * -> Test line will fail if the above condition is not matched
         */
    }

    applyCustomerReviewFilter(CustomerRating) {
        /**
        * -> Count total elemnts present inside Customer Review filter
        * -> Iterate through each element using loop using xpath of Customer Review filter
        * -> for (i=0; i<=totalCount; i++){
        *       let xpath = elem.locators.CustomerReviewFilter_xpath1 + i + let xpath = elem.locators.CustomerReviewFilter_xpath2;
        *       Get text inside every elem and verify that it matches with the argument of method , if yes click the xpath using .click() method
        *           break;      
        *    }
        */
    }

    verifyCustomerReviewFilter() {
        let FilteredElement_xpath = elem.locators.searchResults_xpath;
        /**
         * -> Iterate through every element
         * -> Get the text inside the element and verify that  it matches with the Customer Review specified in test scenario
         * -> Above condition will be checked for each elemnt until elements are empty
         * -> Test line will fail if the above condition is not matched
         */
    }

}