Feature: EnsekAPI

  Scenario: Validate API to get energy details
    When An API to get energy is requested
    Then The API is validated
    
  Scenario: Validate API to buy energy
    When An API to buy energy is requested for id "3" and number of units "50"
    Then The API is validated
    
  Scenario: Validate API to get order details
    When An API to get orders is requested
    Then The API is validated
    
  Scenario: Validate API to reset
    When An API to reset is requested
    Then The API is validated
    