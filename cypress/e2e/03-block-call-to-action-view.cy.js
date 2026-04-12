import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Call to Action Block: View Mode Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('Call to Action Block: View default button', () => {
    cy.get('[contenteditable=true]').first().clear();
    cy.get('[contenteditable=true]').first().type('CTA View Test');
    cy.get('.documentFirstHeading').contains('CTA View Test');
    cy.get('[contenteditable=true]').first().type('{enter}');

    // Add CTA block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.callToActionBlock')
      .contains('Call to Action')
      .click();

    // Save
    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    // Verify CTA block renders in view mode
    cy.contains('CTA View Test');
    cy.get('.block.call-to-action').should('exist');
  });

  it('Call to Action Block: Custom label text', () => {
    cy.get('[contenteditable=true]').first().clear();
    cy.get('[contenteditable=true]').first().type('CTA Label Test');
    cy.get('.documentFirstHeading').contains('CTA Label Test');
    cy.get('[contenteditable=true]').first().type('{enter}');

    // Add CTA block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.callToActionBlock')
      .contains('Call to Action')
      .click();

    // Set custom label in sidebar
    cy.get('#sidebar-properties').within(() => {
      cy.get('input#field-text[name="text"]')
        .should('be.visible')
        .clear({ force: true })
        .type('Download Now', { force: true });
    });

    // Save
    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.contains('.block.call-to-action .ui.button', 'Download Now');
  });

  it('Call to Action Block: With link and target', () => {
    cy.get('[contenteditable=true]').first().clear();
    cy.get('[contenteditable=true]').first().type('CTA Link Test');
    cy.get('.documentFirstHeading').contains('CTA Link Test');
    cy.get('[contenteditable=true]').first().type('{enter}');

    // Add CTA block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.callToActionBlock')
      .contains('Call to Action')
      .click();

    // Set label
    cy.get('#sidebar-properties').within(() => {
      cy.get('input#field-text[name="text"]')
        .should('be.visible')
        .clear({ force: true })
        .type('Learn More', { force: true });
    });

    // Save
    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.contains('Learn More');
    cy.get('.block.call-to-action').should('exist');
  });

  it('Call to Action Block: Tooltip disappears on mouseout', () => {
    cy.get('[contenteditable=true]').first().clear();
    cy.get('[contenteditable=true]').first().type('CTA Tooltip Test');
    cy.get('.documentFirstHeading').contains('CTA Tooltip Test');
    cy.get('[contenteditable=true]').first().type('{enter}');

    // Add CTA block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.callToActionBlock')
      .contains('Call to Action')
      .click();

    // Set label and tooltip
    cy.get('#sidebar-properties').within(() => {
      cy.get('input#field-text[name="text"]')
        .should('be.visible')
        .clear({ force: true })
        .type('Hover Me', { force: true });

      cy.get('input#field-tooltip[name="tooltip"]')
        .should('be.visible')
        .clear({ force: true })
        .type('Tooltip text here', { force: true });
    });

    // Save
    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    // Verify button and tooltip
    cy.contains('.block.call-to-action .ui.button', 'Hover Me')
      .should('be.visible')
      .trigger('mouseover', { force: true });

    cy.get('body')
      .find('.ui.popup', { timeout: 4000 })
      .should('be.visible')
      .and('contain.text', 'Tooltip text here');

    cy.get('.block.call-to-action .ui.button').trigger('mouseout', { force: true });
    cy.get('body').find('.ui.popup').should('not.exist');
  });
});