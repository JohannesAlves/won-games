import { screen } from "@testing-library/react";

import CartIcon from ".";
import { renderWithTheme } from "utils/tests/helpers";

describe("<CartIcon />", () => {
    it("should render the cart without badge", () => {
        renderWithTheme(<CartIcon />);

        expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
        expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
    });

    it("should render the cart with badge", () => {
        renderWithTheme(<CartIcon quantity={1} />);

        expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument();
        expect(screen.getByText(/1/i)).toBeInTheDocument();
    });

    it("should not render badge with negative values", () => {
        renderWithTheme(<CartIcon quantity={-1} />);

        expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
    });
});
