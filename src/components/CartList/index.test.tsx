import { screen } from "utils/test-utils";

import CartList from ".";
import items from "./mock";
import { render } from "utils/test-utils";
import { CartContextDefaultValues } from "hooks/useCart";

describe("<CartList />", () => {
    it("should render the cart list", () => {
        const cartProviderProps = {
            ...CartContextDefaultValues,
            items,
            total: "R$ 330,00",
        };

        render(<CartList />, { cartProviderProps });

        expect(screen.getAllByRole("heading")).toHaveLength(2);
        expect(screen.getByText("R$ 330,00")).toBeInTheDocument();
    });

    it("should render the button", () => {
        const cartProviderProps = {
            ...CartContextDefaultValues,
            items,
        };

        render(<CartList hasButton />, { cartProviderProps });

        expect(screen.getByText(/buy it now/i)).toBeInTheDocument();
    });

    it("should render <Empty /> if are no games", () => {
        render(<CartList />);

        expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
        expect(screen.queryByText(/total/i)).not.toBeInTheDocument();
    });
});
