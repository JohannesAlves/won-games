// load type definitions from Cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
    name: string;
    highlight?: boolean;
};

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to get element by data-cy
         * @example cy.getByDataCy('selector')
         */
        getByDataCy(selector: string): Chainable<JQuery<HTMLElement>>;

        /**
         * Custom command to check banner in page
         * @example cy.shouldRenderShowcase()
         */
        shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>;
    }
}
