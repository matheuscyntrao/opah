Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    When I login with <username> and <password>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
