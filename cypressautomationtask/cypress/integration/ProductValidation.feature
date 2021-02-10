Feature: Test scenario to validate details of particular product and add it to cart

    Background: Open Url
        Given Launch the browser and open amazon url

    @product
    Scenario: To validate details of purchased product
        Given User search for "shoes" item in search bar
        And User wait for 2 seconds
        Then User validates search results on the page are for "shoes"
        And User apply filter for brand "ASIAN" on shoes
        And User wait for 2 seconds
        Then User verifies Brand filter is applied successfully for shoes
        And User wait for 2 seconds
        And User apply filter for Customer review of "3 star and up" rating
        And User wait for 2 seconds
        Then User verifies Customer review filter is successfully applied for shoes
        And User select first product matching the filters applied
        And User validates details of product
        Then User clicks at Add to Cart button on page