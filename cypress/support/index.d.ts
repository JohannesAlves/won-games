// load type definitions from Cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
    name: string;
    highlight?: boolean;
    gameCards?: boolean;
};

type User = {
    username: string;
    email: string;
    password: string;
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

        /**
         * Custom command to sign up
         * @example cy.signUp(user)
         */
        signUp(user: User): Chainable<Element>;

        /**
         * Custom command to sign up
         * @example cy.signIn()
         */
        signIn(email?: string, password?: string): Chainable<Element>;

        /**
         * Custom command to check if value is less than
         * @example cy.shouldBeLessThan(100)
         */
        shouldBeLessThan(value: number): Chainable<Element>;

        /**
         * Custom command to check if value is greater than
         * @example cy.shouldBeGreaterThan(100)
         */
        shouldBeGreaterThan(value: number): Chainable<Element>;
    }
}