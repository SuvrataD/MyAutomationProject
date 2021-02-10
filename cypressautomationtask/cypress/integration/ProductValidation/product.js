import { Given } from "cypress-cucumber-preprocessor/steps";
import { ProductValidationPom } from "../pageObjects/ProductValidationPom.POM.js";
import { SearchValidationPom } from "../pageObjects/SearchValidationPom.POM.js";

const ProductValidationPom_obj = new ProductValidationPom();
const SearchValidationPom_obj = new SearchValidationPom();

Given("Launch the browser and open amazon url", async () => {
    SearchValidationPom_obj.navigateToUrl();
});

Given("User search for {string} item in search bar", async (searchString) => {
    SearchValidationPom_obj.searchValueInSearchBar(searchString);
});

Given("User wait for {int} seconds", async (time) => {
    SearchValidationPom_obj.userWaitTime(time);
});

Given("User select first product matching the filters applied", async () => {
    ProductValidationPom_obj.selectProduct();
});

Given("User validates details of product", async () => {
    ProductValidationPom_obj.verifyProductDetails();
});

Given("User clicks at Add to Cart button on page", async (buttonName) => {
    ProductValidationPom_obj.clickButton("buttonName");
});