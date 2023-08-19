import { screen } from "@testing-library/react";

import CreditCardsList from ".";
import mockCards from "components/PaymentOptions/mock";
import { renderWithTheme } from "utils/tests/helpers";

describe("<CreditCardsList />", () => {
    it("should render the cards list", () => {
        renderWithTheme(<CreditCardsList cards={mockCards} />);

        expect(screen.getByRole("heading", { name: /my cards/i })).toBeInTheDocument();

        expect(screen.getByAltText("visa")).toHaveAttribute("src", "/img/visa.png");
        expect(screen.getByAltText("mastercard")).toHaveAttribute(
            "src",
            "/img/master-card.png",
        );

        expect(screen.getByText(/4325/i)).toBeInTheDocument();
    });
});
