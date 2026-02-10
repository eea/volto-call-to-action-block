import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Blocks Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('Add Block: Empty', () => {
    // Change page title
    cy.get('[contenteditable=true]').first().clear();

    cy.get('[contenteditable=true]').first().type('My Add-on Page');

    cy.get('.documentFirstHeading').contains('My Add-on Page');

    cy.get('[contenteditable=true]').first().type('{enter}');

    // Add block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.callToActionBlock').contains('Call to Action').click();

    // Save
    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    // then the page view should contain our changes
    cy.contains('My Add-on Page');
    cy.get('.block.call-to-action');
  });

  it('Add Block: With Tooltip', () => {
    // Change page title
    cy.get('[contenteditable=true]').first().clear();
    cy.get('[contenteditable=true]').first().type('My Tooltip Page');
    cy.get('.documentFirstHeading').contains('My Tooltip Page');
    cy.get('[contenteditable=true]').first().type('{enter}');

    // Add Call to Action block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.callToActionBlock').contains('Call to Action').click();

    // Configure the block - set label
    cy.get('.block.callToAction.selected input[name="field-text"]')
      .clear()
      .type('Click Me');

    // Set tooltip via sidebar
    cy.get('.block.callToAction.selected input[name="field-tooltip"]')
      .clear()
      .type('This is a helpful tooltip');

    // Save the page
    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    // Verify the tooltip appears on hover
    cy.get('.block.call-to-action .ui.button').contains('Click Me').should('be.visible');
    
    // Trigger hover to show tooltip
    cy.get('.block.call-to-action .ui.button').contains('Click Me').trigger('mouseenter');
    cy.get('.ui.popup').contains('This is a helpful tooltip').should('be.visible');
    
    // Hide tooltip
    cy.get('.block.call-to-action .ui.button').contains('Click Me').trigger('mouseleave');
    cy.get('.ui.popup').should('not.be.visible');

    // Verify the tooltip appears on keyboard focus
    cy.get('.block.call-to-action .ui.button').contains('Click Me').focus();
    cy.get('.ui.popup').contains('This is a helpful tooltip').should('be.visible');
    
    // Blur to hide tooltip
    cy.get('.block.call-to-action .ui.button').contains('Click Me').blur();
    cy.get('.ui.popup').should('not.be.visible');
  });
});
