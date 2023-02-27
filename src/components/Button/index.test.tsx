import { renderWithTheme } from "../../utils/tests/helpers";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";

import Button from ".";
import { screen } from "@testing-library/react";

describe("<Button />", () => {
    it("should be render medium button by default", () => {
        renderWithTheme(<Button>Buy Now</Button>);

        expect(screen.getByRole("button", { name: /Buy Now/i })).toHaveStyle({
            height: "4rem",
            padding: "0.8rem 3.2rem",
            "font-size": "1.4rem",
        });
    });

    it("should be render small size when prop is passed", () => {
        renderWithTheme(<Button size="small">Buy Now</Button>);

        expect(screen.getByRole("button", { name: /Buy Now/i })).toHaveStyle({
            height: "3rem",
            "font-size": "1.2rem",
        });
    });

    it("should be render large size when prop is passed", () => {
        renderWithTheme(<Button size="large">Buy Now</Button>);

        expect(screen.getByRole("button", { name: /Buy Now/i })).toHaveStyle({
            height: "5rem",
            "font-size": "1.6rem",
            padding: "0.8rem 4.8rem",
        });
    });

    it("should be render full width button", () => {
        renderWithTheme(<Button fullWidth>Buy Now</Button>);

        expect(screen.getByRole("button", { name: /Buy Now/i })).toHaveStyle({
            width: "100%",
        });
    });

    it("should be render button with icon", () => {
        renderWithTheme(
            <Button icon={<AddShoppingCart data-testid="icon" />}>Buy Now</Button>,
        );

        expect(screen.getByText(/buy now/i)).toBeInTheDocument();
        expect(screen.getByTestId(/icon/i)).toBeInTheDocument();
    });
});
