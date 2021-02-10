Feature: Test scenario to apply filter on search items and validate filters

    Background: Open Url
        Given Launch the browser and open amazon url

    @filter
    Scenario: To apply filter on "shoe" items and verify filters
        Given User search for "shoes" item in search bar
        And User wait for 2 seconds
        And User apply filter for brand "ASIAN" on shoes
        And User wait for 2 seconds
        Then User verifies Brand filter is applied successfully for shoes
        And User wait for 2 seconds
        And User apply filter for Customer review of "3 star and up" rating
        And User wait for 2 seconds
        Then User verifies Customer review filter is successfully applied for shoes