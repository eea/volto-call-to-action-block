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
    cy.get('.content.active.common .button.callToActionBlock')
      .contains('Call to Action')
      .click();

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
    cy.get('.content.active.common .button.callToActionBlock')
      .contains('Call to Action')
      .click();

    cy.get('#sidebar-properties').within(() => {
      cy.get('input#field-text[name="text"]')
        .should('be.visible')
        .clear({ force: true })
        .type('Click Me', { force: true });

      cy.get('input#field-tooltip[name="tooltip"]')
        .should('be.visible')
        .clear({ force: true })
        .type('This is a helpful tooltip', { force: true });
    });

    // Save the page
    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.contains('.block.call-to-action .ui.button', 'Click Me')
      .should('be.visible')
      .as('ctaBtn');

    cy.get('@ctaBtn').trigger('mouseover', { force: true });

    cy.get('body')
      .find('.ui.popup', { timeout: 4000 })
      .should('be.visible')
      .and('contain.text', 'This is a helpful tooltip');

    cy.get('@ctaBtn').trigger('mouseout', { force: true });

    cy.get('body').find('.ui.popup').should('not.exist');
  });
});
