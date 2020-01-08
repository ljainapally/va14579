import { Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given('I am on johnlewis site' , () => {
  cy.visit('https://www.johnlewis.com')
});

When('I search for {string}', (searchKeyword) => {
cy.get('#desktopSearch').click()
cy.get('#desktopSearch').type(searchKeyword).should('have.value', searchKeyword);
});

When('I select {string} from search results', (selectKeyword) => {
cy.get('[data-name="phones"]').contains(selectKeyword).should('have.text', selectKeyword).click();
});
And('I select {string}', (selectPhone)=> {
  cy.get('[data-product-id="3017222"]').contains(selectPhone).click()
});
And('I click on the Add to your basket button' , () => {
  cy.get('#button--add-to-basket').should('have.text', 'Add to your basket').click();
});
And ('I click on the Go to your basket button', () => {
  cy.get('.add-to-basket-view-basket-link').should('have.text', 'Go to your basket').click();
});
And('I click on the continue to checkout button', () => {
  cy.get('#link-button--basket-continue-securely').should('have.text', 'Continue to checkout').click();
});
And('I select Guest checkout option', () => {
  cy.get(':nth-child(2) > .radio-button-tile_radioContainer__42b40 > .radioButton_c-radioButton__47eed > label').click();
});
And('I enter the email address as {string}' , (email) => {
  cy.get('#email').type(email).should('have.value',email);
});
And('I click on the Continue as guest button', () => {
  cy.get('[data-test=loginForm-submit] > span').should('have.text','Continue as guest').click();
});
And('I click on Delivery Icon', () => {
  cy.get('[data-test="delivery-choice-delivery-button"]', { timeout: 15000 }).click();
});
And('I enter the title as {string}' , (title) => {
  cy.get('#title').type(title).should('have.value',title);
});
And('I enter the First name as {string}' , (firstName) => {
  cy.get('#firstName').type(firstName).should('have.value',firstName);
});
And('I enter the Last name as {string}' , (lastName) => {
  cy.get('#lastName').type(lastName).should('have.value',lastName);
});
And('I enter the Phone number as {string}' , (phoneNumber) => {
  cy.get('#phoneNumber-number').type(phoneNumber).should('have.value',phoneNumber);
});
And('I enter the Postcode as {string}' , (postCode) => {
  cy.get('#searchPostcode').type(postCode).should('have.value',postCode);
});

And('I click on the Find address button', () => {
cy.get('[data-test="postcodeSearchForm-submit"]').click();
cy.get('#selectAddress').select('66, Lyndhurst Gardens, Barking, IG11 9XZ');
});

And('I click on the use this address button', () => {
cy.get('[data-test="delivery-address-use-address"]').click();
});
And('I select Next or named day delivery', () => {
  cy.get('[data-test="delivery-option-5:5"]').should('contains.text', 'Next or named day delivery').click();

});
And('I select date after two days', () => {
  const deliveryDate = Cypress.moment().add(3,'days').format('DD');
  cy.get(':nth-child(1) > .day-picker_c-dayPicker__pageInner__5f2d1').contains(deliveryDate).click();
});
And('I click Continue to Payment button', () => {
  cy.contains('Continue to payment').should('have.text', 'Continue to payment').click();
});

Then('I validate the delivery date and time' , () => {
  cy.get('[data-test=delivery-details-title]').should('be.visible').and('contains.text','Next or named day delivery')
  const deliveryDate = Cypress.moment().add(3,'days').format('DD MMM');
  cy.get('[data-test=delivery-details-message]').should('be.visible').and('contain.text', deliveryDate).and('contain.text', '7.30am - 6pm');
});

And('I take screenshot of Review and pay page' , () => {
  cy.screenshot();
});