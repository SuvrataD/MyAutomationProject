Feature: Test scenario to perform search validation on amazon website

  Background: Open Url
    Given Launch the browser and open amazon url

  @search
  Scenario: To perform search for "shoe" items and verify the search
    Given User search for "shoes" item in search bar
    And User wait for 2 seconds
    Then User validates search results on the page are for "shoes"