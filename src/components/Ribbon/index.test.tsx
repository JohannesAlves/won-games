import { screen } from "@testing-library/react";

import Ribbon from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Ribbon />", () => {
    it("should be render text", () => {
        renderWithTheme(<Ribbon>Best Seller</Ribbon>);

        expect(screen.getByText(/best seller/i)).toBeInTheDocument();
    });

    it("should be render with primary color", () => {
        renderWithTheme(<Ribbon>Best Seller</Ribbon>);

        expect(screen.getByText(/best seller/i)).toHaveStyle({
            backgroundColor: "#F231A5",
        });
    });

    it("should be render with secondary color", () => {
        renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>);

        expect(screen.getByText(/best seller/i)).toHaveStyle({
            backgroundColor: "#3CD3C1",
        });
    });

    it("should be render with normal size as default", () => {
        renderWithTheme(<Ribbon>Best Seller</Ribbon>);

        expect(screen.getByText(/best seller/i)).toHaveStyle({
            height: "3.6rem",
            fontSize: "1.4rem",
        });
    });

    it("should be render with small size", () => {
        renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>);

        expect(screen.getByText(/best seller/i)).toHaveStyle({
            height: "2.6rem",
            fontSize: "1.2rem",
        });
    });
});
