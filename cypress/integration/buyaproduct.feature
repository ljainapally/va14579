Feature: BuyaProduct

Scenario: Search and buy product
Given I am on johnlewis site
 When I search for "phones"
  And I select "phones" from search results
  And I select "Apple iPhone 6s"
  And I click on the Add to your basket button
  And I click on the Go to your basket button
  And I click on the continue to checkout button
  And I select Guest checkout option
  And I enter the email address as "ljainapally@gmail.com"
  And I click on the Continue as guest button
  And I click on Delivery Icon
  And I enter the title as "Ms"
  And I enter the First name as "Lakshmi"
  And I enter the Last name as "Zaina"
  And I enter the Phone number as "7450975555"
  And I enter the Postcode as "IG11 9XZ"
  And I click on the Find address button
  And I click on the use this address button
  And I select Next or named day delivery
  And I select date after two days
  And I click Continue to Payment button
 Then I validate the delivery date and time 
  And I take screenshot of Review and pay page
   