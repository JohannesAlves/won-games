import { screen } from "utils/test-utils";

import Ribbon from ".";
import { render } from "utils/test-utils";

describe("<Ribbon />", () => {
    it("should be render text", () => {
        render(<Ribbon>Best Seller</Ribbon>);

        expect(screen.getByText(/best seller/i)).toBeInTheDocument();
    });

    it("should be render with primary color", () => {
        render(<Ribbon>Best Seller</Ribbon>);

        expect(screen.getByText(/best seller/i)).toHaveStyle({
            backgroundColor: "#F231A5",
        });
    });

    it("should be render with secondary color", () => {
        render(<Ribbon color="secondary">Best Seller</Ribbon>);

        expect(screen.getByText(/best seller/i)).toHaveStyle({
            backgroundColor: "#3CD3C1",
        });
    });

    it("should be render with normal size as default", () => {
        render(<Ribbon>Best Seller</Ribbon>);

        expect(screen.getByText(/best seller/i)).toHaveStyle({
            height: "3.6rem",
            fontSize: "1.4rem",
        });
    });

    it("should be render with small size", () => {
        render(<Ribbon size="small">Best Seller</Ribbon>);

        expect(screen.getByText(/best seller/i)).toHaveStyle({
            height: "2.6rem",
            fontSize: "1.2rem",
        });
    });
});
