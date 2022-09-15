Feature: Login Feature

    As a user of SauceDemo
    I want to log in
    so I can buy products.

    Scenario: Success Login
    Given A user opens the login page
    When A user enters the username "standard_user"
    And A user enters the password "secret_sauce"
    And A user clicks on the login button
    Then A user will be logged in

    Scenario Outline: Failed Logins
    Given A user opens the login page
    When A user enters the username "<username>"
    And A user enters the password "<password>"
    And A user clicks on the login button
    Then A user will be receiving a failed message: "<message>"

    Examples:
    | username        | password     | message                                                                   |
    | standard_user   | common_sauce | Epic sadface: Username and password do not match any user in this service |
    | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |