import { Given } from "cypress-cucumber-preprocessor/steps";
import { FilterValidationPom } from "../pageObjects/FilterValidationPom.POM.js";

const FilterValidationPom_obj = new FilterValidationPom();

Given("User apply filter for brand {string} on shoes", async (BrandFilter) => {
    FilterValidationPom_obj.applyBrandFilter(BrandFilter);
});

Given("User verifies Brand filter is applied successfully for shoes", async () => {
    FilterValidationPom_obj.verifyBrandFilter();
});

Given("User apply filter for Customer review of {string} rating", async (CustomerRating) => {
    FilterValidationPom_obj.applyCustomerReviewFilter(CustomerRating);
});

Given("User verifies Customer review filter is successfully applied for shoes", async () => {
    FilterValidationPom_obj.verifyCustomerReviewFilter();
});
