import { screen } from "utils/test-utils";

import CartIcon from ".";
import { render } from "utils/test-utils";
import { CartContextDefaultValues } from "hooks/useCart";

describe("<CartIcon />", () => {
    it("should render the cart without badge", () => {
        render(<CartIcon />);

        expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
        expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
    });

    it("should render the cart with badge", () => {
        render(<CartIcon />, {
            cartProviderProps: { ...CartContextDefaultValues, quantity: 1 },
        });

        expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument();
        expect(screen.getByText(/1/i)).toBeInTheDocument();
    });
});
