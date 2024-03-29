import { createUser } from "../support/generate";

describe("User", () => {
    it.skip("should sign up", () => {
        const user = createUser();
        cy.visit("/sign-up");

        cy.signUp(user);

        cy.url().should("eq", `${Cypress.config().baseUrl}/`);
        cy.findByText(user.username).should("exist");
    });

    it("should sign in and sign out", () => {
        cy.visit("/sign-in");
        cy.signIn();

        cy.findByText(/cypress/i)
            .should("exist")
            .click();

        cy.findByText(/sign out/i).click();
    });
});
