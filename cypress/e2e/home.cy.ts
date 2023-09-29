describe("Home Page", () => {
    it("should render new slids on click", () => {
        cy.visit("/");

        cy.get(".slick-slider").each(() => {
            cy.get(".slick-dots > :nth-child(1) > button").click();
        });

        cy.shouldRenderShowcase({ name: "Most Popular Games", highlight: true });
        cy.shouldRenderShowcase({ name: "New Games", highlight: false });
    });
});
