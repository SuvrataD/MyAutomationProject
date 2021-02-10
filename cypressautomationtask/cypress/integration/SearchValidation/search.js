import { Given } from "cypress-cucumber-preprocessor/steps";
import { SearchValidationPom } from "../pageObjects/SearchValidationPom.POM.js";

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

Given("User validates search results on the page are for {string}", async (searchString) => {
  SearchValidationPom_obj.validateSearchResults(searchString);
});