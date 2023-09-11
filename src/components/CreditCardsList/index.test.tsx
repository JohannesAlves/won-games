import { screen } from "utils/test-utils";

import CreditCardsList from ".";
import mockCards from "components/PaymentOptions/mock";
import { render } from "utils/test-utils";

describe("<CreditCardsList />", () => {
    it("should render the cards list", () => {
        render(<CreditCardsList cards={mockCards} />);

        expect(screen.getByRole("heading", { name: /my cards/i })).toBeInTheDocument();

        expect(screen.getByAltText("visa")).toHaveAttribute("src", "/img/visa.png");
        expect(screen.getByAltText("mastercard")).toHaveAttribute(
            "src",
            "/img/master-card.png",
        );

        expect(screen.getByText(/4325/i)).toBeInTheDocument();
    });
});
