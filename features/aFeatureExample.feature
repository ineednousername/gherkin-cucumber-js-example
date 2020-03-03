Feature: Description of the feature that is described by this specification, in this example an adder.

  Scenario adding three values together
    Given regular Adder
    When  add 5
    And   add 3
    And   add 9
    Then  result is 17

  Scenario Outline: adds two values together with examples
    Given regular Adder
    When  add <number one>
    And   add <number two>
    Then  result is <expected result>
    Examples:
      | number one | number two | expected result |
      | 1          | -1         | 0               |
      | 1          | 1          | 2               |
      | 0.5        | 1          | 1.5             |
      | 0          | 0          | 0               |
      | 10000      | 3333       | 13333           |



